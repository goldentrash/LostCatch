/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) =>
  knex.schema.createTable("lost", (table) => {
    table.engine("InnoDB");
    table.string("atc_id", 16).primary();
    table.string("image", 1_024).notNullable();
    table.string("location_city", 64).notNullable();
    table.string("location_detail", 128).notNullable();
    table.string("location_type", 64).notNullable();
    table.string("item", 32).notNullable();
    table.string("title", 64).notNullable();
    table.string("status", 32).notNullable();
    table.date("date").notNullable();
    table.string("office", 32).notNullable();
    table.string("tel", 16).notNullable();
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => knex.schema.dropTableIfExists("lost");
