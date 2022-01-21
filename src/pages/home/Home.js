import './Home.css'
import { useFetch } from '../../hooks/usefetch';
import RecipeList from '../../components/RecipeList';

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
      <section className="recipes-list">
          {error && <p>{error}</p>}
          {isLoading && <p>{isLoading}</p>}
          {data && <RecipeList recipes={data}/>}
      </section>
    </main>
  );
}
