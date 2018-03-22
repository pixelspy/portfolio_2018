import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './App';
import About from './About';
import './App.css';

const Links = () => (
  <nav style= {{
    display:'flex',
    flexDirection: 'column',
    textAlign: 'right',
    borderRight: '20px solid black',
    paddingRight: '20px',
    margin: '10px 0 0 10px',
    width: '250px',

  }}>
    <NavLink exact activeClassName='active' to='/'>Home</NavLink>
    <NavLink activeClassName='active' to='/about'>About</NavLink>
    <NavLink activeClassName='active' to='/works'>Works</NavLink>
    <NavLink activeClassName='active' to='/contact'>Contact</NavLink>
  </nav>
)
const Routes = () => (
  <Router>
    <div>
      <Links/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>

  </Router>
);
export default Routes;
