import React from 'react';
import { Header } from './header/Header';

export const Content = ({ content, project }) => {
    return (
        <div className="flex-auto py-3 px-5 bg-gray-200 w-full rounded-3xl rounded-b-none">
            <Header project={project}/>

            <div className="container m-auto py-3">
                {content}
            </div>
        </div>
    );
};

