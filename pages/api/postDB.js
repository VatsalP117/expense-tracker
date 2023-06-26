import { db } from "@/db/db";
import { transactionDetails, transaction } from "@/db/schema";
import { eq } from "drizzle-orm";
import { sql } from "drizzle-orm";
export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response(null, { status: 404, statusText: "Not Found" });
  }
  try {
    const { amount, category, remarks, userEmail, type, date } =
      await req.json();
    let newObject;
    if (date) {
      newObject = await db.insert(transaction).values({
        type,
        amount,
        remarks,
        userEmail,
        category,
        date,
      });
    } else {
      newObject = await db.insert(transaction).values({
        type,
        amount,
        remarks,
        userEmail,
        category,
      });
    }

    return new Response(JSON.stringify(newObject), { status: 200 });
  } catch (e) {
    console.log(e);
    return new Response(null, { status: 400, statusText: "Bad Request" });
  }
}
export const runtime = "edge";
