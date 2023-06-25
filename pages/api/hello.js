import { db } from "@/db/db";
import { transactionDetails, transaction } from "@/db/schema";
import { eq } from "drizzle-orm";
export default async function handler(req, res) {
  try {
    const newRes = await db.select().from(transactionDetails);
    res.status(200).json(newRes);
  } catch (e) {
    console.log(e);
    res.status(500).json([]);
  }
}
