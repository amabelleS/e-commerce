  import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  // Redirect,
} from 'react-router-dom';

import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop'
import Header from './components/header'
import SignInAndSignUpPage from './pages/sign-in-sign-up'
import CheckoutPage from './pages/checkout'

import {setCurrentUser} from './redux/user/user.action'

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { selectCurrentUser } from './redux/user/user.selectors';
import { connect } from 'react-redux'
 
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState();
  // const [unsubscribeFromAuth , setUnsubscribeFromAuth ] = useState(null)

  //  const unsubscribeFromAuth = null;

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      const userRef = await createUserProfileDocument(userAuth);
      if (userRef) {
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      //  else {unsubscribeFromAuth(null)}
      setCurrentUser(null);
    });
    
    // const unlisten = auth.onAuthStateChanged( async authUser => {
    //   if (authUser) {
    //     const userRef = await createUserProfileDocument(authUser)

    //     userRef.onSnapshot(snapshot => {
    //       setCurrentUser({
    //         id: snapshot.id,
    //         ...snapshot.data()
    //       })
    //     })
    //   } else {
    //     setCurrentUser(null)
    //   }
    
    //   setCurrentUser(authUser)
    // }) 
    return () => {
      unsubscribeFromAuth();
      // unlisten()
    }
  }, [])

   useEffect(() => {
    //  setCurrentUser()
       console.log(currentUser)
    }, [currentUser])

  return (
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
          <Route exact path="/checkout">
            <CheckoutPage />
          </Route>
          {/* {currentUser ? <Route  exact path="/signin" ><SignInAndSignUpPage /></Route> :  <Redirect to='./' />  } */}
          <Route exact path="/signin">
            {/* {currentUser ? <SignInAndSignUpPage /> : <Redirect to='./' /> } */}
            <SignInAndSignUpPage />
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispachToProps = dispach => ({
  setCurrentUser: user => dispach(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispachToProps)(App);
