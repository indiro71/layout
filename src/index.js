import React from 'react'
import { LeftBlock, RightBlock } from './template/blocks';

export const LayoutComponent = ({ children, leftMenuItems, project }) => {
  return (
    <div className="flex w-full min-h-screen bg-blue-800 px-8 py-4">
      <LeftBlock leftMenuItems={leftMenuItems}/>
      <RightBlock content={children} project={project}/>
    </div>
  );
};
