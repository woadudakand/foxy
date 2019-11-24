import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route    
} from "react-router-dom";

import Dashboard from './container/dashboard';
import Blog from './container/blog';
import Calendar from './container/calendar';
import Charts from './container/chart';
import Gallery from './container/gallery';
import Mailbox from './container/mailbox';
import Inbox from './container/mailbox/inbox';
import Sent from './container/mailbox/sent';
import Draft from './container/mailbox/draft';
import Trash from './container/mailbox/trash';
import Compose from './container/mailbox/compose';
import Progress from './container/progressbar';

const Routes = () => {
    return (               
        <Router>
            <Switch>
                <Route exact path="/" component={ Dashboard } />
                <Route path="/blog" component={ Blog } />
                <Route path="/calendar" component={ Calendar } />
                <Route path="/charts" component={ Charts } />
                <Route path="/gallery" component={ Gallery } />
                <Route path="/mail" component={ Mailbox } />
                <Route path="/inbox" component={ Inbox } />
                <Route path="/sent" component={ Sent } />
                <Route path="/draft" component={ Draft } />
                <Route path="/trash" component={ Trash } />
                <Route path="/compose" component={ Compose } />
                <Route path="/progressbar" component={ Progress } />
            </Switch>
        </Router>               
    );
}

export default Routes;
