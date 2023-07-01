import { db } from "@/db/db";
import { transactionDetails, transaction } from "@/db/schema";
import { eq } from "drizzle-orm";
import { sql } from "drizzle-orm";

export default async function handler(req) {
  const urlValue = req.nextUrl.pathname;
  const userEmail = urlValue.substring(24, urlValue.length);
  if (req.method !== "GET")
    return new Response(null, { status: 404, statusText: "Not Found" });
  try {
    const newRes = await db
      .select()
      .from(transaction)
      .where(
        sql`${transaction.userEmail}=${userEmail} order by ${transaction.date} desc`
      );
    return new Response(JSON.stringify(newRes), { status: 200 });
  } catch (e) {
    console.log(e);
    return new Response(null, { status: 400, statusText: "Bad Request" });
  }
}
export const runtime = "edge";
