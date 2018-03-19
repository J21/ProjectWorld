import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Save from './pages/Save'
import Login from './pages/Login';
import Dev from './pages/Dev';
import Navbar from './Components/Navbar/CustomNavbar';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/news' component={News} />
          <Route exact path='/save' component={Save} />
          <Route exact path='/dev' component={Dev} />
        </div>
      </Router>
    );
  }
}

export default App;
