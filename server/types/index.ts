import type { z } from "zod";
import type {
  expenseSchema,
  upsertExpenseSchema,
} from "../lib/validations";

export type Expense = z.infer<typeof expenseSchema>;
export type UpsertExpenseInput = z.infer<typeof upsertExpenseSchema>;
