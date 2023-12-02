const { SubscribeCommand } = require("@aws-sdk/client-sns");
const { snsClient } = require(".");
const { NOTIFICATION_ARN } = require("../constant");

module.exports = {
  async subscribeViaEmail(email) {
    return await snsClient.send(
      new SubscribeCommand({
        Protocol: "email",
        TopicArn: NOTIFICATION_ARN,
        Endpoint: email,
      })
    );
  },
};
