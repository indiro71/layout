import React from 'react';
import { LeftBlock, RightBlock } from './template/blocks';
import { Loader } from './template/components';

export const LayoutComponent = ({ children, leftMenuItems, project, loading = false }) => {
  return (
    <div className="flex w-full min-h-screen bg-blue-800 px-8 py-4 relative">
      <Loader loading={loading}/>
      <LeftBlock leftMenuItems={leftMenuItems}/>
      <RightBlock content={children} project={project}/>
    </div>
  );
};
