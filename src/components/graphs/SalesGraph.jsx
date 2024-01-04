import React, { useEffect, useState } from "react";

const BarChartGraph = () => {
  const [bars, setBars] = useState([]);
  const [maxPercentage, setMaxPercentage] = useState(0);
  const scaleFactor = 0.8; 

  useEffect(() => {
    const calculateWidth = (percentage) => {
      const scaledWidth = (percentage / maxPercentage) * 100 * scaleFactor;
      return `${scaledWidth}%`;
    };

    const calculateScaleFactor = () => {
      const max = Math.max(...Sales.map((item) => item.percentage));
      setMaxPercentage(max);
    };

    calculateScaleFactor();

    const barsData = Sales.map((item, index) => (
      <div key={index} className="w-full flex items-center mb-1">
        <h1 className="w-20">{item.label}</h1>
        <div style={{ width: calculateWidth(item.percentage) }} className={`bg-blue-200 ${item.color}`}>
          <div className="h-full flex justify-center">
            <span className="text-white text-xs mx-2">{item.amount} AED</span>
          </div>
        </div>
        <span className="text-white text-xs mx-2">{item.percentage}%</span>
      </div>
    ));

    setBars(barsData);
  }, [maxPercentage]);

  return <>{bars}</>;
};

export default BarChartGraph;

const Sales = [
  { label: 'Dining', amount: 99, percentage: 30, color: 'bg-purple-800' },
  { label: 'Takeaway', amount: 86, percentage: 18, color: 'bg-purple-700' },
  { label: 'Delivery', amount: 68, percentage: 16, color: 'bg-pink-600' },
  { label: 'Talabat', amount: 55, percentage: 14, color: 'bg-yellow-300' },
  { label: 'Zomato', amount: 51, percentage: 12, color: 'bg-orange-400' },
  { label: 'Swiggy', amount: 45, percentage: 10, color: 'bg-red-500' },
];
