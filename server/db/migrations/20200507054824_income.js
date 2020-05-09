const table = 'income'

exports.up = knex =>
  knex.schema.createTable(table, t => {
    t.increments('id').primary()
    t.integer('user_id').references('users.id')
    t.string('income_name')
    t.string('frequency')
    t.string('income_type')
    t.integer('income_amount')
  })

exports.down = knex => knex.schema.dropTable(table)
