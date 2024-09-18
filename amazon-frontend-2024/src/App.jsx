import React from 'react'
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Carousel  from "./Components/Carousel/CarouselEffect";
import Category from './Components/Category/Category';
import Product from './Components/Product/Product';

const App = () => {
  return (
    <div>
    <Router>
    <Header/>
    </Router>
    <Carousel/>
    <Category/>
    <Product/>

    </div>
  )
}

export default App