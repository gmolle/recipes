import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients, url }) => {

  return (
    <div className={style.recipe}>
      <a href={url} className="recipeLink" target="_blank" rel="noopener noreferrer"><h1>{title}</h1></a>
      <p>Calories: {Math.round(calories)}</p>
      <ul>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;

