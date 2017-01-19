'use strict';
const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

module.exports.get = (event, context, callback) => {
  const params = {
    TableName: 'my-table',
    Key: {
      "my_key": event.pathParameters.id,
    },
  };

  dynamo.get(params, function(err, data) {
    if (err) {
      callback(null, { error: "Error"})
    } else {
      const response = {
        statusCode: 200,
        body: JSON.stringify(data),
      };
      callback(null, response);
    }

   });
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
}
