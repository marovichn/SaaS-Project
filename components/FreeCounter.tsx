import { MAX_FREE_COUNT } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

export const FreeCounter = ({
  apiLimitCount = 0,
}: {
  apiLimitCount: number;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='px-3'>
      <Card className='bg-white/10 border-0'>
        <CardContent className='py-6'>
          <div className='text-center text-sm text-white mb-4 space-y-2'>
            <p>
              {apiLimitCount} / {MAX_FREE_COUNT} Free Generations
            </p>
            <Progress
              className='h-3'
              value={(apiLimitCount / MAX_FREE_COUNT) * 100}
            />
          </div>
          <Button
            onClick={() => {}}
            variant='default'
            className='w-full bg-slate-100 text-black hover:bg-sky-500 group transition font-bold hover:text-white text-md'
          >
            Upgrade
            <Zap
              className='w-4 h-4 ml-2 fill-black group-hover:fill-yellow-300 group-hover:text-yellow-500'
            />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
