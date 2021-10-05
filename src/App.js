import React, {useEffect} from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header';
import SignInandSignUpPage from './pages/LoginSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'



const App = (props, currentUser) => {

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

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }



  return (
    <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInandSignUpPage}/>
        </Switch>  
      </div>
  )
}



// class App extends React.Component {


//   unsubscribeFromAuth = null

//   const {setCurrentUser} = this.props

//   componentDidMount(){
//     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
//       if(userAuth){
//         const userRef = await createUserProfileDocument(userAuth)

//         userRef.onSnapshot(snapshot =>{
//           this.props.setCurrentUser({
//             currentUser: {
//               id: snapshot.id,
//               ...snapshot.data()
//             }
//           })
          
//         })
//       }else{
//         this.setState({currentUser: userAuth})
//       }


//     })
//   }

//   componentWillUnmount() {
//     this.unsubscribeFromAuth();
//   }

//   render() {
//     return (
//       <div>
//         <Header/>
//         <Switch>
//           <Route exact path='/' component={HomePage}/>
//           <Route exact path='/shop' component={ShopPage}/>
//           <Route exact path='/signin' component={SignInandSignUpPage}/>
//         </Switch>  
//       </div>
//     );
//   }
// }



const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentUser: (user) => dispatch(setCurrentUser(user)),
	};
};

export default connect(null, mapDispatchToProps) (App);
