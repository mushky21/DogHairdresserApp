import React, { Component } from 'react';
import './App.css';
import Login from './components/Authentication/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import HaircutQueue from './components/HaircutsTurns/HaircutQueue';
import Register from './components/Authentication/Register';
import "react-datepicker/dist/react-datepicker.css";
import 'moment-timezone';
import EditTurn from './components/HaircutsTurns/EditTurn';
import 'reactjs-popup/dist/index.css';
import AddTurn from './components/HaircutsTurns/AddTurn';
import { Provider } from 'react-redux';
import store from './store';






class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/' component={Login}></Route>
              <Route exact path='/haircutQueue' component={HaircutQueue}></Route>
              <Route exact path='/register' component={Register}></Route>
              <Route exact path='/editTurn' component={EditTurn}></Route>
              <Route exact path='/addTurn' component={AddTurn}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>

    )
  }
}

export default App;
