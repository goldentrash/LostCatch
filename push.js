const { scheduleJob } = require("node-schedule");
const { NOTIFICATION_SCHEDULE } = require("./constant");

const pushNotification = require("./schedules/pushNotification");

// 수동 동작하도록
pushNotification().then(() => process.exit(0));

// console.log(`schedule pushNotification at ${JSON.stringify(NOTIFICATION_SCHEDULE)}`);
// scheduleJob(NOTIFICATION_SCHEDULE, pushNotification);
