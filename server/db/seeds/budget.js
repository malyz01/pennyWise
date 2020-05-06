exports.seed = (knex) =>
  knex('expense').del()
    .then(() => knex('income').del())
    .then(() => knex('goals').del())
    .then(() => knex('profile').del())
    .then(() => knex('auth').del())
    .then(() =>
      knex('auth').insert([
        { id: 1, email: '', password: '' },
        { id: 2, email: '', password: '' },
        { id: 3, email: '', password: '' },
        { id: 4, email: '', password: '' },
        { id: 5, email: '', password: '' },
        { id: 6, email: '', password: '' }
      ]))
    .then(() =>
      knex('profile').insert([
        { id: 1, user_id: 1001, full_name: 'John Doe', avatar: '' },
        { id: 2, user_id: 1002, full_name: 'Jane Doe', avatar: '' },
        { id: 3, user_id: 1003, full_name: 'Sensei Matt', avatar: '' },
        { id: 4, user_id: 1004, full_name: 'Christy', avatar: '' },
        { id: 5, user_id: 1005, full_name: 'Jimmi', avatar: '' },
        { id: 6, user_id: 1006, full_name: 'David', avatar: '' },

      ]))
    .then(() =>
      knex('goals').insert([
        { id: 1, user_id: 1001, goal_name: '', target_budget: 1000, start_date: '', target_date: '', period: 'short', budget_distribution: 100 },
        { id: 2, user_id: 1001, goal_name: '', target_budget: 1000, start_date: '', target_date: '', period: 'short', budget_distribution: 100 },
        { id: 3, user_id: 1001, goal_name: '', target_budget: 1000, start_date: '', target_date: '', period: 'short', budget_distribution: 100 },
        { id: 4, user_id: 1001, goal_name: '', target_budget: 1000, start_date: '', target_date: '', period: 'short', budget_distribution: 100 },
        { id: 5, user_id: 1001, goal_name: '', target_budget: 1000, start_date: '', target_date: '', period: 'short', budget_distribution: 100 },
        { id: 6, user_id: 1001, goal_name: '', target_budget: 1000, start_date: '', target_date: '', period: 'short', budget_distribution: 100 },

      ]))
    .then(() =>
      knex('income').insert([
        { id: 1, user_id: 1001, income_type: 'primary', income_amount: 200 },
        { id: 2, user_id: 1001, income_type: 'primary', income_amount: 200 },
        { id: 3, user_id: 1001, income_type: 'primary', income_amount: 200 },
        { id: 4, user_id: 1001, income_type: 'primary', income_amount: 200 },
        { id: 5, user_id: 1001, income_type: 'primary', income_amount: 200 },
        { id: 6, user_id: 1001, income_type: 'primary', income_amount: 200 },
      ]))
    .then(() =>
      knex('expense').insert([
        { id: 1, user_id: 1001, categories: 'essential', expense_name: 'fuel', frequency: 'weekly', expense_amount: 200},
        { id: 2, user_id: 1001, categories: 'essential', expense_name: 'fuel', frequency: 'weekly', expense_amount: 200},
        { id: 3, user_id: 1001, categories: 'essential', expense_name: 'fuel', frequency: 'weekly', expense_amount: 200},
        { id: 4, user_id: 1001, categories: 'essential', expense_name: 'fuel', frequency: 'weekly', expense_amount: 200},
        { id: 5, user_id: 1001, categories: 'essential', expense_name: 'fuel', frequency: 'weekly', expense_amount: 200},
        { id: 6, user_id: 1001, categories: 'essential', expense_name: 'fuel', frequency: 'weekly', expense_amount: 200},
      ]))