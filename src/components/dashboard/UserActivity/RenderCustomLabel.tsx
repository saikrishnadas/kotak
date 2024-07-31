import React from 'react';

const RenderCustomLabel = (props:any) => {
  const { x, y, width, value } = props;
  const labelWidth = 29;
  const labelHeight = 26;

  return (
    <g>
      <rect
        x={x + width / 2 - labelWidth / 2}
        y={y - labelHeight - 4} // 4 is padding/margin
        width={labelWidth}
        height={labelHeight}
        fill="#2B3674"
        rx={13}
      />
      <text
        x={x + width / 2}
        y={y - labelHeight / 2 - 4}
        fill="#B0BBD5"
        fontSize={11}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value}
      </text>
    </g>
  );
};

export default RenderCustomLabel;
