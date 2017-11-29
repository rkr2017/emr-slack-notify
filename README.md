# emr-slack-notify
AWS Lambda function to send EMR events to Slack via SNS

This is a simple Node.JS Lambda function for sending the EMR Events captured through CloudWatch Events via SNS and Lambda to a Slack Channel using the Incoming WebHook.

The function only sends the essential details like detail-type, state and message.

To run the function in your AWS environment, pleae configure the environment variables - SLACK_CHANNEL and SLACK_WEBHOOK_PATH (only the part from /services/... is required)
