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
};
