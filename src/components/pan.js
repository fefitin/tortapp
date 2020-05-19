import React, { useState, useEffect } from 'react';

const Pan = ({ onRatioUpdate }) => {

  const [ fromArea, setFromArea ] = useState(0);
  const [ toArea, setToArea ] = useState(0);

  useEffect(() => {
    if(fromArea && toArea) {
      onRatioUpdate(toArea/fromArea);
    }
  }, [onRatioUpdate, fromArea, toArea])

  return <form>
    <div className="pan-type">
      <h2>La receta es para un molde</h2>
      <PanType onAreaChange={setFromArea}></PanType>
    </div>

    <div className="pan-type">
      <h2>Voy a usar un molde</h2>
      <PanType onAreaChange={setToArea}></PanType>
    </div>
  </form>;
}

const PanType = ({ onAreaChange }) => {
  const [ type, setType ] = useState(0);
  const types = [PanTypeRound, PanTypeSquare];
  
  return (<>
    <select onChange={(e) => { setType(parseInt(e.target.value)); }}>
      <option value="0">Redondo</option>
      <option value="1">Rectangular</option>
    </select>
    <div className="pan-size">
      {React.createElement(types[type], { onAreaChange })}
    </div>
  </>);
}

const PanTypeSquare = ({ onAreaChange }) => {
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

export default Pan;