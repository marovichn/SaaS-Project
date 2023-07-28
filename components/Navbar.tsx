"use client";

import { FC } from "react";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  apiLimitCount: number;
  isPro: boolean;
}

const Navbar: FC<NavbarProps> = ({ apiLimitCount, isPro }) => {
  return (
    <div className='flex items-center p-4 mb-2'>
      <MobileSidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      <div className='w-full flex justify-end'>
        <div
          className={cn(
            "bg-black p-[3px] rounded-full",
            isPro
              ? "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
              : ""
          )}
        >
          <UserButton
            afterSignOutUrl='/'
            appearance={{
              variables: {
                colorPrimary: "black",
                colorText: "black",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
