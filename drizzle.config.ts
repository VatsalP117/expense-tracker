import type { Config } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
  driver: "mysql2",
} satisfies Config;
