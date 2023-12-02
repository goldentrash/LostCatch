const { PublishCommand } = require("@aws-sdk/client-sns");
const { snsClient } = require("../repositories");
const {
  NOTIFICATION_ARN,
  NOTIFICATION_TITLE,
  NOTIFICATION_MESSAGE,
} = require("../constant");

module.exports = async () => {
  const response = await snsClient.send(
    new PublishCommand({
      Subject: NOTIFICATION_TITLE,
      Message: NOTIFICATION_MESSAGE,
      TopicArn: NOTIFICATION_ARN,
    })
  );
  console.log(response);
};
