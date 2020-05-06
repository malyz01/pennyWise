const table = 'goals'

exports.up = (knex) =>
  knex.schema.createTable(table, (t) => {
    t.increments('id').primary()
    t.integer('user_id').references('auth.id')
    t.string('goal_name')
    t.integer('target_budget')
    t.datetime('start_date').defaultTo(knex.fn.now())
    t.datetime('target_date')
    t.string('period')
    t.integer('budget_distribution')
  })

exports.down = (knex) => knex.schema.dropTable(table)
