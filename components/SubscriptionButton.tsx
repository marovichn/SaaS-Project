"use client";

import { FC, useState } from "react";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { cn } from "@/lib/utils";

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
        toast.error("Something went wrong")
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      className={cn('mx-3 my-3 p-6', isPro ? "" : "font-bold text-lg")}
      disabled={loading}
      variant={isPro ? "default" : "premium"}
      onClick={onClick}
    >
      {isPro ? "Manage subscription" : "Upgrade Now"}{" "}
      {!isPro && <Zap className='h-4 w-4 ml-16 text-white fill-white' />}
    </Button>
  );
};

export default SubscriptionButton;
