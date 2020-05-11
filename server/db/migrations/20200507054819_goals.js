const table = 'goals'

exports.up = (knex) =>
  knex.schema.createTable(table, (t) => {
    t.increments('id').primary()
    t.integer('user_id').references('users.id')
    t.string('goal_name')
    t.decimal('target_budget')
    t.datetime('start_date').defaultTo(knex.fn.now())
    t.datetime('target_date')
    t.decimal('current_amount').defaultTo(0)
    t.boolean('active').defaultTo(true)
  })

exports.down = (knex) => knex.schema.dropTable(table)
