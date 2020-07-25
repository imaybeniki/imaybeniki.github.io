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
        <BrowserRouter basename={global.isProd ? "https://imaybeniki.github.io/" : "http://localhost:3000"}>
            <Switch>
                <Route path="/content/{type}" component={ContentContainer} />
                <Route path="/timeline" component={Timeline} />
                <Route path="*" component={Homepage} />
            </Switch>
        </BrowserRouter>
        <Footer />
    </div>, 
    document.getElementById('root'));

serviceWorker.unregister();
