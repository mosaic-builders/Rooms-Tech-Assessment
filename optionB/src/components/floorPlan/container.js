import React, { useEffect, useState } from 'react';
import View from './view';
import { xml2js } from 'xml-js'
import pathToXmlResource from './model.xml'


const getModel = async () => {
  const res = await fetch(pathToXmlResource);
  const xmlContent = await res.text();
  const { model } = xml2js(xmlContent, { compact: true });
  return model;
};

const unpackAttributes = ({ _attributes }) => _attributes;
const canvas = {
  width: 600,
  height: 600,
};
const divisor = canvas.width > canvas.height ? canvas.height : canvas.width;
const scale = 20;
const offsetY = 100;
const offsetX = 180;
const normalizeCorner = (corner) => ({
  ...corner,
  x: (corner.x / divisor) * scale + offsetX,
  y: (corner.y / divisor) * scale + offsetY,
});

const enhanceWallWithCorners = (corners) => (wall) => ({
  ...wall,
  startCorner: corners.find(({ id }) => id === wall.startCorner),
  endCorner: corners.find(({ id }) => id === wall.endCorner),
});


const Container = () => {
  const [model, setModel] = useState({ corner: [], wall: [] });

  useEffect(() => {
    getModel().then((mod) => {
      setModel(mod)
    });
  }, []);

  const normalCorners = model.corner
    .map(unpackAttributes)
    .map(normalizeCorner);
  const normalWalls = model.wall
    .map(unpackAttributes)
    .map(enhanceWallWithCorners(normalCorners));

  return (
    <View
      canvas={canvas}
      corners={normalCorners}
      walls={normalWalls}
    />
  );
};

export default Container;
