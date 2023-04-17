// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
import prisma from "../../../utils/prismaClient";
export default async function handler(req, res) {
  try {
    const { userEmail } = req.query;
    const newObject = await prisma.transaction.findMany({
      where: {
        userEmail: userEmail,
      },
    });
    // console.log(newObject);

    res.status(200).json(newObject);
  } catch {
    throw new Error("bas kar bhai");
  }
}
