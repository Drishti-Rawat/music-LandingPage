import { Hammersmith_One } from "next/font/google";

import HeroSection from "@/Components/HeroSection"
import FeaturedCourses from "@/Components/FeaturedCourses";
import Content from "@/Components/Content";
import InfinitemovingCard from "@/Components/InfinitemovingCard";
import UpcomingWebinar from "@/Components/UpcomingWebinar";
import Instructor from "@/Components/Instructor"

export default function Home() {
  return (
   <main className="min-h-screen  bg-black/[0.96]">
    <HeroSection/>
    <FeaturedCourses/>
    <Content/>
    <InfinitemovingCard/>
    <UpcomingWebinar/>
    <Instructor/>
    
   </main>
  );
}
