import React, { useState, useEffect } from 'react';

const PanTypeRectangular = ({ onAreaChange }) => {
  const [ width, setWidth ] = useState('');
  const [ height, setHeight ] = useState('');

  const updateWidth = (e) => {
    if(e.target.value && !isNaN(e.target.value)) {
      setWidth(parseFloat(e.target.value));
    }
  }

  const updateHeight = (e) => {
    if(e.target.value && !isNaN(e.target.value)) {
      setHeight(parseFloat(e.target.value));
    }
  }

  useEffect(() => {
    if(width && height) {
      onAreaChange(width*height);
    }
  }, [onAreaChange, width, height]);

  return (<>
    <input type="number" placeholder="Ancho" value={width} onChange={updateWidth} />
    <input type="number" placeholder="Largo" value={height} onChange={updateHeight} />
  </>)
}

export default PanTypeRectangular;