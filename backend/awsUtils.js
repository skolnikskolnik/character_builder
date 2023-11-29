const AWS = require('aws-sdk');

const sts = new AWS.STS();

const assumeRoleParams = {
    RoleArn: process.env.ROLE_ARN,
    RoleSessionName: 'AssumeRoleSession',
};

let tempCredentials;

const assumeRole = () => {
    return new Promise((resolve, reject) => {
        sts.assumeRole(assumeRoleParams, (err, data) => {
            if (err) {
                reject(err);
            } else {
                tempCredentials = data.Credentials;
                resolve();
            }
        });
    });
};

const getDynamoDBClient = () => {
    return new AWS.DynamoDB.DocumentClient({
        credentials: tempCredentials,
        region: 'us-west-2',
    });
};

module.exports = { assumeRole, getDynamoDBClient };
