import React, { useState } from 'react'

import FormInput from '../form-input';
import CustomButton from '../custom-button';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = event => {
    event.preventDefault();

    setEmail({ email: '' });
    setPassword({ password: '' });
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
            onChange={event => setEmail(event.target.value)}
            label='password'
            required
          />
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle}> Sign in with Google</CustomButton>
        </form>
      </div>
    )
}

export default SignIn
