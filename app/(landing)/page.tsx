import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <p className='text-6xl text-purple-500 flex items-center  justify-center w-[100vw] h-[100vh]'>
      <Button
        className='p-10 text-5xl text-purple-500 border-purple-500 hover:border-slate-200'
        variant='outline'
      >
        Landing Page(Unprotected)
      </Button>
    </p>
  );
}
