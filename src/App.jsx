import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import Newsletter from './components/Newsletter';


function App() {
  return (<div>
     <Navbar/>
     <Hero/>
     <ProductCard/>
     <Testimonials/>
     <Newsletter />
     <Footer/>
  </div>
  );
}

export default App;
