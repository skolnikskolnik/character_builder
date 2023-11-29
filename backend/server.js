require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const characterApi = require('./api/characters');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/characters', characterApi);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    try {
        await require('./awsUtils').assumeRole();
        console.log('AWS role assumed successfully');
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error('Error assuming AWS role:', error);
    }
});
