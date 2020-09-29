import React from 'react';
import { Circle } from 'react-konva';

/*
 * Creates a corner from the model.xml file
 */
const Corner = ({ id, x, y }) => (
  <Circle
    x={x}
    y={y}
    radius={5}
    fill="red"
  />
);

export default Corner;
