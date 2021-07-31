import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Today from './Today'
import Tomorrow from './Tomorrow'


const Header = (props) => {
  return (
    <Router>
      <nav>
        <Link to='/today'>TODAY</Link>
        <Link to='/tomorrow'>TOMORROW</Link>
      </nav>
      <Route path='/today' component={Today}/>
      <Route path='/tomorrow' component={Tomorrow}/>
    </Router>
  )
};

export default Header;

