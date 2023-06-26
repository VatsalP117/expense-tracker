import { db } from "@/db/db";
import { catgoryBudgets } from "@/db/schema";
import { eq } from "drizzle-orm";
import { sql } from "drizzle-orm";
export default async function handler(req, res) {
  const { category, budget, userEmail, type } = req.body;
  try {
    const oldRecord = await db
      .delete(catgoryBudgets)
      .where(
        sql`${catgoryBudgets.userEmail}=${userEmail} AND ${catgoryBudgets.category}=${category} AND ${catgoryBudgets.type}=${type}`
      );
    const newRecord = await db.insert(catgoryBudgets).values({
      category,
      type,
      budget,
      userEmail,
    });
    res.status(200).json(newRecord);
  } catch (e) {
    console.log(e);
    res.status(500).json([]);
  }
}
export const runtime = "edge";
