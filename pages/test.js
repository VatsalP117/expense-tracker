import TestimonialCard from "../components/testimonial";
import { GetServerSideProps } from "next";
import { PrismaClient } from "@prisma/client";
export default function Test(props) {
  console.log(props.data);
  const transData = props.data; //contains all the user data

  return <TestimonialCard />;
}
const prisma = new PrismaClient();
export async function getServerSideProps() {
  const transactions = await prisma.transaction.findMany({
    where: {
      userEmail: "vatsal4011@gmail.com", //hard-coded, to be changed
    },
  });
  return {
    props: {
      data: transactions,
    },
  };
}
