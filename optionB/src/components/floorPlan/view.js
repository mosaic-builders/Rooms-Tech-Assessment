import React from 'react';
import { Stage, Layer } from 'react-konva';
import Corner from '../corner';
import Wall from '../wall';
import styles from './floorPlan.module.scss';

/*
 * Renders all of the elements of the floor plan into a JS canvas
 */
const FloorPlan = ({ canvas, corners, walls }) => (
  <Stage width={canvas.width} height={canvas.height} className={styles.stage}>
    <Layer>
      {corners.map((corner) => (
        <Corner key={corner.id} {...corner} />
      ))}
      {walls.map((wall) => (
        <Wall key={wall.id} {...wall} />
      ))}
    </Layer>
  </Stage>
);

export default FloorPlan;
