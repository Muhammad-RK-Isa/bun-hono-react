import { integer, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { generateRandomId } from "../../lib/utils";

export const expenses = pgTable("expense", {
  id: varchar("id")
    .primaryKey()
    .$defaultFn(() => generateRandomId()),
  title: text("title"),
  amount: integer("amount").notNull(),
  date: timestamp("date").notNull(),
})