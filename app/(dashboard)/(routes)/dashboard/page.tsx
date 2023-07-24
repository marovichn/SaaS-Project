import { Button } from '@/components/ui/button'
import { FC } from 'react'
import { UserButton } from '@clerk/nextjs'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <div className='text-6xl text-purple-500 flex items-center  justify-center w-[100vw] h-[100vh]'>
      <Button
        className='p-10 text-5xl text-purple-500 border-purple-500 hover:border-slate-200'
        variant='outline'
      >
        Dashboard [protected]
      </Button>
      <UserButton afterSignOutUrl='/'/>
    </div>
  );
}

export default page