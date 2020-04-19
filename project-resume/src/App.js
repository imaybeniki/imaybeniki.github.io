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
                    <Route path="/timeline" render={() => <homepage />} />
                    <Route path="/me" render={() => <homepage />} />
                    <Route path="/projects" render={() => <homepage />} />
                    <Route path="/education" render={() => <homepage />} />
                    <Route path="/meta" render={() => <homepage />} />
                    <Route path="/learn" render={() => <homepage />} />
                </Switch>
            </BrowserRouter>
         )
     }
}