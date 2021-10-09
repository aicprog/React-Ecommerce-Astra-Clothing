import React, {useState} from 'react';

import './sign-in.scss'
import { auth, signInWithgoogle } from "../../firebase/firebase.utils";
import SquareButton from '../custom-buttons/rectangular-btn';

import './sign-in.scss';
import  {SignUpInputForm} from '../form-input';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<SignUpInputForm
						name="email"
						type="email"
						handleChange={this.handleChange}
						value={this.state.email}
						label="email"
						required
					/>
					<SignUpInputForm
						name="password"
						type="password"
						value={this.state.password}
						handleChange={this.handleChange}
						label="password"
						required
					/>
					<div className="button">
						<SquareButton type="submit">Submit</SquareButton>
						<SquareButton onClick={signInWithgoogle} isBlue>
							Sign in with Google
						</SquareButton>
					</div>
				</form>
			</div>
		);
  }
}

export default SignIn;