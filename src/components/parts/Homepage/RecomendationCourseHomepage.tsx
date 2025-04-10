"use client";
import CourseCard from "@/components/atom/CourseCard";
import DragableFlickityCarousel from "@/components/atom/DragableFlickityCarousel";
import { courseDummy, courseIF } from "@/constant/course";
import React, { FC, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

interface RecomendationCourseHomepageProps {}

const RecomendationCourseHomepage: FC<
  RecomendationCourseHomepageProps
> = ({}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { xPercent: 200, opacity: 0 }, // Initial state
        {
          xPercent: 0,
          opacity: 1, // End state
          duration: 1.5,
          delay: 3,
          ease: "elastic.out(1.75,0.3)",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-8 lg:py-20 px-4 md:px-12 bg-[url('/homepage/course-bg-img.svg')] bg-cover bg-center bg-no-repeat overflow-hidden">
      <div ref={sectionRef}>
        <p className="text-primary text-2xl lg:text-3xl 2xl:text-3xl">
          Direkomendasikan Developer
        </p>
        <h3 className="hidden md:block font-medium text-3xl 2xl:text-4xl text-white 2xl:w-4/5 leading-tight mt-5">
          Jadi developer yang handal dengan course <br /> yang tepat untuk
          karier IT Anda.
        </h3>
        <h3 className="md:hidden font-medium text-3xl 2xl:text-4xl text-white 2xl:w-4/5 leading-tight mt-5">
          Course cocok untuk anda berkarir sebagai Developer
        </h3>
        <div className="mt-8">
          <DragableFlickityCarousel>
            {courseDummy.slice(0, 6).map((item: courseIF, idx: number) => (
              <Link href={`/course/detail/${item.slug}`}>
                <CourseCard className="mr-4" key={idx} {...item} />
              </Link>
            ))}
          </DragableFlickityCarousel>
        </div>
      </div>
    </section>
  );
};

export default RecomendationCourseHomepage;
