import React, { useState, useEffect, useCallback } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import Header from './components/Header';
import Ingredients from './components/Ingredients';
import Pan from './components/Pan';
import Ingredient from './classes/Ingredient';

library.add(faTrashAlt);

function App() {
  const [ ingredients, setIngredients ] = useState([]);
  const [ ratio, setRatio ] = useState(1);

  const addIngredient = useCallback(ingredient => {
    setIngredients(ingredients => ingredients.concat(ingredient));
  }, []);

  const deleteIngredient = index => {
    setIngredients(ingredients.filter((value, i) => index !== i));
  }

  const onRatioUpdate = ratio => {
    setRatio(ratio);
  }

  useEffect(() => {
    //Load recipe from localStorage
    if(localStorage.ingredients) {
      try {
        JSON.parse(localStorage.ingredients).forEach(text => {
          addIngredient(new Ingredient(text));
        })
      } catch(error) {
        delete localStorage.ingredients;
      }
    }
  }, [addIngredient])

  useEffect(() => {
    //Save recipe to localStorage
    localStorage.ingredients = JSON.stringify(ingredients.map(i => i.text));
  }, [ingredients])

  return (
    <div className="App">
      <Header />
      <Ingredients ingredients={ingredients} ratio={ratio} addIngredient={addIngredient} deleteIngredient={deleteIngredient} />
      <Pan onRatioUpdate={onRatioUpdate}></Pan>
    </div>
  );
}

export default App;
