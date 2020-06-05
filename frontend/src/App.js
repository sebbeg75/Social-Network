import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';

const App = () => (
  <BrowserRouter>
    <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/signin' component={Signin} />
        </Switch>
      </main>
  </BrowserRouter>
);

export default App;
