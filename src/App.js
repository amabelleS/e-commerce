import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop'
import Header from './components/header'
import SignInAndSignUpPage from './pages/sign-in-sign-up'

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route path="/signin">
            <SignInAndSignUpPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
