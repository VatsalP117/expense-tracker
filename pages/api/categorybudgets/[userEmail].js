import { db } from "@/db/db";
import { catgoryBudgets } from "@/db/schema";
import { eq } from "drizzle-orm";
import { sql } from "drizzle-orm";
export default async function handler(req) {
  if (req.method !== "GET") {
    return new Response(null, { status: 404, statusText: "Not Found" });
  }
  const urlValue = req.nextUrl.pathname;
  const userEmail = urlValue.substring(21, urlValue.length);
  try {
    const newRes = await db
      .select()
      .from(catgoryBudgets)
      .where(
        sql`${catgoryBudgets.userEmail}=${userEmail} AND ${catgoryBudgets.type}!="Income"`
      );

    return new Response(JSON.stringify(newRes), { status: 200 });
  } catch (e) {
    console.log(e);
    return new Response(null, { status: 400, statusText: "Bad Request" });
  }
}
export const runtime = "edge";
