import React from "react";
import { clerkClient, getAuth, buildClerkProps } from "@clerk/nextjs/server";

function ComingSoon(props) {
  console.log(props.user);
  // console.log(props.clerk);
  return (
    <div>
      <h1 className=" h-min mt-32 md:my-auto text-6xl md:text-8xl font-bold mx-auto bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-violet-600 to-indigo-900 ">
        Coming Soon
      </h1>
    </div>
  );
}

// export const getServerSideProps = async ({ req, resolvedUrl }) => {
//   const { userId } = getAuth(req);

//   const user = userId ? await clerkClient.users.getUser(userId) : undefined;

//   // ...

//   if (!user) {
//   return {
//     redirect: {
//       destination: "/sign-in?redirect_url=" + resolvedUrl,

//       permanent: false,
//     },
//   };
// }
//   return {
//     props: { clerk: { ...buildClerkProps(req, { user }) }, data: "hey" },
//   };
// };

export const getServerSideProps = async ({ req, resolvedUrl }) => {
  const { userId } = getAuth(req);

  const user = userId ? await clerkClient.users.getUser(userId) : undefined;
  console.log(user);
  // ...
  if (!user) {
    return {
      redirect: {
        destination: "/sign-in?redirect_url=" + resolvedUrl,

        permanent: false,
      },
    };
  }

  return { props: { user: JSON.parse(JSON.stringify(user)), data: "hey" } };
};
export default ComingSoon;
