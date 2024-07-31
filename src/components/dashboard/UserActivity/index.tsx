import React from 'react';

const CustomBar = (props:any) => {
  const { fill, x, y, width, height } = props;
  const radius = 9;

  const path = `
    M${x},${y + height}
    L${x},${y + radius}
    Q${x},${y} ${x + radius},${y}
    L${x + width - radius},${y}
    Q${x + width},${y} ${x + width},${y + radius}
    L${x + width},${y + height}
    Z
  `;
  return (
    <g>
      <path d={path} fill={fill} />
    </g>
  );
};

export default CustomBar;
