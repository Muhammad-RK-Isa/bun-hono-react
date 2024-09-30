import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { generateRandomId } from "../../lib/utils";

export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => generateRandomId()),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
})