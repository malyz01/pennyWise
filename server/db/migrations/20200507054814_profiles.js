const table = 'profiles'

exports.up = (knex) =>
  knex.schema.createTable(table, (t) => {
    t.increments('id').primary()
    t.integer('user_id').references('users.id')
    t.string('full_name')
    t.string('avatar').defaultTo('https://cdn2.iconfinder.com/data/icons/web-mobile-2-1/64/user_avatar_admin_web_mobile_business_office-512.png')
  })

exports.down = (knex) => knex.schema.dropTable(table)
