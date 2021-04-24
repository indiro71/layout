import React from 'react';
import { Content } from '../Content';
import { Footer } from '../footer/Footer';

export const RightBlock = ({ content }) => {
    return (
        <div className="flex min-h-full flex-col w-full">
            <Content content={content}/>
            <Footer/>
        </div>
    );
};