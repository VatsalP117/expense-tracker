import prisma from "../../utils/prismaClient";
export default async function handler(req, res) {
  if (req.method === "GET") {
    const { userEmail } = req.body;
    const newObject = await prisma.transaction.findMany({
      where: {
        userEmail: userEmail,
      },
    });

    res.status(200).json(req.body);
  } else {
    res.status(400).json({ message: "Method not allowed" });
  }
}
