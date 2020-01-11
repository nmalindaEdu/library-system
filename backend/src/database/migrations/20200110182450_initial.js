#!/usr/bin/env node
'use strict';
exports.up = async (knex) => {
  await knex.schema.createTable('user', (table) => {
    table.increments('user_id').primary();
    table.string('user_name', 45).notNullable();
    table.string('user_password', 450).notNullable();
    table.string('user_privilege', 45).notNullable();
    table.date('user_added_date');
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('user');
};
