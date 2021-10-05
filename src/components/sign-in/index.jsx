import React, {useState} from 'react';
import FormInput from '../form-input';
import './sign-in.scss'
import { auth, signInWithgoogle } from "../../firebase/firebase.utils";
import SquareButton from '../custom-buttons/rectangular-btn';



const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    

        //clears out 
    const handleSubmit = async (event) =>{
        event.preventDefault();

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password:''})
        }catch(error){
            console.log(error);
        }

        this.setState({email:'', password:''})
    }

    const handleChange = (event) =>{
        const {value, name} = event.target

        this.setState({[name]: value})
    }

    return (
            <div className='sign-in'>
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password.</span>
                <form onSubmit={handleSubmit}>
                    <FormInput
                    name="email" 
                    value={email}
                    handleChange={handleChange}
                    label= "email"
                    required />
   
                    <FormInput 
                    name="password" 
                    type="password" 
                    value={password}
                    handleChange={handleChange}
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

export default SignIn

