import React, {Component} from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Homepage } from './pages/homepage/Homepage';

export default class App extends Component {
    /**
     * @summary Main class where the flow of the UI is determined
     */

     render() {
         return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" render={() => <Homepage />} />
                    <Route path="/poems" render={() => <homepage />} />
                    <Route path="/timeline" render={() => <homepage />} />
                    <Route path="/projects" render={() => <homepage />} />
                    <Route path="/art" render={() => <homepage />} />
                </Switch>
            </BrowserRouter>
         )
     }
}