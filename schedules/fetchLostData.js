const { scheduleJob } = require("node-schedule");
const {
  lostPotal: { fetchDetail, fetchList },
  lostDB: { mark2delete, deleteMarked, update, insert },
} = require("../repositories");
const { NUM_OF_DATA_PER_PAGE, LOST_SCHEDULE } = require("../constant");

console.log(`schedule fetchLost at ${JSON.stringify(LOST_SCHEDULE)}`);
scheduleJob(LOST_SCHEDULE, async () => {
  await mark2delete();

  let page = 0;
  let list;
  do {
    try {
      list = await fetchList(++page);

      await Promise.all(
        list.map(async ({ atcId }) => {
          const data = await fetchDetail(atcId);
          if (!data) return;

          const success = await update(data);
          if (!success) await insert(data);
        })
      );
    } catch {
      console.log(`skip rest of page ${page}`);
    }
  } while (!list || list.length === NUM_OF_DATA_PER_PAGE);

  await deleteMarked();
});
