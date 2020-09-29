import React from 'react';
import { Text, Line } from 'react-konva';

const getMidpoint = ([x1, y1, x2, y2]) => {
  return [(x1 + x2) / 2, (y1 + y2) / 2];
};
/*
 * Creates a wall from the model.xml file
 */
const Wall = ({ id, label, startCorner, endCorner }) => {
  const points = [startCorner.x, startCorner.y, endCorner.x, endCorner.y];
  const [x, y] = getMidpoint(points);
  return (
    <>
    <Text
      text={label}
      x={x}
      y={y}
    />
    <Line
      points={points}
      stroke="black"
    />
    </>
  );
};

export default Wall;
