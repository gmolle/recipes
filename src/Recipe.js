import React from 'react';
import style from './recipe.module.css';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

const Recipe = ({ title, calories, image, ingredients, url }) => {


  return (
    <Slide bottom>
      <div className={style.recipe}>
        <Fade>
          <a href={url} className="recipeLink" target="_blank" rel="noopener noreferrer"><h1>{title}</h1></a>
          <p>Calories: {Math.round(calories)}</p>
          <ul>
            {ingredients.map(ingredient => (
              <li>{ingredient.text}</li>
            ))}
          </ul>

          <img className={style.image} src={image} alt="" />
        </Fade>
      </div>
    </Slide>
  );
};

export default Recipe;

