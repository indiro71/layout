import React from 'react';
import { LeftBlock, RightBlock } from './blocks';

export const Layout = ({ content, leftMenuItems }) => {
    return (
        <div className="flex w-full min-h-screen bg-blue-800 px-8 py-4">
            <LeftBlock leftMenuItems={leftMenuItems}/>
            <RightBlock content={content}/>
        </div>
    );
};
