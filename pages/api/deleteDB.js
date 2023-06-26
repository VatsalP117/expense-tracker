import { db } from "@/db/db";
import { transaction } from "@/db/schema";
import { eq } from "drizzle-orm";
export default async function handler(req, res) {
  try {
    const { id } = req.body;
    const newRes = await db.delete(transaction).where(eq(transaction.id, id));
    res.status(200).json(newRes);
  } catch (e) {
    console.log(e);
    res.status(500).json([]);
  }
}
export const runtime = "edge";
