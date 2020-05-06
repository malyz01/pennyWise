const table = 'income'

exports.up = (knex) =>
  knex.schema.createTable(table, (t) => {
    t.increments('id').primary()
    t.integer('user_id').references('user.id')
    t.string('income_type')
    t.integer('income_amount')
  })

exports.down = (knex) => knex.schema.dropTable(table)
