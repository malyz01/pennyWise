const table = 'expense'

exports.up = (knex) =>
  knex.schema.createTable(table, (t) => {
    t.increments('id').primary()
    t.integer('user_id').references('user.id')
    t.string('categories')
    t.string('expense_name')
    t.string('frequency')
    t.integer('expense_amount')
  })

exports.down = (knex) => knex.schema.dropTable(table)
