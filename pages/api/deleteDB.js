import { db } from "@/db/db";
import { transaction } from "@/db/schema";
import { eq } from "drizzle-orm";
export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response(null, { status: 404, statusText: "Not Found" });
  }
  try {
    const { id } = await req.json();
    const newRes = await db.delete(transaction).where(eq(transaction.id, id));
    return new Response(JSON.stringify(newRes), { status: 200 });
  } catch (e) {
    console.log(e);
    return new Response(null, { status: 400, statusText: "Bad Request" });
  }
}
export const runtime = "edge";
