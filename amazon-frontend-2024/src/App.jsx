import React from 'react'
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Carousel  from "./Components/Carousel/CarouselEffect";
import Category from './Components/Category/Category';

const App = () => {
  return (
    <div>
    <Router>
    <Header/>
    </Router>
    <Carousel/>
    <Category/>

    </div>
  )
}

export default App