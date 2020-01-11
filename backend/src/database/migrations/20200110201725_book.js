#!/usr/bin/env node
'use strict';
exports.up = async (knex) => {
  await knex.schema.createTable('book', (table) => {
    table.increments('book_id').primary();
    table.string('book_name', 450).notNullable();
    table.string('book_author', 100);
    table.date('book_added_date');
    table.string('book_status', 45).notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('book');
};
