import React from "react";
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { Layout } from '../template/Layout';
import leftMenuItems from './data/leftMenuItems';
import '../style.css';

const project = () => {
    return (
        <NavLink to='/'>Layout</NavLink>
    );
}

export const App = () => {
    return (
        <Router>
            <Layout
                content={13123}
                leftMenuItems={leftMenuItems}
                project={project}
            />
        </Router>
    );
}