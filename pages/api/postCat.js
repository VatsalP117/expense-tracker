// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
import prisma from "../../utils/prismaClient";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { category, budget, userEmail, type } = req.body;
    const deletedObject = await prisma.catgoryBudgets.deleteMany({
      where: {
        userEmail: userEmail,
        category: category,
        type: type,
      },
    });
    const newObject = await prisma.catgoryBudgets.create({
      data: {
        type,
        category,
        budget,
        userEmail,
      },
    });

    console.log(newObject);
    res.status(200).json(req.body);
  } else {
    res.status(400).json({ message: "Method not allowed" });
  }
}
