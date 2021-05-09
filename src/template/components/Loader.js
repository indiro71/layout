import React from 'react';

export const Loader = ({loading}) => {
    return (
      <div className={`${loading && 'visible'} absolute w-full h-1 top-0 left-0 right-0 main-loader`} />
    );
};
