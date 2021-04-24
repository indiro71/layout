import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from '../template/Layout';
import leftMenuItems from './data/leftMenuItems';
import '../style.css';

export const App = () => {
    return (
        <Router>
            <Layout
                content={13123}
                leftMenuItems={leftMenuItems}
            />
        </Router>
    );
}