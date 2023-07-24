"use client"

import { FC } from "react";
import { UserButton } from '@clerk/nextjs'
import MobileSidebar from "./mobile-sidebar";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className='flex items-center p-4'>
      <MobileSidebar/>
      <div className="w-full flex justify-end">
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  );
};

export default Navbar;
