import Link from "next/link"
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0">
       <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"/>
<div className="p-4 relative z-10 w-full text-center flex flex-col">
      <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the Art of Music</h1>
      <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Dive into Our comprhensive music courses and transform our musical journey today. whether you&apos;re a begginer or looking to rfine your skills,join us to unlock your true potential. </p>
</div>

<div className="mt-4">
<Link href="/courses"><Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore Courses
      </Button></Link>
</div>
    </div>
  )
}

export default HeroSection
