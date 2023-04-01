export default function Card(props) {
  return (
    <div
      key={props.cardId}
      className=" testiominal-cardflex flex-col items-start justify-start max-w-md shadow-[1px_1px_5px_1px_#3182ce]  p-3 md:p-5 width-class"
    >
      <p className="text-gray-300 font-normal md:text-lg text-base">
        {props.content}
      </p>
      <div className="user-details mt-3 md:text-lg text-white text-base">
        <h2>{props.userName}</h2>
        <h3>{props.userProfile}</h3>
      </div>
    </div>
  );
}
// border-t-2 border-t-slate-900
