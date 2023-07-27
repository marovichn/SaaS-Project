import CurrentPlan from "@/components/CurrentPlan";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { checkSubscription } from "@/lib/subscription";
import { runFireworks } from "@/lib/utils";
import { Settings } from "lucide-react";
import { FC } from "react";

interface SettingsProps {}

const SettingsPage: FC<SettingsProps> = async ({}) => {
  const isPro = await checkSubscription();

  return (
    <div>
      <Heading
        title='Settings'
        description='Manage Account Settings'
        Icon={Settings}
        iconColor='text-gray-700'
        bgColor='bg-gray-700/10'
      />
      <div className='px-4 lg:px-8 space-y-4'>
        <div className='text-muted-foreground text-sm'>
          <CurrentPlan isPro={isPro} />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
