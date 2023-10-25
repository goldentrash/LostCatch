const {
  lostPotal: { fetchDetail, fetchList },
  lostDB: { mark2delete, deleteMarked, update, insert },
} = require("../repositories");
const { NUM_OF_DATA_PER_PAGE } = require("../constant");

module.exports = async () => {
  await mark2delete();

  let page = 0;
  let list;
  do {
    list = await fetchList(++page);

    await Promise.all(
      list.map(async ({ atcId }) => {
        const data = await fetchDetail(atcId);
        if (!data) return;

        const success = await update(data);
        if (!success) await insert(data);
      })
    );
  } while (list.length === NUM_OF_DATA_PER_PAGE);

  await deleteMarked();
};
