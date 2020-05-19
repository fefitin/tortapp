import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Ingredient from '../classes/Ingredient';

const Ingredients = ({ ingredients, ratio, addIngredient, deleteIngredient, setError }) => {
  return (<>
    <h2>Cargá los ingredientes de tu receta</h2>
    <IngredientForm addIngredient={addIngredient} setError={setError}></IngredientForm>
    <IngredientList ingredients={ingredients} ratio={ratio} deleteIngredient={deleteIngredient}></IngredientList>
  </>);
};

const IngredientForm = ({ addIngredient, setError }) => {
  const [ value, setValue ] = useState('');

  const add = (e) => {
    e.preventDefault();

    const ing = new Ingredient(value);
    
    //Check if value was detected before saving
    if(ing.value) {
      addIngredient(ing);
      setValue('');
    } else {
      setError(<p>El ingrediente tiene que estar formado por un número y una descripción. <small>- 1 1/2 taza de harina.<br/>- 50g de miel.<br/>- 2 huevos.</small></p>);
    }
  }

  return <form className="ingredient-form" onSubmit={add}>
    <input type="text" placeholder="ej: 1 taza de azúcar" onChange={e => setValue(e.target.value)} value={value} />
    <button type="submit"><span>+</span></button>
  </form>
}

const IngredientList = ({ ingredients, ratio, deleteIngredient }) => {
  return <ul className="ingredient-list">
    {ingredients.map((ingredient, index) =>
      <li key={index}>
        {ratio ? ingredient.textToRatio(ratio) : ingredient.text}
        <FontAwesomeIcon icon="trash-alt" onClick={() => { deleteIngredient(index) }} />
      </li>
    )}
  </ul>;
}

export default Ingredients;
