import React from "react";
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { LayoutComponent } from 'src';
import leftMenuItems from './data/leftMenuItems';

import 'layout/dist/index.css'

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
