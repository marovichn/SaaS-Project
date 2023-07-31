"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className='p-4 bg-transparent flex items-center justify-between'>
      <Link href='/' className='flex items-center'>
        <div className='relative h-10 w-10 mr-4 pt-[3px]'>
          <Image src='/assets/logoR.jpg' width={200} height={160} alt='logo' />
        </div>
        <h1
          className={cn(
            "text-2xl font-extrabold text-white name",
            font.className
          )}
        >
          BrainPulse
        </h1>
      </Link>
      <div className='flex items-center gap-x-2'>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant='outline' className='rounded-full px-4'>
            {isSignedIn ? <span className="flex items-center justify-center gap-3">Your Dashboard<ArrowRight className="h-5 w-5"/></span>: "Get Started"}
          </Button>
        </Link>
      </div>
    </nav>
  );
};
