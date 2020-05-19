import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Ingredient from './../classes/Ingredient';

const Ingredients = ({ ingredients, ratio, addIngredient, deleteIngredient }) => {
  return (<>
    <h2>Cargá los ingredientes de tu receta</h2>
    <IngredientForm addIngredient={addIngredient}></IngredientForm>
    <IngredientList ingredients={ingredients} ratio={ratio} deleteIngredient={deleteIngredient}></IngredientList>
  </>);
};

const IngredientForm = ({ addIngredient }) => {
  const [ value, setValue ] = useState('');

  const add = (e) => {
    e.preventDefault();

    const ing = new Ingredient(value);
    if(ing.value) {
      addIngredient(ing);
      setValue('');
    } else {
      alert('Ingrediente inválido.');
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