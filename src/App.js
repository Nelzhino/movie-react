import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Elements Page
import HeaderComponent from './pages/HeaderComponent';
import FooterComponent from './pages/FooterComponent';
// Pages
import MovieComponent from './components/MovieComponent';
import HomeComponent from './components/HomeComponent';


const App = () => {

  return (
    <div>
        <BrowserRouter>
        <HeaderComponent title='My page' />
        <div className='container mt-3'>
          <Route exact path="/home" component={HomeComponent} />
          <Route path="/movie" component={MovieComponent} />
          <Redirect from='/' to='/home' />
        </div>
        <FooterComponent />
        </BrowserRouter>
    </div>
  )
} 

export default App;
