"use client";

import Link from "next/link";

import Image from "next/image";
import { FC } from "react";
import {
  LayoutDashboard,
  MessageSquare,
  ImageIcon,
  VideoIcon,
  Music,
  Code,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {}

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-white",
  },
];

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className='space-y-4 py-4 flex flex-col h-full bg-black text-white'>
      <div className='px-3 py-2 flex-1 pt-4'>
        <Link href='/dashboard' className='flex items-center pl-3 mb-14'>
          <div className='relative w-14 h-14 mr-4'>
            <Image src='/assets/logo.jpg' alt='logo' width={100} height={100} />
          </div>
          <div>
            <Image
              src='/assets/nameB.jpg'
              alt='logo'
              width={150}
              height={150}
              className='mb-2'
            />
          </div>
        </Link>
        <div className='space-y-1 -mt-8'>
          {routes.map((route) => {
            if (route.label === "Settings") {
              return (
                <Link
                  href={route.href}
                  key={route.href}
                  className='text-sm group flex p-3 w-full justify-start font-medium cursor-pointer 
            border
            border-transparent
            hover:bg-white/10 hover:border hover:border-white
            hover:shadow-sm 
            hover:shadow-white rounded-lg transition'
                >
                  <div className='flex items-center flex-1 p-2'>
                    <route.icon
                      className={cn(
                        "h-5 w-5 mr-4 group-hover:animate-spin transition rounded-sm",
                        route.color
                      )}
                    />
                    {route.label}
                  </div>
                </Link>
              );
            } else {
              return (
                <Link
                  href={route.href}
                  key={route.href}
                  className='text-sm group flex p-3 w-full justify-start font-medium cursor-pointer 
            border
            border-transparent
            hover:bg-white/10 hover:border hover:border-white
            hover:shadow-sm 
            hover:shadow-white rounded-lg transition'
                >
                  <div className='flex items-center flex-1 p-2'>
                    <route.icon
                      className={cn(
                        "h-5 w-5 mr-4 group-hover:text-white transition rounded-sm",
                        route.color
                      )}
                    />
                    {route.label}
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
