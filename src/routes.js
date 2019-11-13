import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route    
} from "react-router-dom";

import Dashboard from './container/dashboard';

const Routes = () => {
    return (
               
        <Router>
            <Switch>
                 <Route exact path="/" component={ Dashboard } />
            </Switch>
        </Router>
               
    );
}

export default Routes;