import Image from "next/image";
import { FC } from "react";

interface EmptyProps {
  label: string;
}

const Empty: FC<EmptyProps> = ({ label }) => {
var tmp = [];
for (var i = 0; i < 50; i++) {
  tmp.push(i);
}
var indents = tmp.map(function (i) {
  let x = `${Math.random() * 200}vmax`;
  let y = `${Math.random() * 100}vh`;
  let z = `${Math.random() * 200 - 100}vmin`;
  let rx = `${Math.random() * 360}deg`;
  let delay = `${Math.random() * 1.5}s`;
  const style = {
    "--x": x,
    "--y": y,
    "--z": z,
    "--rx": rx,
    animationDelay: delay,
  };

  return <div key={x} style={style}></div>;
});

  return (
    <div className='p-20 flex flex-col items-center justify-center bg-black rounded-xl overflow-hidden scene'>
      {indents}
      <main className='relative w-full flex items-center justify-center mb-10 '>
        <Image alt='Empty' width={900} height={900} src='/assets/empty1.png' className="z-[9999]"/>
      </main>
      <p className="text-lg text-white text-center min-[0px]:max-sm:text-sm">
        {label}...
      </p>
    </div>
  );
};

export default Empty;
