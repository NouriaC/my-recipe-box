import './Navbar.css'
import Logo from '../assets/logo.svg';
import { FaBars } from "react-icons/fa";
import { useState, useRef, useEffect } from 'react';


export default function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      if(showLinks) {
        linksContainerRef.current.style.height = `${linksHeight}px`
      } else {
        linksContainerRef.current.style.height = '0px';
      }
    }, [showLinks])

    return (
   <nav>
     <div className="nav-center">
       <div className="nav-header">
         <img src={Logo} className='logo' alt="my recipe box logo"/>
         <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
           <FaBars />
         </button>
       </div>
       <div className='links-container show-container' ref={linksContainerRef}>
           <ul className="links" ref={linksRef}>
               <li>
                  <a href="/">home</a>  
               </li>
               <li>
                  <a href="/about">about</a>  
               </li>
               <li>
                  <a href="/tags">tags</a>  
               </li>
               <li>
                  <a href="/recipes">recipes</a>  
               </li>
               <li>
                  <a href="/create" className='create-btn'>create</a>  
               </li>
           </ul>
            {/* <button type='button' className='btn create-btn'>create recipe</button> */}
       </div>
     </div>
   </nav>
    )
}
