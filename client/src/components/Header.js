import React from 'react'
import Customer from './Customer';
import CustomerAdd from './CustomerAdd';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Table from './Table';

class Header extends React.Component{
    render()
    {
        return(
            <div>

        <Router>
        <div className='Menu-wrapper'>
          <ul>
            <Link to='/'><li>Login</li></Link>
            <Link to='/home'><li>Table</li></Link>
            <Link to='/insert'><li>Predict</li></Link>
          </ul>
        </div>
        <div className='Contents-wrapper'>
          <Switch>
            <Route exact path='/' component={Customer} />
            <Route path='/home' component={Table} />
            <Route path='/insert' component={CustomerAdd} />
          </Switch>
        </div>
        </Router>




            </div>
        );
    }
}

export default Header;