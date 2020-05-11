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
          id: 1,
          user_id: 1001,
          full_name: 'John Doe',
          avatar:
            'https://cdn2.iconfinder.com/data/icons/web-mobile-2-1/64/user_avatar_admin_web_mobile_business_office-512.png'
        },
        {
          id: 2,
          user_id: 1002,
          full_name: 'Lucas',
          avatar:
            'https://cdn2.iconfinder.com/data/icons/web-mobile-2-1/64/user_avatar_admin_web_mobile_business_office-512.png'
        },
        {
          id: 3,
          user_id: 1003,
          full_name: 'Matt Uy',
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
          goal_name: 'Vacation',
          target_budget: 1000,
          target_date: '2020-06-01'
        },
        {
          id: 2,
          user_id: 1001,
          goal_name: 'House Repairs',
          target_budget: 1000,
          target_date: '2020-11-20'
        },
        {
          id: 3,
          user_id: 1001,
          goal_name: 'New Car',
          target_budget: 1000,
          target_date: '2021-02-01'
        },
        {
          id: 4,
          user_id: 1001,
          goal_name: 'New Celphone',
          target_budget: 1000,
          target_date: '2020-07-15'
        },
        {
          id: 5,
          user_id: 1001,
          goal_name: 'New Computer',
          target_budget: 1000,
          target_date: '2020-08-01'
        },
        {
          id: 6,
          user_id: 1001,
          goal_name: 'Christmas Money',
          target_budget: 1000,
          target_date: '2020-12-01'
        },
        {
          id: 7,
          user_id: 1006,
          goal_name: 'Rottweiler Puppy',
          target_budget: 3000,
          target_date: '2021-11-01'
        },
        {
          id: 8,
          user_id: 1006,
          goal_name: 'Wide Screen TV',
          target_budget: 1000,
          target_date: '2020-07-01'
        },
        {
          id: 9,
          user_id: 1006,
          goal_name: 'Jeep Wrangler',
          target_budget: 20000,
          target_date: '2021-12-01'
        },
        {
          id: 10,
          user_id: 1002,
          goal_name: 'Family Reunion',
          target_budget: 2000,
          target_date: '2020-09-01'
        },
        {
          id: 11,
          user_id: 1002,
          goal_name: 'Surf Board',
          target_budget: 1000,
          target_date: '2020-12-01'
        },
        {
          id: 12,
          user_id: 1003,
          goal_name: 'Playstation 5',
          target_budget: 800,
          target_date: '2020-12-01'
        },
        {
          id: 13,
          user_id: 1003,
          goal_name: 'Scooter',
          target_budget: 500,
          target_date: '2020-06-10'
        },
        {
          id: 14,
          user_id: 1004,
          goal_name: 'Jacuzzi',
          target_budget: 5000,
          target_date: '2021-03-03'
        },
        {
          id: 15,
          user_id: 1004,
          goal_name: 'Garden Patio Set',
          target_budget: 1500,
          target_date: '2020-09-01'
        },
        {
          id: 16,
          user_id: 1005,
          goal_name: 'Car Tools',
          target_budget: 1000,
          target_date: '2020-08-20'
        },
        {
          id: 17,
          user_id: 1005,
          goal_name: 'Multifuction Printer',
          target_budget: 1000,
          target_date: '2020-12-11'
        }

      ])
    )
    .then(() =>
      knex('income').insert([
        {
          id: 1,
          user_id: 1001,
          income_name: 'Mechanic',
          frequency: 'Weekly',
          income_type: 'primary',
          income_amount: 1200
        },
        {
          id: 2,
          user_id: 1002,
          income_name: 'Freelance Web Devloper',
          frequency: 'Weekly',
          income_type: 'primary',
          income_amount: 1000
        },
        {
          id: 3,
          user_id: 1003,
          income_name: 'Technical Support',
          frequency: 'Weekly',
          income_type: 'primary',
          income_amount: 1200
        },
        {
          id: 4,
          user_id: 1004,
          income_name: 'Systems Engineer',
          frequency: 'Weekly',
          income_type: 'primary',
          income_amount: 2000
        },
        {
          id: 5,
          user_id: 1005,
          income_name: 'Network Analyst',
          frequency: 'Weekly',
          income_type: 'primary',
          income_amount: 1500
        },
        {
          id: 7,
          user_id: 1006,
          income_name: 'Javascript Full-Stack Developer',
          frequency: 'Weekly',
          income_type: 'primary',
          income_amount: 2000
        }
      ])
    )
    .then(() =>
      knex('expense').insert([
        {
          id: 1,
          user_id: 1001,
          expense_name: 'fuel',
          categories: 'Essential',
          frequency: 'Weekly',
          expense_amount: 50
        },
        {
          id: 2,
          user_id: 1001,
          expense_name: 'Grocery',
          categories: 'Essential',
          frequency: 'Weekly',
          expense_amount: 200
        },
        {
          id: 3,
          user_id: 1001,
          expense_name: 'Electric Bill',
          categories: 'Essential',
          frequency: 'Monthly',
          expense_amount: 220
        },
        {
          id: 4,
          user_id: 1001,
          expense_name: 'Pizza',
          categories: 'Non-Essential',
          frequency: 'Weekly',
          expense_amount: 40
        },
        {
          id: 5,
          user_id: 1001,
          expense_name: 'Gym',
          categories: 'Non-Essential',
          frequency: 'Weekly',
          expense_amount: 9.99
        },
        {
          id: 6,
          user_id: 1001,
          expense_name: 'Car Insurance',
          categories: 'Essential',
          frequency: 'Annually',
          expense_amount: 800
        }
      ])
    )
