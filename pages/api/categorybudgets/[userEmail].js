import { db } from "@/db/db";
import { catgoryBudgets } from "@/db/schema";
import { eq } from "drizzle-orm";
import { sql } from "drizzle-orm";
export default async function handler(req, res) {
  if (req.method == "GET") {
    const { userEmail } = req.query;
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
  } else {
    res.status(400).json({ message: "method not allowed" });
  }
}
