import Knex from 'knex';

export async function up(knex: Knex) {
  await knex.schema.createTable('person', (table) => {
    table.increments('id').primary();
    table.integer('parentId').references('person.id');
    table.string('firstName', 100);
    table.string('lastName', 100);
    table.string('email', 100);
  });
}

export async function down(knex: Knex) {
  await knex.schema.dropTable('person');
}
