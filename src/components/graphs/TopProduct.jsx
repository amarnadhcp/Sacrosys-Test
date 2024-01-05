import React, { useEffect, useState } from "react";

function TopProduct() {
  const [bars, setBars] = useState([]);
  const [maxAED, setMaxAED] = useState(0);
  const scaleFactor = 0.6; //  value to make the bars narrower for adjustmentttt

  useEffect(() => {
    const calculateWidth = (amount) => {
      const scaledWidth = (amount / maxAED) * 100 * scaleFactor;
      return `${scaledWidth}%`;
    };

    const calculateScaleFactor = () => {
      const max = Math.max(...products.map((product) => product.amount));
      setMaxAED(max);
    };

    calculateScaleFactor();

    const barsData = products.map((product, index) => (
      <div key={index} className="w-full flex items-center mb-1 mt-2">
        <h1 className="w-20 text-sm">{product.name}</h1>
        <span style={{ width: calculateWidth(product.amount) }} className={`bg-blue-200 rounded-r-lg ${product.color}`}>
          <div style={{ width: "100%", height: "8px" }} className={`h-full ${product.innerColor} rounded-r-lg flex justify-center`}></div>
        </span>
        <span className="ml-2 text-xs flex text-center">{product.description}</span>
      </div>
    ));

    setBars(barsData);
  }, [products, maxAED]);

  return <>{bars}</>;
}

export default TopProduct;






const products = [
  { name: 'Chicken si..', amount: 55.5, description: '55.5 AED/5 pc', color: 'bg-blue-200', innerColor: 'bg-blue-500' },
  { name: 'Special b..', amount: 35, description: '35 AED/2 pc', color: 'bg-blue-200', innerColor: 'bg-orange-500' },
  { name: 'beef bico..', amount: 29.75, description: '29.75 AED/3 pc', color: 'bg-blue-200', innerColor: 'bg-orange-600' },
  { name: 'beef ka..', amount: 29.75, description: '29.75 AED/3 pc', color: 'bg-blue-200', innerColor: 'bg-red-600' },
  { name: 'Beef br..', amount: 29.75, description: '29.75 AED/3 pc', color: 'bg-blue-200', innerColor: 'bg-purple-700' },
];
