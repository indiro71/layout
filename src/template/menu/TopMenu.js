import React from 'react';

export const TopMenu = () => {
    return (
        <div className="flex-1 flex justify-end align-middle">
            <div className="px-5 flex justify-center items-center"><a className="hover:underline" href="http://dev.indiro.ru/">Develop</a></div>
            <div className="px-5 flex justify-center items-center"><a className="hover:underline" href="http://games.indiro.ru/">Games</a></div>
            <div className="px-5 flex justify-center items-center"><a className="hover:underline" href="http://apps.indiro.ru/">Apps</a></div>
            <div className="px-5 flex justify-center items-center"><a className="hover:underline" href="https://scanprices.ru/">Scanprices</a></div>
        </div>
    );
}