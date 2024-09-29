import { z } from "zod"

export const expenseSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  amount: z.coerce.number({message: "Amount is required"}).int().positive(),
  date: z.date({
    required_error: "Date is required",
  }),
})

export const expenseIdSchema = expenseSchema.pick({ id: true })
export const upsertExpenseSchema = expenseSchema.omit({ id: true })