import './Home.css'
import { useFetch } from '../../hooks/usefetch';

export default function Home() {
    const { data, isLoading, error } = useFetch('http://localhost:3000/recipes');


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
            {data && data.map(recipe => {
                const { id, title, photo, cookingTime, prepTime } = recipe;
                return <a key={id} href="single-recipe.html" className="recipe">
            <img src={photo} alt="food" className="recipe-img"/>
            <h5>{title}</h5>
            <p>Prep: {prepTime} | Cook: {cookingTime}</p>
          </a>
            })}
        </div>
      </section>
    </main>
  );
}
