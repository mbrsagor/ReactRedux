import React, { Component } from 'react';

import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <BrowserRouter>
                            <Switch>
                                <Route path='/' exact component={Home}  />
                                <Route path='/login' component={Login}  />
                                <Route path='/registration' exact component={Register}  />
                            </Switch>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
