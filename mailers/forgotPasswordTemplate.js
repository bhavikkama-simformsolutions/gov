const params = require("./forgotPassword.json");
// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "us-east-1" });
AWS.config.apiVersions = {
    ses: "2010-12-01",
    // other service API versions
};
var ses = new AWS.SES();
// to create for first time , i.e. with unique new temp name use createTemplate
ses.createTemplate(params, (err, data) => {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
});
