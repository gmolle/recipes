import React from 'react';
import style from './recipe.module.css';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import { Button } from 'react-bootstrap';


const Recipe = ({ title, calories, image, ingredients, url }) => {

  const uuidv4 = require('uuid/v4');

  return (
    <Slide bottom delay={250} duration={2000}>
      <div className={style.recipe}>
        <h1>{title}</h1>
        <p key={uuidv4()}> Calories: {Math.round(calories)}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="recipeLink"><Button variant="secondary">Recipe</Button></a>
        <ul>
          {ingredients.map(ingredient => (
            <li key={uuidv4()}>
              {ingredient.text}</li>
          ))}
        </ul>
        <Fade delay={250}>
          <img className={style.image} src={image} alt="Completed Recipe" />
        </Fade>
      </div>
    </Slide>
  );
};

export default Recipe;

