import React, { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return <main className='h-full bg-black overflow-auto'>
    <div className="mx-auto max-w-screen-xl h-full w-full">
        {children}
    </div>
  </main>;
};

export default layout;
