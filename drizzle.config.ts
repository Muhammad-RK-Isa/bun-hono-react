import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./server/db/schema/index.ts",
  out: "./server/drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  }
});