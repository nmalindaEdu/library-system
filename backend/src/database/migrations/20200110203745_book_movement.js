#!/usr/bin/env node
'use strict';
exports.up = async (knex) => {
  await knex.schema.createTable('book_movement', (table) => {
    table.integer('book_movement_id').primary();
    table.integer('book_movement_book_id', 10).unsigned();
    table
      .foreign('book_movement_book_id')
      .references('book_id')
      .inTable('book')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .withKeyName('FK_book_movement_1');
    table.integer('book_movement_issuer_id', 10).notNullable();
    table.integer('book_movement_borrower_id', 10).unsigned();
    table
      .foreign('book_movement_borrower_id')
      .references('user_id')
      .inTable('user')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .withKeyName('FK_book_movement_2');

    // .references('user_id')
    // .inTable('user')
    // .onDelete('CASCADE')
    // .onUpdate('CASCADE')
    // .index();
    table.date('book_movement_issue_date');
    table.time('book_movement_issue_time');
    table.date('book_movement_must_return_date');
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('book_movement');
};
