const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const { getDynamoDBClient } = require('../awsUtils');
const cors = require('cors');

const dynamodb = getDynamoDBClient();
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.use(cors());

router.get('/', (req, res) => {
    const params = {
        TableName: 'Characters',
    };

    dynamodb.scan(params, (err, data) => {
        if (err) {
            console.error('Error reading characters from DynamoDB:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log('Characters retrieved:', data.Items);
            res.json(data.Items);
        }
    });
});

router.post('/', upload.single("image"), (req, res) => {
    const {
        name,
        race,
        class: characterClass,
        age,
        force,
        constitution,
        dexterity,
        intelligence,
        sagesse,
        charisma,
        chance,
        notes,
    } = req.body;

    const params = {
        TableName: 'Characters',
        Item: {
            id: uuidv4(),
            name: name,
            race: race,
            class: characterClass,
            age: age,
            force: force,
            constitution: constitution,
            dexterity: dexterity,
            intelligence: intelligence,
            sagesse: sagesse,
            charisma: charisma,
            chance: chance,
            notes: notes,
        },
    };

    // Add image data to DynamoDB Item if an image is provided
    if (req.file) {
        params.Item.image = {
            data: req.file.buffer,
            contentType: req.file.mimetype,
        };
    }

    dynamodb.put(params, (err, data) => {
        if (err) {
            console.error('Error adding character to DynamoDB:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log('Character added to DynamoDB:', params.Item);
            res.json({ message: 'Character added successfully' });
        }
    });
});

module.exports = router;
