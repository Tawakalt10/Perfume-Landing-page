import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import navLinks from './components/data/nav';
import Hero from './components/Hero';
import heroData from './components/data/hero';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import Newsletter from './components/Newsletter';
import newsletterData from './components/data/newsletter';

function App() {
  return (<div>
     <Navbar
   brand="AURELLE"
   links={navLinks}
/>
     <Hero
      brandName={heroData.brandName}
      heading={heroData.heading}
      description={heroData.description}
      image={heroData.image}
      buttonOne={heroData.buttonOne}
      buttonTwo={heroData.buttonTwo}
     />
     <ProductCard/>
     <Testimonials/>
     <Newsletter 
       heading={newsletterData.heading}
  paragraph={newsletterData.paragraph}
  buttonText={newsletterData.buttonText} />
     <Footer/>
  </div>
  );
}

export default App;
