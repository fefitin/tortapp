import React, { useState, useEffect } from 'react';

const PanTypeSquare = ({ onAreaChange }) => {
  const [ width, setWidth ] = useState('');

  const updateWidth = (e) => {
    if(e.target.value && !isNaN(e.target.value)) {
      setWidth(parseFloat(e.target.value));
    } else {
      setWidth('');
    }
  }

  useEffect(() => {
    if(width) {
      onAreaChange(width*width);
    }
  }, [onAreaChange, width]);

  return (<>
    <input type="number" placeholder="Ancho" value={width} onChange={updateWidth} />
  </>)
}

export default PanTypeSquare;