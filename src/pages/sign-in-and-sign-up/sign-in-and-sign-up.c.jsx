import React from 'react';
import SignIn from '../../components/sign-in/sign-in.c';
import SignUp from '../../components/sign-up/sign-up.c';
import './sign-in-and-sign-up.s.scss'


const SignInandSignUpPage = () =>(
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInandSignUpPage