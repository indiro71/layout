import React from 'react';
import { FooterMenu } from '../menu';

export const Footer = () => {
    return (
        <footer className="pt-2 w-full p-2 bg-gray-200 rounded-xl rounded-t-none mt-2">
            <div className="container flex m-auto w-full">
                <div className="flex-1 text-2xl">
                    Indiro development.
                </div>
                <FooterMenu />
            </div>
        </footer>
    );
}
