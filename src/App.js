  import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { Provider } from 'react-redux';

import store from './redux/store';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop'
import Header from './components/header'
import SignInAndSignUpPage from './pages/sign-in-sign-up'

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged( async authUser => {
      if (authUser) {
        const userRef = await createUserProfileDocument(authUser)

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        setCurrentUser(null)
      }
      // console.log(authUser);
      // console.log(currentUser);
    }) 
    return () => {
      unlisten();
    }
  }, [])

  return (
    <Provider store={store}>
    <Router>
      <div>
        <Header />
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
    </Provider>
  );
}

export default App;
