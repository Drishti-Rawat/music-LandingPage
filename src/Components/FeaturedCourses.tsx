"use client";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import courseData from "../Data/music_courses.json";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="text-2xl text-teal-600 font-bold tracking-wide uppercase ">
          FEATURED COURSES
        </h2>
        <p className="mt-6 text-6xl leading-10 font-extrabold tracking-tight text-white sm-text-4xl">
          {" "}
          Learn with the best
        </p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-10 px-10 py-7 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center ">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <img src={course.image} alt="" className="w-96 object-contain" />
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link href={`/courses/${course.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-11 text-center relative">
        <Link href="/courses">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-950 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            {" "}
            View all courses
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
