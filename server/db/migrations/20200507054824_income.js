const table = 'income'

exports.up = knex =>
  knex.schema.createTable(table, t => {
    t.increments('id').primary()
    t.integer('user_id').references('users.id')
    t.string('income_name')
    t.string('frequency').defaultTo('Weekly')
    t.string('income_type')
    t.float('income_amount')
    t.boolean('active').defaultTo(true)
  })

exports.down = knex => knex.schema.dropTable(table)
