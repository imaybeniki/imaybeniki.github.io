import React, {Component} from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Homepage } from './pages/homepage/Homepage';
import Timeline from './pages/timeline/Timeline';

export default class App extends Component {
    /**
     * @summary Main class where the flow of the UI is determined
     */

     render() {
         return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Homepage} />
                    <Route path="/timeline" component={Timeline} />
                    <Route path="/me" component={Homepage} />
                    <Route path="/projects" component={Homepage} />
                    <Route path="/education" component={Homepage} />
                    <Route path="/learn" component={Homepage} />
                    <Route path="/meta" component={Homepage} />
                </Switch>
            </BrowserRouter>
         )
     }
}