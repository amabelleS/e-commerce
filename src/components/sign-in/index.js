import React, { useState } from 'react'

import FormInput from '../form-input';
// import CustomButton from '../custom-button/custom-button.component';

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
            {/* <input onChange={event => setEmail(event.target.value)} name='email' type='email' value={email} required/>
            <label>Email</label>
            <input onChange={event => setPassword(event.target.value)} name='password' type='password' value={password} required/>
            <label>Password</label>
            <input type='submit' value='Submit Form'/> */}
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
            <input type='submit' value='Submit Form'/>
          {/* <CustomButton type='submit'> Sign in </CustomButton> */}
        </form>
      </div>
    )
}

export default SignIn
