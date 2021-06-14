import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
// import HatsPage from './pages/HatsPage';
import ShopPage from './pages/shop'

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
