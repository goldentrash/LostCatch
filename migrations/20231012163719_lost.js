/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) =>
  knex.schema.createTable("lost", (table) => {
    table.engine("InnoDB");
    table.string("atc_id", 32).primary();
    table.string("image", 1_024).notNullable();
    table.string("location_city", 64).notNullable();
    table.string("location_detail", 128).notNullable();
    table.string("location_type", 64).notNullable();
    table.string("item", 128).notNullable();
    table.string("title", 128).notNullable();
    table.string("status", 64).notNullable();
    table.date("date").notNullable();
    table.string("office", 64).notNullable();
    table.string("tel", 32).notNullable();
    table.boolean("new").notNullable().defaultTo(true);
    table.boolean("will_delete").notNullable().defaultTo(false);
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => knex.schema.dropTableIfExists("lost");
