import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import { useState, useEffect, useCallback } from "react";
import useSwr from "swr";
export default function Analytics() {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: userData, error } = useSwr(
    "/api/handletransactions/vatsal4011@gmail.com",
    fetcher,
    {
      refreshWhenHidden: true,
      revalidateOnFocus: true,
      revalidateIfStale: true,
    }
  );

  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  function renderLabels(entry) {
    return entry.name;
  }
  function renderActiveShape(props) {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`PV ${value}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="white"
        >
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  }
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  return (
    <div className="flex flex-row justify-center items-center">
      {domLoaded && (
        <PieChart width={400} height={400}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#47B39C"
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      )}
    </div>
  );
}
