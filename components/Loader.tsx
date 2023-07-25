import Image from "next/image";
import { FC } from "react";

interface LoaderProps {}

const Loader: FC<LoaderProps> = ({}) => {
  return (
    <>
      <div className='relative flex items-center justify-center lg:mt-10'>
        <Image alt='Loading logo' width={100} height={100} src='/assets/logoW.png' className="animate-spin mt-6"/>
      </div>
      <p className='text-md text-center ml-5 mt-5'>Waiting for the best pulse ...</p>
    </>
  );
};

export default Loader;
