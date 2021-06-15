import React, { useState } from 'react'

import FormInput from '../form-input';
import CustomButton from '../custom-button';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async event => {
    event.preventDefault();

    try {
        await auth.signInWithEmailAndPassword(email, password)

        setEmail({ email: '' });
        setPassword({ password: '' });
    } catch (error) {
        console.log(error);
    }
    };

    

    return (
        <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            onChange={event => setEmail(event.target.value)}
            value={email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            onChange={event => setPassword(event.target.value)}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    )
}

export default SignIn
