exports.seed = (knex) =>
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
          email: 'matt@testing.com',
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
          id: 1001,
          user_id: 1001,
          full_name: 'John Doe',
          avatar:
            'https://cdn2.iconfinder.com/data/icons/web-mobile-2-1/64/user_avatar_admin_web_mobile_business_office-512.png'
        },
        {
          id: 1002,
          user_id: 1002,
          full_name: 'Lucas Santana',
          avatar:
            'https://static-cdn.jtvnw.net/jtv_user_pictures/68ce82ab-4b24-402b-b3bf-136237e2d183-profile_banner-480.jpeg'
        },
        {
          id: 1003,
          user_id: 1003,
          full_name: 'Matt Uy',
          avatar:
            'https://cdn2.iconfinder.com/data/icons/web-mobile-2-1/64/user_avatar_admin_web_mobile_business_office-512.png'
        },
        {
          id: 1004,
          user_id: 1004,
          full_name: 'Christy',
          avatar:
            'https://cdn2.iconfinder.com/data/icons/web-mobile-2-1/64/user_avatar_admin_web_mobile_business_office-512.png'
        },
        {
          id: 1005,
          user_id: 1005,
          full_name: 'Jimmi',
          avatar:
            'https://cdn2.iconfinder.com/data/icons/web-mobile-2-1/64/user_avatar_admin_web_mobile_business_office-512.png'
        },
        {
          id: 1006,
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
          id: 1001,
          user_id: 1001,
          goal_name: 'Vacation',
          target_budget: 1000,
          target_date: '2020-06-01',
          budget_distribution: 100
        },
        {
          id: 1002,
          user_id: 1001,
          goal_name: 'House Repairs',
          target_budget: 1000,
          target_date: '2020-11-20',
          budget_distribution: 100
        },
        {
          id: 1003,
          user_id: 1001,
          goal_name: 'New Car',
          target_budget: 1000,
          target_date: '2021-02-01',
          budget_distribution: 100
        },
        {
          id: 1004,
          user_id: 1001,
          goal_name: 'New Cellphone',
          target_budget: 1000,
          target_date: '2020-07-15',
          budget_distribution: 100
        },
        {
          id: 1005,
          user_id: 1001,
          goal_name: 'New Computer',
          target_budget: 1000,
          target_date: '2020-08-01',
          budget_distribution: 100
        },
        {
          id: 1006,
          user_id: 1001,
          goal_name: 'Christmas Money',
          target_budget: 1000,
          target_date: '2020-12-01',
          budget_distribution: 100
        },
        {
          id: 1007,
          user_id: 1006,
          goal_name: 'Rottweiler Puppy',
          target_budget: 3000,
          target_date: '2021-11-01',
          budget_distribution: 100
        },
        {
          id: 1008,
          user_id: 1006,
          goal_name: 'Wide Screen TV',
          target_budget: 1000,
          target_date: '2020-07-01',
          budget_distribution: 100
        },
        {
          id: 1009,
          user_id: 1006,
          goal_name: 'Jeep Wrangler',
          target_budget: 20000,
          target_date: '2021-12-01',
          budget_distribution: 150
        },
        {
          id: 1010,
          user_id: 1002,
          goal_name: 'Family Reunion',
          target_budget: 2000,
          target_date: '2020-09-01',
          budget_distribution: 80
        },
        {
          id: 1011,
          user_id: 1002,
          goal_name: 'Surf Board',
          target_budget: 1000,
          target_date: '2020-12-01',
          budget_distribution: 100
        },
        {
          id: 1012,
          user_id: 1003,
          goal_name: 'Playstation 5',
          target_budget: 800,
          target_date: '2020-12-01',
          budget_distribution: 50
        },
        {
          id: 1013,
          user_id: 1003,
          goal_name: 'Scooter',
          target_budget: 500,
          target_date: '2020-06-10',
          budget_distribution: 70
        },
        {
          id: 1014,
          user_id: 1004,
          goal_name: 'Jacuzzi',
          target_budget: 5000,
          target_date: '2021-03-03',
          budget_distribution: 70
        },
        {
          id: 1015,
          user_id: 1004,
          goal_name: 'Garden Patio Set',
          target_budget: 1500,
          target_date: '2020-09-01',
          budget_distribution: 100
        },
        {
          id: 16,
          user_id: 1005,
          goal_name: 'Car Tools',
          target_budget: 1000,
          target_date: '2020-08-20',
          budget_distribution: 60
        },
        {
          id: 1017,
          user_id: 1005,
          goal_name: 'Multifuction Printer',
          target_budget: 1000,
          target_date: '2020-12-11',
          budget_distribution: 120
        }
      ])
    )
    .then(() =>
      knex('income').insert([
        {
          id: 1001,
          user_id: 1001,
          income_name: 'Mechanic',
          frequency: 'Weekly',
          income_type: 'Primary',
          income_amount: 1200
        },
        {
          id: 1002,
          user_id: 1002,
          income_name: 'Freelance Web Devloper',
          frequency: 'Weekly',
          income_type: 'Primary',
          income_amount: 1000
        },
        {
          id: 1003,
          user_id: 1003,
          income_name: 'Technical Support',
          frequency: 'Weekly',
          income_type: 'Primary',
          income_amount: 1200
        },
        {
          id: 1004,
          user_id: 1004,
          income_name: 'Systems Engineer',
          frequency: 'Weekly',
          income_type: 'Primary',
          income_amount: 2000
        },
        {
          id: 1005,
          user_id: 1005,
          income_name: 'Network Analyst',
          frequency: 'Weekly',
          income_type: 'Primary',
          income_amount: 1500
        },
        {
          id: 1007,
          user_id: 1006,
          income_name: 'Javascript Full-Stack Developer',
          frequency: 'Weekly',
          income_type: 'Primary',
          income_amount: 2000
        }
      ])
    )
    .then(() =>
      knex('expense').insert([
        {
          id: 1001,
          user_id: 1001,
          expense_name: 'fuel',
          categories: 'Essential',
          frequency: 'Weekly',
          expense_amount: 50
        },
        {
          id: 1002,
          user_id: 1001,
          expense_name: 'Grocery',
          categories: 'Essential',
          frequency: 'Weekly',
          expense_amount: 200
        },
        {
          id: 1003,
          user_id: 1001,
          expense_name: 'Electric Bill',
          categories: 'Essential',
          frequency: 'Monthly',
          expense_amount: 220
        },
        {
          id: 1004,
          user_id: 1001,
          expense_name: 'Pizza',
          categories: 'Non-Essential',
          frequency: 'Weekly',
          expense_amount: 40
        },
        {
          id: 1005,
          user_id: 1001,
          expense_name: 'Gym',
          categories: 'Non-Essential',
          frequency: 'Weekly',
          expense_amount: 9.99
        },
        {
          id: 1006,
          user_id: 1001,
          expense_name: 'Car Insurance',
          categories: 'Essential',
          frequency: 'Annually',
          expense_amount: 800
        }
      ])
    )
