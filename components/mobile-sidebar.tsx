"use client";

import { FC, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";

interface MobileSidebarProps {}

const MobileSidebar: FC<MobileSidebarProps> = ({}) => {
const [isMounted, setIsMounted] = useState(false);

useEffect(()=>{
setIsMounted(true);
},[])

if(!isMounted)return null;

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant='ghost' className='md:hidden' onClick={() => {}}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar/>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
