import { FC } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";

interface BotAvatarProps {}

const BotAvatar: FC<BotAvatarProps> = ({}) => {
  return (
    <Avatar className='h-10 w-10'>
      <AvatarImage className='p-1 rounded-full' src='/assets/logo.jpg' />
    </Avatar>
  );
};

export default BotAvatar;
