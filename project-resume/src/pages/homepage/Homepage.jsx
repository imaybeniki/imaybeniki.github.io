import React, {Component} from 'react';
import { NavButton } from '../../atoms/NavButton/NavButton';
import './homepage.css';

export default class Homepage extends Component{

  render () {

    const { history } = this.props;

    return (
      <div className="homepage-outer-flexbox">
        <div className="homepage-row-one">
          <NavButton 
            icon="timeline"
            history={history}
          />
          <NavButton 
            icon="me" 
            history={history}
          />
          <NavButton 
            icon="learn" 
            history={history}
          />
        </div>
        <div className="homepage-row-two">
          <NavButton 
            icon="meta" 
            history={history}
          />
          <NavButton 
            icon="projects" 
            history={history}
          />
          <NavButton 
            icon="education" 
            history={history}
          />
        </div>
      </div>
    );
  }
}