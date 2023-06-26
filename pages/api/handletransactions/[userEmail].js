import { db } from "@/db/db";
import { transactionDetails, transaction } from "@/db/schema";
import { eq } from "drizzle-orm";
import { sql } from "drizzle-orm";
export default async function handler(req, res) {
  if (req.method == "GET") {
    const { userEmail } = req.query;
    try {
      const newRes = await db
        .select()
        .from(transaction)
        .where(
          sql`${transaction.userEmail}=${userEmail} order by ${transaction.date} desc`
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
