import React from 'react';
import { Stage, Layer } from 'react-konva';
import Corner from '../corner';
import Wall from '../wall';
import styles from './floorPlan.module.scss';


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
