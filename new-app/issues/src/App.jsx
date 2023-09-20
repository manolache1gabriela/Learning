import React from 'react';
import Issues from './Issues';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Details from './Details';
import { Fragment } from 'react';

export default function App() {
  return (
    <Router>
        <Fragment>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                </ul>
            </nav>
            <div  className="container">
                <Routes>
                    <Route exact path='/' element={<Issues />}>
                        
                    </Route>
                    <Route path='/issues/:id' element={<Details />}>
                        
                    </Route>
                </Routes>
            </div>
        </Fragment>
    </Router>
  )
}
