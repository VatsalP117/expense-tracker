import { db } from "@/db/db";
import { catgoryBudgets } from "@/db/schema";
import { eq } from "drizzle-orm";
import { sql } from "drizzle-orm";
export default async function handler(req, res) {
  const urlValue = req.nextUrl.pathname;
  const userEmail = urlValue.substring(24, urlValue.length);
  try {
    const newRes = await db
      .select()
      .from(catgoryBudgets)
      .where(
        sql`${catgoryBudgets.userEmail}=${userEmail} AND ${catgoryBudgets.type}!="Income"`
      );

    res.status(200).json(newRes);
  } catch (e) {
    console.log(e);
    res.status(500).json([]);
  }
}
export const runtime = "edge";
