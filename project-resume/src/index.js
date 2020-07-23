import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Timeline from './pages/timeline/Timeline';
import Footer from './organisms/footer/Footer';
import ContentContainer from './pages/content/ContentContainer';

ReactDOM.render(
    <div>
        <BrowserRouter>
            <Switch>
                <Route path="/home" component={Homepage} />
                <Route path="/timeline" component={Timeline} />
                <Route path="*" component={ContentContainer} />
            </Switch>
        </BrowserRouter>
        <Footer />
    </div>, 
    document.getElementById('root'));

serviceWorker.unregister();
