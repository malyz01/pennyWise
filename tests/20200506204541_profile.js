const table = 'profile'

exports.up = (knex) =>
  knex.schema.createTable(table, (t) => {
    t.increments('id').primary()
    t.integer('user_id').references('user.id')
    t.string('full_name')
    t.string('avatar')
  })

exports.down = (knex) => knex.schema.dropTable(table)
