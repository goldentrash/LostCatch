const knex = require("knex")(require("../knexfile"));

module.exports = {
  async mark2delete() {
    await knex("lost").update("new", false).update("will_delete", true);
    console.log(`all lost data has been marked old and will delete`);
  },

  async deleteMarked() {
    await knex("lost").where("will_delete", true).del();
    console.log(`all marked data has been deleted`);
  },

  async update(data) {
    const numAffectedRow = await knex("lost")
      .where("atc_id", data.atc_id)
      .update({ ...data, will_delete: false });

    const success = numAffectedRow !== 0;
    if (success) console.log(`update ${data.atc_id}`);
    return success;
  },

  async insert(data) {
    await knex("lost").insert(data);
    console.log(`insert ${data.atc_id}`);
  },

  async find({
    atc_id,
    location_city,
    location_detail,
    location_type,
    item,
    title,
    date,
    office,
    numRows,
    page,
  }) {
    const query = knex("lost");

    if (atc_id) query.where("atc_id", atc_id);
    if (location_city)
      query.where("location_city", "LIKE", `%${location_city}%`);
    if (location_detail)
      query.where("location_detail", "LIKE", `%${location_detail}%`);
    if (location_type)
      query.where("location_type", "LIKE", `%${location_type}%`);
    if (item) query.where("item", "LIKE", `%${item}%`);
    if (title) query.where("title", "LIKE", `%${title}%`);
    if (date) query.where("date", date);
    if (office) query.where("office", "LIKE", `%${office}%`);

    if (numRows) query.limit(numRows);
    if (numRows && page) query.offset(numRows * page);

    const dataList = await query.select();
    return dataList.map(
      ({
        atc_id,
        image,
        location_city,
        location_detail,
        location_type,
        item,
        title,
        status,
        date,
        office,
        tel,
      }) => ({
        atc_id,
        image,
        location_city,
        location_detail,
        location_type,
        item,
        title,
        status,
        date,
        office,
        tel,
      })
    );
  },
};
