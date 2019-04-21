import React from 'react';
import style from './recipe.module.css';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

const Recipe = ({ title, calories, image, ingredients, url }) => {

  const uuidv4 = require('uuid/v4');
  return (
    <Slide bottom>
      <div className={style.recipe}>
        <Fade>
          <a href={url} className="recipeLink" target="_blank" rel="noopener noreferrer"><h1>{title}</h1></a>
          <p>Calories: {Math.round(calories)}</p>
          <ul>
            {ingredients.map(ingredient => (
              <li key={uuidv4()}>

                {ingredient.text}</li>
            ))}
          </ul>

          <img className={style.image} src={image} alt="" />
        </Fade>
      </div>
    </Slide>
  );
};

export default Recipe;

