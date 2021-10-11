import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Detail from './components/Detail.component';
import Header from './components/Header.component';
import Home from './components/Home.component';
import Login from './components/Login.component';

function App() {
    return (
        <div className='App'>
            <Router>
                <Header />
                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                    <Route path='/detail' exact>
                        <Detail />
                    </Route>
                    <Route path='/login' exact>
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
