import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  varchar,
  int,
  datetime,
  tinytext,
  text,
  date,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const transaction = mysqlTable("Transaction", {
  id: varchar("id", { length: 191 })
    .primaryKey()
    .notNull()
    .default(sql`(uuid())`),
  type: varchar("type", { length: 191 }).notNull(),
  amount: int("amount").notNull(),
  userEmail: varchar("userEmail", { length: 191 }).notNull(),
  category: varchar("category", { length: 191 }).notNull(),
  remarks: varchar("remarks", { length: 191 }),
  date: datetime("date", { mode: "string", fsp: 3 })
    .default(sql`(CURRENT_TIMESTAMP(3))`)
    .notNull(),
});

export const catgoryBudgets = mysqlTable("catgoryBudgets", {
  id: varchar("id", { length: 191 }).primaryKey().notNull(),
  category: varchar("category", { length: 191 }).notNull(),
  type: varchar("type", { length: 191 }).notNull(),
  budget: int("budget").default(1000).notNull(),
  userEmail: varchar("userEmail", { length: 191 }).notNull(),
});

export const transactionDetails = mysqlTable("transaction_details", {
  id: varchar("id", { length: 255 })
    .default(sql`(uuid())`)
    .primaryKey()
    .notNull(),
  type: tinytext("type").notNull(),
  amount: int("amount").notNull(),
  userEmail: varchar("userEmail", { length: 255 }).notNull(),
  category: tinytext("category").notNull(),
  remarks: text("remarks"),
  // you can use { mode: 'date' }, if you want to have Date as type for this column
  dateTs: date("dateTs", { mode: "string" }),
});
