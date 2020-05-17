const table = 'expense'

exports.up = (knex) =>
  knex.schema.createTable(table, (t) => {
    t.increments('id').primary()
    t.integer('user_id').references('users.id')
    t.string('expense_name')
    t.string('categories')
    t.string('frequency').defaultTo('Weekly')
    t.float('expense_amount')
    t.boolean('active').defaultTo(true)
  })

exports.down = (knex) => knex.schema.dropTable(table)
