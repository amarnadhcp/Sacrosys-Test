import React from 'react'
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const StyledText = styled("text")(({ theme }) => ({
    fill: 'white',
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 10,
  }));
  
  function PieCenterLabelCASH({ children }) {
    const { width, height, left, top } = useDrawingArea();
    const labelX = left + width + 30;
    const labelY = top + height / 3;
    return (
      <StyledText x={labelX} y={labelY}>
        {children}
      </StyledText>
    );
  }
  function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    const labelX = left + width + 30;
    const labelY = top + height / 2;
    return (
      <StyledText x={labelX} y={labelY}>
        {children}
      </StyledText>
    );
  }
function PieCharGraph() {
  return (
    <div><PieChart
    height={125} 
    series={[
      {
        data: [
          { value: 25, color: "yellow" },
          { value: 40, color: "cyan" },
          { value: 15, color: "violet" },
          { value: 30, color: "orange" },
        ],
        innerRadius: 30,
        outerRadius: 50,
        paddingAngle: 2,
        cornerRadius: 5,
        startAngle: -180,
        endAngle: 180,
        cx: 330,
        cy: 50,
      },
    ]}
  >
    <PieCenterLabelCASH>Cash</PieCenterLabelCASH>
    <PieCenterLabel>900 AED</PieCenterLabel>
  </PieChart></div>
  )
}

export default PieCharGraph