import { db } from "@/db/db";
import { transactionDetails, transaction } from "@/db/schema";
import { eq } from "drizzle-orm";
import { sql } from "drizzle-orm";

export default async function handler(req, res) {
  const urlValue = req.nextUrl.pathname;
  const userEmail = urlValue.substring(24, urlValue.length);

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
}
export const runtime = "edge";
