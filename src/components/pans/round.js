import React, { useState, useEffect } from 'react';

const PanTypeRound = ({ onAreaChange }) => {
  const [ diameter, setDiameter ] = useState('');

  const updateDiameter = (e) => {
    if(e.target.value && !isNaN(e.target.value)) {
      setDiameter(parseFloat(e.target.value));
    }
  }

  useEffect(() => {
    if(diameter) {
      onAreaChange(Math.PI*Math.pow(diameter/2, 2));
    }
  }, [onAreaChange, diameter])

  return (<>
    <input type="number" placeholder="Diámetro" value={diameter} onChange={updateDiameter} />
  </>)
}

export default PanTypeRound;