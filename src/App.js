import React, {useEffect} from 'react';
import './App.css';
//pages 
import {
	HomePage,
	ShopPage,
	LoginSignUp,
	CheckoutPage,
} from "./pages";

import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'
import {createStructuredSelector} from 'reselect'


const App = (props) => {

   let unsubscribeFromAuth = null

  const {setCurrentUser} = props



  useEffect(() => {
    checkForUser()
  }, [])
  
  const checkForUser = () => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
      
        userRef.onSnapshot(snapshot =>{
          //console.log(snapshot.data());
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
            
          })         
        })
      }else{
        setCurrentUser(null)
     
      }


    })
  }



  return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
				<Route
					exact
					path="/signin"
					render={() =>
						props.currentUser ? <Redirect to="/" /> : <LoginSignUp />
					}
				/>
				<Route exact path="/checkout" component={CheckoutPage} />
			</Switch>
		</div>
	);
}


const mapStateToProps = (state) =>createStructuredSelector({
  currentUser: setCurrentUser
})



const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentUser: (user) => dispatch(setCurrentUser(user)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
