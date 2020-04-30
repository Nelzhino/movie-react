import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Elements Page
import HeaderComponent from './pages/HeaderComponent';
import FooterComponent from './pages/FooterComponent';
// Pages
import MovieComponent from './components/MovieComponent';
import HomeComponent from './components/HomeComponent';


const PageError = () => {

  return (
      <div class="alert alert-warning" role="alert">
        <h1>Warning Page</h1>
        <p>Please, I should contact to administrator.... </p>
      </div>
  )
}

const App = () => {

  return (
    <div>
        <BrowserRouter>
        <HeaderComponent title='My page' />
        <div className='container mt-3'>
          <Switch>
            <Redirect exact from='/' to='/home' />
            <Route exact path="/home" component={HomeComponent} />
            <Route path="/movie" component={MovieComponent} />
            <Route path="/**" component={PageError} />
          </Switch>
        </div>
        <FooterComponent />
        </BrowserRouter>
    </div>
  )
} 

export default App;
