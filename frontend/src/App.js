import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Signup from './containers/Signup/Signup';
import Signin from './containers/Signin/Signin';
import Profile from './containers/Profile/Profile';
import Principal from './components/Principal/Principal';

const App = () => (
  <BrowserRouter>
    <Header />
      <main>
        <Switch>
          <Route exact path='/' component= { Principal } />
          <Route exact path='/signup' component= { Signup } />
          <Route exact path='/signin' component={  Signin } />
          <Route exact path='/profile' component= { Profile } />
          <Route exact path='/home' component= { Home } />
        </Switch>
      </main>
  </BrowserRouter>
);

export default App;
