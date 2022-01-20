import './Home.css'
import { useFetch } from '../../hooks/usefetch';
import { useState } from 'react';
import RecipeList from '../../components/RecipeList';

export default function Home() {
    const { data, isLoading, error } = useFetch('http://localhost:3000/recipes');

    // const [recipes, setRecipes ] = useState(data);


  return (
      <main className="page">
      <header className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1>the recipe box</h1>
            <h4>where you can save your fave</h4>
          </div>
        </div>
      </header>
      <section className="recipes-container">
          {error && <p>{error}</p>}
          {isLoading && <p>{isLoading}</p>}
        <div className="tags-container">
          <h4>recipes</h4>
          <div className="tags-list">
            <a href="tag-template.html">Beef (1)</a>
            <a href="tag-template.html">Breakfast (2)</a>
            <a href="tag-template.html">Carrots (3)</a>
            <a href="tag-template.html">Food (4)</a>
          </div>
        </div>
        <div className="recipes-list">
            {data && <RecipeList recipes={data}/>}
        </div>
      </section>
    </main>
  );
}
