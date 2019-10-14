import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import './App.css';
import NavBar from './components/navBar';
import NotFound from './components/notFound';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <main className='container'>
      <ToastContainer />
      <NavBar></NavBar>
      <Switch>
        <Route path='/register' component={RegisterForm} />
        <Route path='/login' component={LoginForm} />
        <Route path='/movies/:id' component={MovieForm} />
        <Route path='/movies/' component={Movies} />
        <Route path='/customers/' component={Customers} />
        <Route path='/rentals/' component={Rentals} />
        <Route path='/not-found' component={NotFound} />
        <Redirect from='/' exact to='/movies/' />
        <Redirect to='/not-found' />
      </Switch>
    </main>
  );
}

export default App;
