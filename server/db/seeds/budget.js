exports.seed = knex =>
  knex('expense')
    .del()
    .then(() => knex('income').del())
    .then(() => knex('goals').del())
    .then(() => knex('profiles').del())
    .then(() => knex('users').del())
    .then(() =>
      knex('users').insert([
        {
          id: 1001,
          email: 'johndoe@testing.com',
          password:
            '$2b$10$E42ZIELPHZiIN.2DjHbywuhHDONKSRK7/jppFiJU/wtm2EGV0Fszu'
        },
        {
          id: 1002,
          email: 'lucas@testing.com',
          password:
            '$2b$10$E42ZIELPHZiIN.2DjHbywuhHDONKSRK7/jppFiJU/wtm2EGV0Fszu'
        },
        {
          id: 1003,
          email: 'senseimatt@testing.com',
          password:
            '$2b$10$E42ZIELPHZiIN.2DjHbywuhHDONKSRK7/jppFiJU/wtm2EGV0Fszu'
        },
        {
          id: 1004,
          email: 'chrishty@testing.com',
          password:
            '$2b$10$E42ZIELPHZiIN.2DjHbywuhHDONKSRK7/jppFiJU/wtm2EGV0Fszu'
        },
        {
          id: 1005,
          email: 'jimmi@testing.com',
          password:
            '$2b$10$E42ZIELPHZiIN.2DjHbywuhHDONKSRK7/jppFiJU/wtm2EGV0Fszu'
        },
        {
          id: 1006,
          email: 'david@testing.com',
          password:
            '$2b$10$E42ZIELPHZiIN.2DjHbywuhHDONKSRK7/jppFiJU/wtm2EGV0Fszu'
        }
      ])
    )
    .then(() =>
      knex('profiles').insert([
        {
          id: 1,
          user_id: 1001,
          full_name: 'John Doe',
          avatar:
            'https://cdn2.iconfinder.com/data/icons/web-mobile-2-1/64/user_avatar_admin_web_mobile_business_office-512.png'
        },
        {
          id: 2,
          user_id: 1002,
          full_name: 'Jane Doe',
          avatar:
            'https://cdn2.iconfinder.com/data/icons/web-mobile-2-1/64/user_avatar_admin_web_mobile_business_office-512.png'
        },
        {
          id: 3,
          user_id: 1003,
          full_name: 'Sensei Matt',
          avatar:
            'https://cdn2.iconfinder.com/data/icons/web-mobile-2-1/64/user_avatar_admin_web_mobile_business_office-512.png'
        },
        {
          id: 4,
          user_id: 1004,
          full_name: 'Christy',
          avatar:
            'https://cdn2.iconfinder.com/data/icons/web-mobile-2-1/64/user_avatar_admin_web_mobile_business_office-512.png'
        },
        {
          id: 5,
          user_id: 1005,
          full_name: 'Jimmi',
          avatar:
            'https://cdn2.iconfinder.com/data/icons/web-mobile-2-1/64/user_avatar_admin_web_mobile_business_office-512.png'
        },
        {
          id: 6,
          user_id: 1006,
          full_name: 'David',
          avatar:
            'https://cdn2.iconfinder.com/data/icons/web-mobile-2-1/64/user_avatar_admin_web_mobile_business_office-512.png'
        }
      ])
    )
    .then(() =>
      knex('goals').insert([
        {
          id: 1,
          user_id: 1001,
          goal_name: '',
          target_budget: 1000,
          start_date: '',
          target_date: '',
          period: 'short',
          budget_distribution: 100
        },
        {
          id: 2,
          user_id: 1001,
          goal_name: '',
          target_budget: 1000,
          start_date: '',
          target_date: '',
          period: 'short',
          budget_distribution: 100
        },
        {
          id: 3,
          user_id: 1001,
          goal_name: '',
          target_budget: 1000,
          start_date: '',
          target_date: '',
          period: 'short',
          budget_distribution: 100
        },
        {
          id: 4,
          user_id: 1001,
          goal_name: '',
          target_budget: 1000,
          start_date: '',
          target_date: '',
          period: 'short',
          budget_distribution: 100
        },
        {
          id: 5,
          user_id: 1001,
          goal_name: '',
          target_budget: 1000,
          start_date: '',
          target_date: '',
          period: 'short',
          budget_distribution: 100
        },
        {
          id: 6,
          user_id: 1001,
          goal_name: '',
          target_budget: 1000,
          start_date: '',
          target_date: '',
          period: 'short',
          budget_distribution: 100
        }
      ])
    )
    .then(() =>
      knex('income').insert([
        {
          id: 1,
          user_id: 1001,
          income_name: "Chrishty's fulltime slave",
          frequency: 'weekly',
          income_type: 'primary',
          income_amount: 200
        },
        {
          id: 2,
          user_id: 1001,
          income_name: "Chrishty's fulltime slave",
          frequency: 'weekly',
          income_type: 'primary',
          income_amount: 200
        },
        {
          id: 3,
          user_id: 1001,
          income_name: "Chrishty's fulltime slave",
          frequency: 'weekly',
          income_type: 'primary',
          income_amount: 200
        },
        {
          id: 4,
          user_id: 1001,
          income_name: "Chrishty's fulltime slave",
          frequency: 'weekly',
          income_type: 'primary',
          income_amount: 200
        },
        {
          id: 5,
          user_id: 1001,
          income_name: "Chrishty's fulltime slave",
          frequency: 'weekly',
          income_type: 'primary',
          income_amount: 200
        },
        {
          id: 6,
          user_id: 1001,
          income_name: "Chrishty's fulltime slave",
          frequency: 'weekly',
          income_type: 'primary',
          income_amount: 200
        }
      ])
    )
    .then(() =>
      knex('expense').insert([
        {
          id: 1,
          user_id: 1001,
          expense_name: 'fuel',
          categories: 'essential',
          frequency: 'weekly',
          expense_amount: 200
        },
        {
          id: 2,
          user_id: 1001,
          expense_name: 'fuel',
          categories: 'essential',
          frequency: 'weekly',
          expense_amount: 200
        },
        {
          id: 3,
          user_id: 1001,
          expense_name: 'fuel',
          categories: 'essential',
          frequency: 'weekly',
          expense_amount: 200
        },
        {
          id: 4,
          user_id: 1001,
          expense_name: 'fuel',
          categories: 'essential',
          frequency: 'weekly',
          expense_amount: 200
        },
        {
          id: 5,
          user_id: 1001,
          expense_name: 'fuel',
          categories: 'essential',
          frequency: 'weekly',
          expense_amount: 200
        },
        {
          id: 6,
          user_id: 1001,
          expense_name: 'fuel',
          categories: 'essential',
          frequency: 'weekly',
          expense_amount: 200
        }
      ])
    )
