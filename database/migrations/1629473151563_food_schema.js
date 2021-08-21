"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FoodSchema extends Schema {
  up() {
    this.create("foods", (table) => {
      table.increments();
      // table
      //   .integer("user_id")
      //   .unsigned()
      //   .references("id")
      //   .inTable("users")
      //   .onUpdate("CASCADE")
      //   .onDelete("CASCADE");
      table.string("description").notNullable();
      table.string("image").notNullable();
      table.string("name").notNullable();
      table.decimal("price").notNullable();
      table.boolean("available").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("foods");
  }
}

module.exports = FoodSchema;
