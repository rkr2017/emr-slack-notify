# emr-slack-notify
##### This function is to send the EMR Events captured by CloudWatch Events service `via SNS` to a public Slack channel using the Incoming WebHooks feature

## Setup

1. Create a NodeJS Lambda function using the code available
2. Configure Environment Variables - SLACK_CHANNEL and SLACK_WEBHOOK_PATH (only the part from /services/..)
3. Create an SNS topic
3. Enable CloudWatch Event rules (shown below) for EMR clusters and choose the above created SNS topic as a Target
4. Add SNS as a Trigger for the Lambda function


# cloudwatch-to-slack
##### This function is to send the EMR Events captured by CloudWatch Events service to a public Slack channel using the Incoming WebHooks feature

## Setup

1. Create a NodeJS Lambda function using the code available
2. Configure Environment Variables - SLACK_CHANNEL and SLACK_WEBHOOK_PATH (only the part from /services/..)
3. Enable CloudWatch Event rules for EMR clusters and choose the above created Lambda function as a Target.

#### CloudWatch Sample Rules

##### EMR-Cluster-Change event -

```
{
  "source": [
    "aws.emr"
  ],
  "detail-type": [
    "EMR Cluster State Change"
  ],
  "detail": {
    "state": [
      "RUNNING",
      "TERMINATED",
      "TERMINATED_WITH_ERRORS"
    ]
  }
}
```

##### EMR-State-Change event -

```
{
  "source": [
    "aws.emr"
  ],
  "detail-type": [
    "EMR Step Status Change"
  ],
  "detail": {
    "state": [
      "RUNNING",
      "COMPLETED",
      "CANCELLED",
      "FAILED"
    ]
  }
}
```



###### References

1. http://matthewcooper.net/2015/08/21/aws-cloudwatch-to-slack-via-api-gateway-and-lambda/
2. https://medium.com/cohealo-engineering/how-set-up-a-slack-channel-to-be-an-aws-sns-subscriber-63b4d57ad3ea
