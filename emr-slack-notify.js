var https = require ('https');
var util = require('util');

exports.handler = function(event, context) {

    console.log('SNS Message:', JSON.stringify(event, null, 2));
    console.log('EMR Event Message:', event.Records[0].Sns.Message);

    var message = JSON.parse(event.Records[0].Sns.Message);
    var color = 'danger';
    var severity = message.detail.severity;
    var subject = message["detail-type"];
    var state = message.detail.state;
    var text = message.detail.message;

    var postData = {
        "channel": process.env.SLACK_CHANNEL,
        "username": "AWS EMR Events via Lambda",
        "text": "*" + subject + " :: " + state +"*",
        "icon_emoji": ":aws:"
    };

    switch(severity) {
        case "INFO":
            color = 'good';
            break;
        case "CRITICAL":
            color = 'warning';
            break;
    }

    postData.attachments = [
        {
            "color": color,
            "text": text
        }
    ];

    var options = {
        hostname: 'hooks.slack.com',
        port: 443,
        path: process.env.SLACK_WEBHOOK_PATH,
        method: 'POST'
    };

    var req = https.request(options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        context.done(null);
      });
    });

    req.on('error', function(e) {
      console.log('problem with request: ' + e.message);
    });

    req.write(util.format("%j", postData));
    req.end();
};
