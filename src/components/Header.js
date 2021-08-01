import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Today from './Today'
import Tomorrow from './Tomorrow'

const Header = (props) => {
  return (
    <Router>
      <nav>
        <Link className='nav-today' to='/today'>TODAY</Link>
        <Link className='nav-tomorrow' to='/tomorrow'>TOMORROW</Link>
      </nav>
      <Route path='/today' component={Today}/>
      <Route path='/tomorrow' component={Tomorrow}/>
    </Router>
  )
};

export default Header;

