import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App =()=> {
  const APP_ID ="9d6bde3d",
        APP_KEY = "c45c12816de1fd50c27e3e00347d3edb";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');
  useEffect(() =>{
    getRecipes();

   
  },[query]);
  const getRecipes = async()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  
  };
  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);

    setSearch("");
  }
  return(
     <div className="App">
       <div className ="profile">
          <h2 class="cssload-loader">Enjoy Searching</h2>
          
       <form onSubmit={getSearch} className="search-form">
         <input className="search-bar" type="text"  placeholder ="Write here to search "value ={search} onChange={updateSearch} />
         <button 
         className = "search-button"
         type="submit"> 
            Search
         </button>
       </form>
       </div>
       <div className ="recipe">
        {recipes.map(recipe => (
            <Recipe
            key ={recipe.recipe.label}
            title ={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image ={recipe.recipe.image}
            ingredients ={recipe.recipe.ingredients}
            />
        ))}
        </div>
        <div class="footer">
           <p> © If someone did own the copyright to this layout
            they’d be rich ! This design by Hadeel Salah </p>
            
            <p>Palestine | Gaza | Toines 21 Street</p>
            <ul>
                <li> <img  alt="" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_circle_black-48.png"/></li>
                <li> <img  alt="" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_black-64.png"/></li>
               <li> <img alt="" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-48.png"/></li>
               
           </ul>
                
        </div>
     </div>
  );
};
export default App;