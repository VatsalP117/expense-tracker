// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
import prisma from "../../utils/prismaClient";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { category, budget, userEmail } = req.body;
    const newObject = await prisma.userCategories.create({
      data: {
        category,
        budget,
        userEmail,
      },
    });
    console.log(newObject);
    res.status(200).json(req.body);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
