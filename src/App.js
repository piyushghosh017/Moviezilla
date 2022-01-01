import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import "./App.scss";
import Home from './component/Home/Home.js';
import Header from "./component/Header/Header"
import Footer from './component/Footer/Footer';
import PageNotFound from "./component/PageNotFound/PageNotFound";
import MovieDetail from './component/MovieDetails/MovieDetail';

const  App=()=> {
  return (
    <div className='app'>
      <Router>
      <Header/>
      <div className='container'>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/movie/:imdbID" element={<MovieDetail/>} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
      </div>
        <Footer/>
      </Router>
    </div>
  )
  
}

export default App;
