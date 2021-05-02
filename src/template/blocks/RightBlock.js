import React from 'react';
import { Content } from '../Content';
import { Footer } from '../footer/Footer';

export const RightBlock = ({ content, project }) => {
    return (
        <div className="flex min-h-full flex-col w-full">
            <Content className="page-transition" content={content} project={project}/>
            <Footer/>
        </div>
    );
};