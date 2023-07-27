"use client";

import { FC, useState } from "react";
import { Button } from "./ui/button";
import { runFireworks } from "@/lib/utils";

interface CurrentPlanProps {
  isPro: boolean;
}

const CurrentPlan: FC<CurrentPlanProps> = ({ isPro }) => {
  const [animation, setAnimation] = useState(false);

  return (
    <>
      {isPro ? (
        <Button
          onClick={() => {
            setAnimation(true);
            runFireworks();
            setTimeout(()=>{
                setAnimation(false);
            },5000)
          }}
          className='p-8 text-lg font-bold shadow-lg shadow-black/20 mx-3 py-10'
          variant='premium'
          disabled={animation}
        >
          You are currently on a PRO plan.
        </Button>
      ) : (
        <div>Ypu are currently on a free trial.</div>
      )}
    </>
  );
};

export default CurrentPlan;
