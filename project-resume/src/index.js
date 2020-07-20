import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Timeline from './pages/timeline/Timeline';
import Me from './pages/me/Me';
import Footer from './organisms/footer/Footer';

ReactDOM.render(
    <div>
        <BrowserRouter forceRefresh={true} basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/timeline" component={Timeline} />
                <Route path="/me" component={Me} />
                <Route path="/projects" component={Homepage} />
                <Route path="/education" component={Homepage} />
                <Route path="/learn" component={Homepage} />
                <Route path="/meta" component={Homepage} />
                <Route path="*" component={Homepage} />
            </Switch>
        </BrowserRouter>
        <Footer />
    </div>, 
    document.getElementById('root'));

serviceWorker.unregister();
