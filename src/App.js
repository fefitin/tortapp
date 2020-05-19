import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import Header from './components/Header';
import Ingredients from './components/Ingredients';
import Pan from './components/Pan';

library.add(faTrashAlt);

function App() {
  const [ ingredients, setIngredients ] = useState([]);
  const [ ratio, setRatio ] = useState(1);

  const addIngredient = text => {
    setIngredients(ingredients.concat(text));
  }

  const deleteIngredient = index => {
    setIngredients(ingredients.filter((value, i) => index !== i));
  }

  const onRatioUpdate = ratio => {
    setRatio(ratio);
  }

  return (
    <div className="App">
      <Header />
      <Ingredients ingredients={ingredients} ratio={ratio} addIngredient={addIngredient} deleteIngredient={deleteIngredient} />
      <Pan onRatioUpdate={onRatioUpdate}></Pan>
    </div>
  );
}

export default App;
