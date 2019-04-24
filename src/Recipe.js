import React from 'react';
import style from './recipe.module.css';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


const Recipe = ({ title, calories, image, ingredients, url }) => {

  const uuidv4 = require('uuid/v4');

  return (
    <Slide bottom delay={250} duration={2000}>
      <div className={style.recipe}>
        <Fade delay={250}>
          <a href={url} className="recipeLink" target="_blank" rel="noopener noreferrer"><h1>{title}</h1></a>
          <Slide key={uuidv4()}
            bottom delay={500}>
            <p>Calories: {Math.round(calories)}</p>
          </Slide>
          <ul>
            {ingredients.map(ingredient => (
              <Slide key={uuidv4()}
                bottom delay={500}>
                <li >
                  {ingredient.text}</li>
              </Slide>
            ))}
          </ul>
          <img className={style.image} src={image} alt="Completed Recipe" />
        </Fade>
      </div>
    </Slide>
  );
};

export default Recipe;

