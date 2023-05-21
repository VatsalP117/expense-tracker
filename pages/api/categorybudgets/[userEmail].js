import prisma from "../../../utils/prismaClient";
export default async function handler(req, res) {
  try {
    const { userEmail } = req.query;
    const categoryBudgets = await prisma.catgoryBudgets.findMany({
      where: {
        userEmail: userEmail,
        type: "Expense",
      },
    });
    res.status(200).json(categoryBudgets);
  } catch (e) {
    throw new Error("oops");
    console.log(e);
  }
}
