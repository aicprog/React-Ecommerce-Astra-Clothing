import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.c';
import ShopPage from './pages/shop/shop.c';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header/header.c';
import SignInandSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.c';



function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInandSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
