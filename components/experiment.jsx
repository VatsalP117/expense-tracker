// import React from "react";

// const Card = ({ title, value }) => {
//   return (
//     <div className="bg-gray-900 shadow-lg rounded-md p-6">
//       <h3 className="text-white text-lg font-semibold">{title}</h3>
//       <p className="text-gray-400 mt-2 text-sm">{value}</p>
//     </div>
//   );
// };

// export default Card;
function Card({ title, amount, icon }) {
  return (
    <div className="my-bg-but-lighter text-white  p-3 md:p-6 lg:p-8 rounded-lg shadow-md  md:basis-1/5">
      <div className="flex justify-between items-center">
        <div>
          <h2 className=" text-sm md:text-base lg:text-lg font-semibold">
            {title}
          </h2>
          <p className=" text-base md:text-lg lg:text-2xl font-bold">
            {amount}
          </p>
        </div>
        {icon}
      </div>
    </div>
  );
}

export default Card;
