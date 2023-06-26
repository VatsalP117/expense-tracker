import { db } from "@/db/db";
import { catgoryBudgets } from "@/db/schema";
import { eq } from "drizzle-orm";
import { sql } from "drizzle-orm";
export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response(null, { status: 404, statusText: "Not Found" });
  }
  const { category, budget, userEmail, type } = await req.json();
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
    return new Response(JSON.stringify(newRecord), { status: 200 });
  } catch (e) {
    console.log(e);
    return new Response(null, { status: 400, statusText: "Bad Request" });
  }
}
export const runtime = "edge";
