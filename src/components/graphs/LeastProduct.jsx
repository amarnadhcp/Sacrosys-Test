import React, { useEffect, useState } from "react";

function LeastProduct() {
  const [bars, setBars] = useState([]);
  const [maxAED, setMaxAED] = useState(0);
  const scaleFactor = 0.6;

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

export default LeastProduct;






const products = [
  { name: 'Open item', amount: 55, description: '55 AED/1 pc', color: 'bg-blue-200', innerColor: 'bg-purple-700' },
  { name: 'Delivery', amount: 60, description: '60 AED/5 pc', color: 'bg-blue-200', innerColor: 'bg-red-600' },
  { name: 'Sprite', amount: 70, description: '70 AED/11 pc', color: 'bg-blue-200', innerColor: 'bg-orange-600' },
  { name: 'Budget m..', amount: 44, description: '44 AED/15 pc', color: 'bg-blue-200', innerColor: 'bg-orange-500' },
  { name: 'Goto ser..', amount: 33, description: '33 AED/5 pc', color: 'bg-blue-200', innerColor: 'bg-blue-500' },
];
