import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <p className='text-6xl text-purple-500 flex items-center  justify-center mt-20'>
        <Button
          className='p-10 text-5xl text-purple-500 border-purple-500 hover:border-slate-200'
          variant='outline'
        >
          Landing Page(Unprotected)
        </Button>
      </p>
      <Link href='/sign-in' className="ml-20">
        <Button>Log in</Button>
      </Link >
      <Link className="ml-[400px]" href='/sign-up'>
        <Button>Register</Button>
      </Link>
    </>
  );
}
