import React from 'react';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Footer from './organisms/footer/Footer';
import ContentContainer from './pages/content/ContentContainer';

const history = createBrowserHistory();

ReactDOM.render(
    <div>
        <Router basename="/" history={ history }  >
            <Switch>
                <Route exact path="/project-resume" component={Homepage} />
                <Route exact path="/home" component={Homepage} />
                <Route exact path="/:type" component={ContentContainer}/>
            </Switch>
        </Router>
        <Footer />
    </div>, 
    document.getElementById('root'));

serviceWorker.unregister();
