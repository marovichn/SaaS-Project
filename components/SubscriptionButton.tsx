"use client";

import { FC, useState } from "react";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import axios from "axios";

interface SubscriptionButtonProps {
  isPro: boolean;
}

const SubscriptionButton: FC<SubscriptionButtonProps> = ({ isPro }) => {
    const [loading, setLoading] = useState(false);
  const onClick = async () => {
    try {
        setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (err: any) {
      console.log(err);
    }finally{
        setLoading(false);
    }
  };

  return (
    <Button disabled={loading} variant={isPro ? "default" : "premium"} onClick={onClick}>
      {isPro ? "Manage subscription" : "Upgrade Now"}{" "}
      {!isPro && <Zap className='h-8 w-8 text-white fill-white' />}
    </Button>
  );
};

export default SubscriptionButton;
