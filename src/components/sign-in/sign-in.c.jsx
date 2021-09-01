import React from 'react';
import FormInput from '../form-input/form-input.c';
import './sign-in.s.scss'
import {signInWithgoogle} from '../../firebase/firebase.utils'
import SquareButton from '../custom-buttons/rectangular-btn/rectangular-btn.c';


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }
    //clears out 
    handleSubmit = (event) =>{
        event.preventDefault();

        this.setState({email:'', password:''})
    }

    handleChange = (event) =>{
        const {value, name} = event.target

        this.setState({[name]: value})
    }

    render(){
        return (
            <div className='sign-in'>
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    name="email" 
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label= "email"
                    required />
   
                    <FormInput 
                    name="password" 
                    type="password" 
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label="password"
                    required />
                    
                    <div className="button">
                        <SquareButton type="submit">Submit</SquareButton>
                        <SquareButton onClick={signInWithgoogle} isBlue>
                            Sign in with Google
                        </SquareButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;