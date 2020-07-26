import React from 'react';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Timeline from './pages/timeline/Timeline';
import Footer from './organisms/footer/Footer';
import ContentContainer from './pages/content/ContentContainer';

const history = createBrowserHistory();

ReactDOM.render(
    <div>
        <Router history={ history }  >
            <Route path="/content/{type}" component={ContentContainer} />
            <Route path="/timeline" component={Timeline} />
            <Route path="*" component={Homepage} />
        </Router>
        <Footer />
    </div>, 
    document.getElementById('root'));

serviceWorker.unregister();
