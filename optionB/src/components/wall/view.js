import React from 'react';
import { Line} from 'react-konva';

/*
 * Creates a wall from the model.xml file
 */
const Wall = ({ id, startCorner, endCorner }) => (
  <Line
    points={[startCorner.x, startCorner.y, endCorner.x, endCorner.y]}
    stroke="black"
  />
);

export default Wall;
