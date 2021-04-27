import React from 'react';
import { LeftMenu } from '../menu';
import { Logo } from '../components';

export const LeftBlock = ({ leftMenuItems }) => {
    return (
        <div>
            <Logo/>
            <LeftMenu leftMenuItems={leftMenuItems} />
        </div>
    );
};