const express = require('express');
const AWS = require('aws-sdk');
require("dotenv").config();

// Set up AWS SDK with assumed role credentials
const sts = new AWS.STS();

const assumeRoleParams = {
    RoleArn: process.env.ROLE_ARN,
    RoleSessionName: 'AssumeRoleSession',
};

let tempCredentials;

sts.assumeRole(assumeRoleParams, (err, data) => {
    if (err) {
        console.error('Error assuming role:', err);
    } else {
        tempCredentials = data.Credentials;
    }
});

const dynamodb = new AWS.DynamoDB.DocumentClient({
    credentials: tempCredentials,
    region: 'us-west-2',
});

const app = express();

app.get('/api/characters', (req, res) => {
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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
