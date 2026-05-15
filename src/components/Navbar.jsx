import { useState, useEffect } from 'react';
import navLinks from './data/nav';
import { FaSearch, FaShoppingCart, FaTimes, FaBars } from "react-icons/fa";

const Navbar = ({brand, links}) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

   function scrolledHeight (){
      if (window.scrollY > window.innerHeight * 0.5)
      setIsScrolled (true)
     
     else
      setIsScrolled (false)
     

    }

     useEffect(() => {window.addEventListener("scroll",scrolledHeight);
      return() =>{
        window.removeEventListener("scroll", scrolledHeight);
      };   
     }, []);
   

   

    

  return (

   
    <nav className={isScrolled ? "navbar scrolled" : "navbar"}>
     <div className='nav-container'>

      <ul className= {
          isMenuOpen ? "navbar-links-mobile" : "navbar-links"} onClick={() =>setIsMenuOpen(false)}>
              {links.map((link, index) => (
                <li key={index} className='nav-link'>
                  <a href={link.path}>
                    {link.name}
                  </a>
                </li>
              ))}
      </ul>
        <h4 className ="navbar-brand"> {brand} </h4>
        <div className="navbar-icons">
          <li> <FaShoppingCart/></li>
          <li ><FaSearch/></li>
     <button className='menu-icon' onClick={() =>setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
         
        </div>
     
     </div>

     
    </nav>
  )
}

export default Navbar