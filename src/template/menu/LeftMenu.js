import React from 'react';

export const LeftMenu = ({leftMenuItems}) => {
    return (
        <nav className="side-nav w-64">
            {leftMenuItems()}
        </nav>
    );
}