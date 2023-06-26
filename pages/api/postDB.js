// import prisma from "../../utils/prismaClient";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { amount, category, remarks, userEmail, type, date } = req.body;
//     const newObject = await prisma.transaction.create({
//       data: {
//         type,
//         amount,
//         remarks,
//         userEmail,
//         category,
//         date,
//       },
//     });
//     // mutate("/api/handletransactions/vatsal4011@gmail.com");
//     console.log(newObject);
//     res.status(200).json(req.body);
//   } else {
//     res.status(400).json({ message: "Method not allowed" });
//   }
// }
import { db } from "@/db/db";
import { transactionDetails, transaction } from "@/db/schema";
import { eq } from "drizzle-orm";
import { sql } from "drizzle-orm";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { amount, category, remarks, userEmail, type, date } = req.body;
    let defaultDate;
    if (!date) {
      defaultDate = new Date();
    }
    const newObject = await db.insert(transaction).values({
      type,
      amount,
      remarks,
      userEmail,
      category,
      date: defaultDate,
    });

    res.status(200).json(req.body);
  } else {
    res.status(400).json({ message: "Method not allowed" });
  }
}
