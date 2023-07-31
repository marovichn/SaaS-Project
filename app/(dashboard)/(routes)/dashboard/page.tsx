import { FC } from "react";
import { ArrowRight, MessageSquare, ImageIcon, Code, Music, VideoIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface pageProps {}

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    bgColor: "bg-pink-500/10",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    bgColor: "bg-green-500/10",
    color: "text-green-700",
  },
];

const page: FC<pageProps> = ({}) => {
  return (
    <div className="mb-10">
      <div className="mb-8 space-y-4">
        <h2 className="text-5xl md:text-4xl font-bold text-center mt-8 px-5">
          Explore the power of {"AI's"} Brain Pulse
        </h2>
        <p className='text-muted-foreground font-light text-sm md:text-lg text-center px-12 py-6'>
          Discover a new realm of productivity as BrainPulse seamlessly
          integrates AI with your cognitive processes, empowering you to unlock
          your true mental prowers. Our intuitive and user-friendly interface
          allows you to effortlessly capture, organize, and explore your
          thoughts, transforming them into actionable insights.
        </p>
      </div>
      <div className='px-4 md:px-20 lg.px-32 space-y-4 min-[0px]:max-md:pb-10'>
        {tools.map((tool) => (
          <Card key={tool.href}>
            <Link
              className='p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer'
              href={tool.href}
            >
              <div className='flex items-center gap-x-4'>
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                  <tool.icon className={cn("w-8 h-8", tool.color)} />
                </div>
                <div className='font-semibold'>{tool.label}</div>
              </div>
              <ArrowRight />
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default page;
