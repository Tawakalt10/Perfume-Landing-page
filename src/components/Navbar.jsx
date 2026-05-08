import { useState, useEffect } from 'react';
import { FaSearch, FaShoppingCart, FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
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
   

    //  function toggleMenu (){
    //     setIsMenuOpen(prev => !prev);
 
    //  }


    

  return (

   
    <nav className={isScrolled ? "navbar scrolled" : "navbar"}>
     <div className='nav-container'>
        
         {/* <span className='close' onClick={toggleMenu}><FaTimes/></span>  */}
      <ul className= {
         isMenuOpen ? "navbar-links-mobile" : "navbar-links"} onClick={() =>setIsMenuOpen(false)}>
        <li  className='nav-link'> <a href="#">Shop</a></li>
        <li  className='nav-link'> <a href="#">Story</a></li>
        <li  className='nav-link' > <a href="#">Journal</a></li>
      </ul>
        <h4 className ="navbar-brand"> AURELLE </h4>
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