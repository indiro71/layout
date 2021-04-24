import React from 'react';

export const FooterMenu = () => {
    return (
        <>
            <div className="flex-1">
                <div className="text-xl mb-3">About</div>
                <div><a className="text-blue-900 hover:text-blue-700 hover:underline transition-all" href="https://indiro.ru/">Site</a></div>
            </div>
            <div className="flex-1">
                <div className="text-xl mb-3">Code</div>
                <div><a className="text-blue-900 hover:text-blue-700 hover:underline transition-all" href="https://github.com/indiro71">Github</a></div>
                <div><a className="text-blue-900 hover:text-blue-700 hover:underline transition-all" href="https://bitbucket.org/indiro/">Bitbucket</a></div>
            </div>
            <div className="flex-1">
                <div className="text-xl mb-3">Contact</div>
                <div><a className="text-blue-900 hover:text-blue-700 hover:underline transition-all" href="tel:+79207501403">Phone</a></div>
                <div><a className="text-blue-900 hover:text-blue-700 hover:underline transition-all" href="mailto:web@indiro.ru">Email</a></div>
            </div>
        </>
    );
}