import prisma from "../../utils/prismaClient";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { id } = req.body;
    const deletedObject = await prisma.transaction.delete({
      where: {
        id: id,
      },
    });

    res.status(200).json(req.body);
  } else {
    res.status(400).json({ message: "Method not allowed" });
  }
}
