import './Recipe.css'
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/usefetch';
import { FaClock, FaRegClock } from "react-icons/fa";

export default function Recipe() {
  const { id } = useParams()
  const url = 'http://localhost:3000/recipes/'+ id;
  const { error, isLoading, data: recipe} = useFetch(url)

  return (
  <div className="page">
   {error && <p>{error}</p>}
    {isLoading && <p>{isLoading}</p>}
    {recipe && (
      <>
      <section className="recipe-hero">
          <img src={recipe.photo} className="img recipe-hero-img" alt="single recipe"/>
        <article>
          <h2>{recipe.title}</h2>
          <div className="recipe-icons">
            <article>
              <FaClock/>
              <h5>prep time</h5>
              <p>{recipe.prepTime}</p>
            </article>
            <article>
              <FaRegClock/>
              <h5>cook time</h5>
              <p>{recipe.cookingTime}</p>
            </article>
          </div>
        </article>
      </section>
      <section className="recipe-content">
        <article>
          <h4>instructions</h4>
          <div className="single-instruction">
            <div></div>
            <p>{recipe.method}</p>
          </div>
        </article>
        <article className="second-column">
          <div>
            <h4>ingredients</h4>
            <ul>
              {recipe.ingredients.map(ing => <li key={ing} className='single-ingredient'>{ing}</li>)}
            </ul>
          </div>
        </article>
      </section>
      </>
    )}
    </div>
  );
}
