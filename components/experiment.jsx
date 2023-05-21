function Card({ title, amount, icon }) {
  // console.log(amount, typeof amount);
  return (
    <div className="my-bg-but-lighter text-white  card-width p-3 md:p-6 lg:p-8 rounded-lg shadow-md  md:basis-1/5 lg:min-w-max ">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
            {title}
          </h2>
          {amount >= 0 && (
            <p className=" text-green-500 text-xs  sm:text-sm md:text-base lg:text-lg font-bold">
              +{amount} $
            </p>
          )}
          {amount < 0 && (
            <p className=" text-red-500 text-xs sm:text-sm md:text-base lg:text-lg font-bold">
              {amount} $
            </p>
          )}
        </div>
        {icon}
      </div>
    </div>
  );
}

export default Card;
