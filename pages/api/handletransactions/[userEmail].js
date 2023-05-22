import prisma from "../../../utils/prismaClient";
export default async function handler(req, res) {
  try {
    const { userEmail } = req.query;
    // console.log(userEmail);
    const newObject = await prisma.transaction.findMany({
      where: {
        userEmail: userEmail,
      },
      orderBy: {
        date: "desc",
      },
    });
    res.status(200).json(newObject);
  } catch (e) {
    res.status(200).json([]);
  }
}
