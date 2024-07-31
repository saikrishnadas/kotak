import React from 'react';

const CustomTick = (props:any) => {
  const { x, y, payload } = props;
  const words = payload.value.split('-');

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="middle" fill="#B0BBD5" fontSize={11}>
        <tspan x="0" dy="0em">{words[0]}</tspan>
        <tspan x="0" dy="0.6em">-</tspan>
        <tspan x="0" dy="0.8em">{words[1]}</tspan>
      </text>
    </g>
  );
};

export default CustomTick;
