import './Create.css'
import { useState, useRef, useEffect } from 'react'
import { useFetch } from '../../hooks/usefetch';
import { useNavigate } from 'react-router-dom';


export default function Create() {
    const [title, setTitle] = useState('');
    const [method, setMethod] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [newIngredient, setNewIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [photo, setPhoto] = useState('');

    const navigate = useNavigate();


    const { postData, data, error } = useFetch('http://localhost:3000/recipes', "POST")

    const ingredientInput = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        postData({ title, method, photo, prepTime: prepTime + ' minutes', cookingTime: cookingTime + ' minutes', ingredients })
    }

    useEffect(() => {
      if(data) {
        navigate("/")
      }
    }, [data, navigate])

   

    const handleAdd = (e) => {
        e.preventDefault();
        const ing = newIngredient.trim();
        if(ing && !ingredients.includes(ing)) {
            setIngredients(prevIngredients => [...prevIngredients, ing])
        }
        setNewIngredient('')
        ingredientInput.current.focus()
    }

    return (
    <section className="contact-container">
      <article className="contact-info">
        <h3>Add a new recipe</h3>
      </article>
      <article>
        <form className="form contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="title" className="form-label">recipe title: </label>
            <input 
             required
             type="text" 
             name="title" 
             id="title" 
             className="form-input"
             value={title}
             onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div className="form-row">
            <label htmlFor="ingredients" className="form-label">Recipe ingredients: </label>
            <div className='form-ingredients'>
            <input 
             type="text" 
             name="ingredients" 
             id="ingredients" 
             className="form-input"
             value={newIngredient}
             ref={ingredientInput}
             onChange={(e) => setNewIngredient(e.target.value)}/>
             <button className='btn' onClick={handleAdd}>add</button>
             </div>
             <p>Current ingredients: </p>
             {ingredients.map(ing => <em key={ing}>{ing}, </em>)}
          </div>
          <div className="form-row">
            <label htmlFor="cooktime" className="form-label">Cooking Time: </label>
            <input 
             required
             type="number" 
             name="cooktime" 
             id="cooktime" 
             className="form-input"
             value={cookingTime}
             onChange={(e) => setCookingTime(e.target.value)}/>
          </div>
          <div className="form-row">
            <label htmlFor="preptime" className="form-label">Prep Time: </label>
            <input 
             required
             type="number" 
             name="preptime" 
             id="preptime" 
             className="form-input"
             value={prepTime}
             onChange={(e) => setPrepTime(e.target.value)}/>
          </div>
          <div className="form-row">
            <label htmlFor="image" className="form-label">Photo link: </label>
            <input 
             type="text" 
             name="image" 
             id="image" 
             className="form-input"
             value={photo}
             onChange={(e) => setPhoto(e.target.value)}/>
          </div>
          <div className="form-row">
            <label htmlFor="method" className="form-label">Method: </label>
            <textarea
             required 
             name="method" 
             id="method"
             value={method}
             onChange={(e) => setMethod(e.target.value)}
             className="form-textarea"></textarea>
          </div>
          <button type="submit" className="btn btn-block">submit</button>
        </form>
      </article>
    </section>
    )
}
