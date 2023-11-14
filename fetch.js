const { scheduleJob } = require("node-schedule");
const { FOUND_SCHEDULE, LOST_SCHEDULE } = require("./constant");

const fetchFound = require("./schedules/fetchFoundData");
const fetchLost = require("./schedules/fetchLostData");

// 수동 동작하도록
fetchFound().then(() => fetchLost().then(() => process.exit(0)));

// console.log(`schedule fetchFound at ${JSON.stringify(FOUND_SCHEDULE)}`);
// scheduleJob(FOUND_SCHEDULE, fetchFound);

// console.log(`schedule fetchLost at ${JSON.stringify(LOST_SCHEDULE)}`);
// scheduleJob(LOST_SCHEDULE, fetchLost);
