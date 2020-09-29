import React from 'react';
import { Circle } from 'react-konva';

const Corner = ({ id, x, y }) => (
  <Circle
    x={x}
    y={y}
    radius={5}
    fill="red"
  />
);

export default Corner;
