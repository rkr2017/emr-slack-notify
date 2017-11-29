# emr-slack-notify
AWS Lambda function to send EMR events to Slack via SNS

This is a simple Node.JS Lambda function for sending the EMR Events captured through CloudWatch Events via SNS and Lambda to a Slack Channel using the Incoming WebHook.

The function only sends the essential details like detail-type, state and message.

To run the function in your AWS environment, pleae configure the environment variables - SLACK_CHANNEL and SLACK_WEBHOOK_PATH (only the part from /services/... is required)

References - I have used the below given awesome blog posts for writing my own version for EMR events

1. http://matthewcooper.net/2015/08/21/aws-cloudwatch-to-slack-via-api-gateway-and-lambda/
2. https://medium.com/cohealo-engineering/how-set-up-a-slack-channel-to-be-an-aws-sns-subscriber-63b4d57ad3ea
