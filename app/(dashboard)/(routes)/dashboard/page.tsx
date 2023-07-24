import { Button } from '@/components/ui/button'
import { FC } from 'react'
import { UserButton } from '@clerk/nextjs'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <div className='text-2xl  flex items-center  justify-center '>
      <Button
        className='p-10 text-2xl mr-5 hover:border-slate-200'
        variant='outline'
      >
        Dashboard [protected]
      </Button>
      <UserButton afterSignOutUrl='/'/>
    </div>
  );
}

export default page