import Card from "../components/experiment";
export default function What() {
  return (
    <div className="bg-[#17181c] min-h-screen flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 gap-8 max-w-screen-md">
        <Card title="Total Expenses" amount="$3,200" />
        <Card title="Total Investments" amount="$6,500" />
        <Card title="Total Income" amount="$10,000" />
        <Card title="Total EMI" amount="$1,200" />
      </div>
    </div>
  );
}
