import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import LogIn from './components/Log-in';
import LogOut from './components/Log-out';
import Register from './components/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Log-in" component={LogIn}/>
          <Route path="/Log-out" component={LogOut}/>
          <Route path="/Register" component={Register}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
