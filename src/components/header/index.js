import React from 'react'
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon'
import CartDropDown from '../cart-dropdown'

import { connect } from 'react-redux';

import './header.styles.scss';

const Header = ({ currentUser }) => {
    return (
        <div className='header'>
          <Link className='logo-container' to='/'>
          <Logo className='logo' title='logo'/>
        </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
        <div className='option' onClick={() =>  auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon />
    </div>
    <CartDropDown />
  </div>
    )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header)
