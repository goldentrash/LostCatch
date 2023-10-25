const knex = require("knex")(require("../knexfile"));

module.exports = {
  async mark2delete() {
    await knex("found").update("new", false).update("will_delete", true);
    console.log(`all found data has been marked old and will delete`);
  },

  async deleteMarked() {
    await knex("found").where("will_delete", true).del();
    console.log(`all marked data has been deleted`);
  },

  async update(data) {
    const numAffectedRow = await knex("found")
      .where("atc_id", data.atc_id)
      .update({ ...data, will_delete: false });

    const success = numAffectedRow !== 0;
    if (success) console.log(`update ${data.atc_id}`);
    return success;
  },

  async insert(data) {
    await knex("found").insert(data);
    console.log(`insert ${data.atc_id}`);
  },

  async find({
    atc_id,
    location_storing,
    location_found,
    item,
    status,
    date,
    office,
    numRows,
    page,
  }) {
    const query = knex("found");

    if (atc_id) query.where("atc_id", atc_id);
    if (location_storing)
      query.where("location_storing", "LIKE", `%${location_storing}%`);
    if (location_found)
      query.where("location_found", "LIKE", `%${location_found}%`);
    if (item) query.where("item", "LIKE", `%${item}%`);
    if (status) query.where("status", "LIKE", `%${status}%`);
    if (date) query.where("date", date);
    if (office) query.where("office", "LIKE", `%${office}%`);

    if (numRows) query.limit(numRows);
    if (numRows && page) query.offset(numRows * page);

    const dataList = await query.select();
    return dataList.map(
      ({
        atc_id,
        image,
        location_storing,
        location_found,
        item,
        detail,
        status,
        date,
        office,
        tel,
      }) => ({
        atc_id,
        image,
        location_storing,
        location_found,
        item,
        detail,
        status,
        date,
        office,
        tel,
      })
    );
  },
};
