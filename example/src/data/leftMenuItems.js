import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function leftMenuItems() {
    // const [ filterMenu, setFilterMenu ] = useState([]);
    // const menu = [
    //     {
    //         title: 'Main',
    //         link: '/'
    //     },
    //     {
    //         title: 'Qr-code generator',
    //         link: '/qr'
    //     },
    //     {
    //         title: 'Short links',
    //         link: '/links'
    //     },
    //     {
    //         title: 'Add link',
    //         link: '/links/add',
    //         auth: true
    //     },
    //     {
    //         title: 'Notes',
    //         link: '/notes'
    //     },
    //     {
    //         title: 'Add note',
    //         link: '/notes/add',
    //         auth: true
    //     },
    //     {
    //         title: 'Instagram',
    //         link: '/instagram'
    //     },
    //     {
    //         title: 'Add InstaProfile',
    //         link: '/instagram/add',
    //         auth: true
    //     },
    //     {
    //         title: 'Slack',
    //         link: '/slack'
    //     },
    //     {
    //         title: 'Tags',
    //         link: '/tags',
    //         auth: true
    //     },
    //     {
    //         title: 'Auth',
    //         link: 'Auth',
    //         auth: false
    //     }
    // ];
    //
    // useEffect(() => {
    //     setFilterMenu(menu.filter(item => item.auth !== false));
    // }, []);

    return (
        <div className="w-full">
            {/*{filterMenu.map((item, index) => (*/}
            {/*    <NavLink*/}
            {/*        key={index}*/}
            {/*        activeClassName="text-gray-900 bg-gray-200 pointer-events-none left-active"*/}
            {/*        className="my-1 text-white px-4 py-3 w-full block rounded-l-full relative text-gray-100 hover:bg-blue-200 hover:bg-opacity-10"*/}
            {/*        to={item.link}>*/}
            {/*        <div className="left-active-top" />*/}
            {/*        {item.title}*/}
            {/*        <div className="left-active-bottom" />*/}
            {/*    </NavLink>*/}
            {/*))}*/}
          123
        </div>
    );
}

export default leftMenuItems;
