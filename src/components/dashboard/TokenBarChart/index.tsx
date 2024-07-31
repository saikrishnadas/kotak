import React from 'react';

interface CustomBarProps {
  fill: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

const CustomBar: React.FC<CustomBarProps> = ({ fill, x, y, width, height }) => {
  const radiusTop = 9;
  const radiusRight = 9;
  const radiusBottom = 0;
  const radiusLeft = 0;

  const path = `
    M${x},${y + height}
    L${x},${y + radiusTop}
    Q${x},${y} ${x + radiusTop},${y}
    L${x + width - radiusRight},${y}
    Q${x + width},${y} ${x + width},${y + radiusRight}
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
