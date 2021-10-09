import React, {useEffect} from 'react';
import './App.css';
//pages 
import { HomePage, ShopPage, LoginSignUp, CartPage } from "./pages";

import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'

//props.currentUser.payload.user.currentUser;
const App = (props, {currentUser}) => {
	//let unsubscribeFromAuth = null;

	const { setCurrentUser } = props;

	const checkForUser = () => {
		return auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapshot) => {
					//console.log(snapshot.data());
					setCurrentUser({
						currentUser: {
							id: snapshot.id,
							...snapshot.data(),
						},
					});
				});
			} else {
				setCurrentUser(null);
			}
		});
	};


	useEffect(() => {
		checkForUser();
	}, []);

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route
					exact
					path="/signin"
					render={() =>
						props.currentUser ? (
							<Redirect to="/" />
						) : (
							<LoginSignUp />
						)
					}
				/>
				<Route exact path="/cart" component={CartPage} />
			</Switch>
		</div>
	);
};


const mapStateToProps = (state) =>
	createStructuredSelector({
		currentUser: selectCurrentUser,
	});



const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentUser: (user) => dispatch(setCurrentUser(user)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
