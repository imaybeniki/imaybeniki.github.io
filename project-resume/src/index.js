import React from 'react';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Footer from './organisms/footer/Footer';
import ContentContainer from './pages/content/ContentContainer';

const history = createBrowserHistory();

ReactDOM.render(
    <div>
        <Router history={ history }  >
            <Route exact path="/home" component={Homepage} />
            <Route component={ContentContainer}/>
        </Router>
        <Footer />
    </div>, 
    document.getElementById('root'));

serviceWorker.unregister();
