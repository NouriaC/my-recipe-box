import './RecipeList.css';
import { Link } from 'react-router-dom';

export default function RecipeList({recipes }) {
  return (
      recipes.map(recipe => {
        const { id, title, photo, cookingTime, prepTime } = recipe;
        return <Link to={`/recipes/${id}`} key={id} className="recipe">
        <img src={photo} alt="food" className="recipe-img"/>
        <h5>{title}</h5>
        <p>Prep: {prepTime} | Cook: {cookingTime}</p>
          </Link>
      }))
}
