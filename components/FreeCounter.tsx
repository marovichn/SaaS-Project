import { MAX_FREE_COUNT } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { Zap } from "lucide-react";
import { useProModal } from "@/hooks/use-pro-modal";

export const FreeCounter = ({
  apiLimitCount = 0,
}: {
  apiLimitCount: number;
}) => {
  const proModal =useProModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='px-3'>
      <Card className='bg-white/10 border-0  border-white'>
        <CardContent className='py-6'>
          <div className='text-center text-sm text-white mb-4 space-y-2'>
            <p className="font-bold mb-4">
              {apiLimitCount} / {MAX_FREE_COUNT} Free Generations
            </p>
            <Progress
              className='h-4 border border-white'
              value={(apiLimitCount / MAX_FREE_COUNT) * 100}
            />
          </div>
          <Button
            onClick={() => proModal.onOpen()}
            variant='premium'
            className='w-full text-white group transition font-bold text-md flex justify-between mt-4'
          >
        
            Upgrade
            <Zap className='w-5 h-5 ml-2 fill-white text-white' />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
