import { FC } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";

interface BotAvatarProps {}

const BotAvatar: FC<BotAvatarProps> = ({}) => {
  return (
    <Avatar className='h-9 w-9'>
      <AvatarImage className='p-0 rounded-full border-2 border-black' src='/assets/logoW.jpg' />
    </Avatar>
  );
};

export default BotAvatar;
