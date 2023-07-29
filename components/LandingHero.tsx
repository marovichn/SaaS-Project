"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();
  var tmp = [];
  for (var i = 0; i < 50; i++) {
    tmp.push(i);
  }
  var indents = tmp.map(function (i) {
    let x = `${Math.random() * 200}vmax`;
    let y = `${Math.random() * 100}vh`;
    let z = `${Math.random() * 200 - 100}vmin`;
    let rx = `${Math.random() * 360}deg`;
    let delay = `${Math.random() * 1.5}s`;
    const style = {
      "--x": x,
      "--y": y,
      "--z": z,
      "--rx": rx,
      animationDelay: delay,
    };

    return <code key={x} style={style}></code>;
  });

  return (
    <div className='text-white font-bold py-36 text-center space-y-8 scene2 '>
      {indents}
      <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold'>
        <h1>The Best AI Tool for</h1>
        <div className='text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 '>
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation.",
                "Blog Writing.",
                "Mail Writing.",
                "Music Generation."
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className='text-sm md:text-xl font-light text-zinc-400'>
        Create content using AI 10x faster.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant='premium'
            className='md:text-lg p-4 md:p-6 rounded-full font-semibold name2'
          >
            Start Generating For Free
          </Button>
        </Link>
        <div className='text-zinc-400 text-xs md:text-sm font-normal mt-2'>
          No credit card required.
        </div>
      </div>
    </div>
  );
};
