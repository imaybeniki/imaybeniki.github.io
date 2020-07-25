import React from 'react';
import { Provider } from 'react-redux';
import createStore from 'redux';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Timeline from './pages/timeline/Timeline';
import Footer from './organisms/footer/Footer';
import ContentContainer from './pages/content/ContentContainer';

const store = createStore();
const history = createBrowserHistory();

ReactDOM.render(
    <div>
        <Provider store={ store }>
            <Router history={ history }  >
                <Route path="/content/{type}" component={ContentContainer} />
                <Route path="/timeline" component={Timeline} />
                <Route path="*" component={Homepage} />
            </Router>
        </Provider>
        <Footer />
    </div>, 
    document.getElementById('root'));

serviceWorker.unregister();
