import React from 'react';
import FloorPlan from './components/floorPlan';
import styles from './app.module.scss';

const App = () => (
  <div className={styles.container}>
    <FloorPlan />
  </div>
);

export default App;
