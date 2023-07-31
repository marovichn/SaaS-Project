"use client";

import { FC, useState } from "react";
import { Button } from "./ui/button";
import { cn, runFireworks } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface CurrentPlanProps {
  isPro: boolean;
}

const CurrentPlan: FC<CurrentPlanProps> = ({ isPro }) => {
  const [animation, setAnimation] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {isPro ? (
        <Button
          onClick={() => {
            if (pathname === "/settings") {
              setAnimation(true);
              runFireworks();
              setTimeout(() => {
                setAnimation(false);
              }, 5000);
            }
          }}
          className={cn(
            "p-8 text-lg font-bold shadow-lg shadow-black/20 mx-3 py-10 transition",
            pathname !== "/settings" ? "hover:cursor-default":""
          )}
          variant='premium'
          disabled={animation}
        >
          You are currently on a PRO plan.
        </Button>
      ) : (
        <div className='ml-3'>You are currently on a free trial.</div>
      )}
    </>
  );
};

export default CurrentPlan;
