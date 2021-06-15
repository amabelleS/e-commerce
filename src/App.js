  import React, { useEffect, useState } from 'react';
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

import { auth } from './firebase/firebase.utils';

import './App.css';

function App() {
  const [currentUser, setCurrentYser] = useState(null);

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged(authUser => {
      authUser ? setCurrentYser(authUser) : setCurrentYser(null);
    }) 
    return () => {
      unlisten();
    }
  }, [])

  return (
    <Router>
      <div>
        <Header currentUser={currentUser}/>
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
