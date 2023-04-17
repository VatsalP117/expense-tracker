// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
import prisma from "../../utils/prismaClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { amount, category, remarks, userEmail, type, date } = req.body;
    const newObject = await prisma.transaction.create({
      data: {
        type,
        amount,
        remarks,
        userEmail,
        category,
        date,
      },
    });
    // mutate("/api/handletransactions/vatsal4011@gmail.com");
    console.log(newObject);
    res.status(200).json(req.body);
  } else {
    res.status(400).json({ message: "Method not allowed" });
  }
}
