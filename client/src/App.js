import React, { Component } from 'react';
import './App.css';
import Login from './components/Authentication/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import HaircutQueue from './components/HaircutsTurns/HaircutQueue';




class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Login}></Route>
            <Route exact path='/haircutQueue' component={HaircutQueue}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
