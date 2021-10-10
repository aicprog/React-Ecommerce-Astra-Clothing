import React from 'react';
import SignIn from '../../components/sign-in';
import SignUp from '../../components/sign-up';
import "./LoginSignUp.scss";


const LoginSignUp = () =>(
    <div className='sign-in-and-sign-up'>
        <SignIn className="sign-in"/>
        <SignUp/>
    </div>
)

export default LoginSignUp;