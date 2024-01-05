import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
} from "recharts";

const uData = [1000, 1500, 2000, 2100, 1800, 1300, 1100, 1400, 1700, 1000 ];

export default function LineChartGraph() {
  const data = uData.map((uv, index) => ({ index, AED: uv }));

  const tooltipFormatter = (value, name) => [`${value} AED`];

  return (
    <LineChart width={600} height={325} data={data}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#05FF00" stopOpacity={1} />
          <stop offset="100%" stopColor="#DC8D00" stopOpacity={1} />
        </linearGradient>
      </defs>
      <XAxis
        dataKey="index"
        tick={{ fill: "white" }}
        tickFormatter={(value) => (value === 9 ? "Day" : value + 1)}
        domain={[0, 9]}
        axisLine={false}
        tickLine={false}
      />
      <YAxis
        tick={{ fill: "white" }}
        domain={[0, 3000]}
        ticks={[0, 1000, 2000, 3000]}
        axisLine={false}
        tickLine={false}
      />
      <Tooltip
        labelStyle={{ color: "black" }}
        itemStyle={{ color: "black" }}
        formatter={tooltipFormatter}
      />
      <Legend />
      <Line
        type="monotone"
        dataKey="AED"
        stroke="url(#colorUv)"
        dot={false}
        strokeWidth={4}
      />

      {/* Sales Comparison Label */}
      <Label
        value="Sales-wise Comparison"
        position="top"
        offset={20}
        fill="white"
        style={{ fontSize: "16px", fontWeight: "bold" }}
      />
    </LineChart>
  );
}
