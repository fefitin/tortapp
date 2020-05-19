import React, { useState, useEffect } from 'react';

import PanTypeRectangular from './pans/rectangular';
import PanTypeRound from './pans/round';
import PanTypeSquare from './pans/square';

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
  const types = [PanTypeRound, PanTypeRectangular, PanTypeSquare];
  
  return (<>
    <select onChange={(e) => { setType(parseInt(e.target.value)); }}>
      <option value="0">Redondo</option>
      <option value="1">Rectangular</option>
      <option value="2">Cuadrado</option>
    </select>
    <div className="pan-size">
      {React.createElement(types[type], { onAreaChange })}
    </div>
  </>);
}

export default Pan;