import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';
import pizza from './pizza.svg';


const App = () => {
  const APP_ID = 'b33d8a0c';
  const APP_KEY = '279d4e795a190cbb170af15d302a36ee';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&from=0&to=24&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);

  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  const loader = () => {
    const loader = document.querySelector('.loader');
    const main = document.querySelector('.recipes');
    const form = document.querySelector('.search-form');
    const title = document.querySelector('.headName');

    main.style.display = 'none';
    loader.style.display = 'block';
    form.style.display = 'none';
    title.style.display = 'none';

    setTimeout(() => {
      loader.style.display = 'none';
      main.style.display = 'flex';
      form.style.display = 'flex';
      title.style.display = 'block';

      form.style.animation = 'none';
      title.style.animation = 'none';
    }, 3500);
  }




  return (

    <div className="App">
      <h1 className="headName">Recipe Finder</h1>
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch} placeholder="Search For Food..." />
        <div className="buttonDiv">
          <button type="submit" className="search-button" onClick={loader}>Search</button>
          <img src={pizza} alt="pizza" className="pizza" />
        </div>
      </form>
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.url}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
