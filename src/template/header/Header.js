import React from 'react';
import { TopMenu } from '../menu';

export const Header = ({ project = 'Indiro' }) => {
    return (
        <header className="flex w-full px-5 justify-between border-b border-gray-300 pb-2 align-middle">
            <div className="flex-1 text-3xl">{project}</div>
            <TopMenu/>
        </header>
    );
};