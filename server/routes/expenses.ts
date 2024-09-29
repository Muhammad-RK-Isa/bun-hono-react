import { zValidator } from '@hono/zod-validator'
import { Hono } from "hono"

import { generateRandomId } from "../lib/utils"
import { upsertExpenseSchema } from "../lib/validations"

export const expensesRoute = new Hono()
  .get('/', (c) => {
    const expenses = [
      {
        id: "1",
        title: "Rent",
        amount: 1000,
        date: "2023-01-01",
      },
      {
        id: "2",
        title: "Utilities",
        amount: 500,
        date: "2023-01-02",
      },
      {
        id: "3",
        title: "Groceries",
        amount: 200,
        date: "2023-01-03",
      },
    ]
    return c.json({
      expenses: expenses,
      total: expenses.reduce((acc, curr) => acc + curr.amount, 0),
    })
  })
  .post('/',
    zValidator(
      'json',
      upsertExpenseSchema
    ),
    (c) => {
      const input = c.req.valid("json")
      return c.json({
        inserted: true,
        expense: {
          id: generateRandomId(),
          title: input.title,
          amount: input.amount,
        }
      })
    })
  .get('/total-spent', (c) => {
    return c.json({ totalSpent: 550 + 90902 * 232328 })
  })
  .get('/:id', (c) => {
    return c.json({ expense: {} })
  })
  .put('/:id',
    zValidator('json', upsertExpenseSchema),
    (c) => {
      return c.json({ updated: true })
    })
  .delete('/:id', (c) => {
    return c.json({ deleted: true })
  })