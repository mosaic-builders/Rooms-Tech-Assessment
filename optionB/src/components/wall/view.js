import React from 'react';
import { Line} from 'react-konva';

const Wall = ({ id, startCorner, endCorner }) => (
  <Line
    points={[startCorner.x, startCorner.y, endCorner.x, endCorner.y]}
    stroke="black"
  />
);

export default Wall;
