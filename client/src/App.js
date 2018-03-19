import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import News from './Components/News';
import Save from './Components/Save';
import Article from './Components/Article'
import Login from './Components/Login';
import Dev from './Components/Dev';
import Navbar from './Components/CustomNavbar';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/news' component={News} />
          <Route exact path='/article' component={Article} />
          <Route exact path='/dev' component={Dev} />
        </div>
      </Router>
    );
  }
}

export default App;
