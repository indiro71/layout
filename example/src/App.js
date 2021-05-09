import React from "react";
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { LayoutComponent } from '@indiro/layout';
import leftMenuItems from './data/leftMenuItems';

const project = () => {
  return (
    <NavLink to='/'>Layout</NavLink>
  );
}

export const App = () => {
  return (
    <Router>
      <LayoutComponent
        leftMenuItems={leftMenuItems}
        project={project}
      >
        <div>123</div>
      </LayoutComponent>
    </Router>
  );
}
