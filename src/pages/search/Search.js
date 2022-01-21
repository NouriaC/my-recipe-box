import './Search.css'
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/usefetch';
import RecipeList from '../../components/RecipeList';

export default function Search() {

  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');


  const url =  'http://localhost:3000/recipes?q=' + query;

  const {error, isLoading, data } = useFetch(url);
  return (
    <div className='page'>
      <h2>Recipes including "{query}"</h2>
      {error && <p>{error}</p>}
      {isLoading && <p className='loading'>{isLoading}</p>}
      {data && <RecipeList recipes={data}/>}
    </div>
  );
}
