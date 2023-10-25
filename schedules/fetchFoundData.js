const { scheduleJob } = require("node-schedule");
const {
  foundPotal: { fetchDetail, fetchList },
  foundDB: { mark2delete, deleteMarked, update, insert },
} = require("../repositories");
const { NUM_OF_DATA_PER_PAGE, FOUND_SCHEDULE } = require("../constant");

console.log(`schedule fetchFound at ${JSON.stringify(FOUND_SCHEDULE)}`);
scheduleJob(FOUND_SCHEDULE, async () => {
  await mark2delete();

  let page = 0;
  let list;
  do {
    try {
      list = await fetchList(++page);

      await Promise.all(
        list.map(async ({ atcId, fdSn }) => {
          const data = await fetchDetail(atcId, fdSn);
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
