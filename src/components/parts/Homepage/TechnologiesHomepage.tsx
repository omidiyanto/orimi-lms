"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DockerIconSVG from "@/assets/techIcons/DockerIconSVG";
import ExpressJSIconSVG from "@/assets/techIcons/ExpressJSIconSVG";
import GoIconSVG from "@/assets/techIcons/GoIconSVG";
import JavascriptIconSVG from "@/assets/techIcons/JavascriptIconSVG";
import LaravelIconSVG from "@/assets/techIcons/LaravelIconSVG";
import NextJSIconSVG from "@/assets/techIcons/NextJSIconSVG";
import PythonIconSVG from "@/assets/techIcons/PythonIconSVG";
import ReactJSIconSVG from "@/assets/techIcons/ReactJSIconSVG";
import RedhatIconSVG from "@/assets/techIcons/RedhatIconSVG";
import TypescriptIconSVG from "@/assets/techIcons/TypescriptIconSVG";
import React, { FC } from "react";

interface TechnologiesHomepageProps {}

const TechnologiesHomepage: FC<TechnologiesHomepageProps> = ({}) => {
  const textRef1 = useRef<HTMLParagraphElement>(null)
  const textRef2 = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    // Menginisialisasi konteks GSAP
    const ctx = gsap.context(() => {
      const icons = document.querySelectorAll(".tech-icon");

      icons.forEach((icon) => {
        gsap.fromTo(
          icon,
          {
            opacity: 0,
          },
          { opacity: 1, duration: 1, delay: 4 }
        );
        gsap.to(icon, {
          y: gsap.utils.random(-20, 20),
          x: gsap.utils.random(-20, 20),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          duration: gsap.utils.random(1, 2),
        });
      });

      // Animasi teks menggunakan fromTo
      gsap.fromTo(
        textRef1.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 2.5, delay: 4.5}
      );
      gsap.fromTo(
        textRef2.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 3.5, delay: 5}
      );
    });

    // Cleanup animasi saat komponen unmount
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-8 lg:py-20 px-4 md:px-12 relative h-screen flex justify-center items-center flex-col overflow-hidden ">
      <div className="absolute inset-0 -z-[1] bg-[url('/homepage/pattern.svg')] bg-cover bg-center bg-no-repeat w-full h-full opacity-35"></div>
      <p ref={textRef1} className="text-primary text-2xl lg:text-3xl 2xl:text-3xl -mt-44 text-center">
        Mastering Modern Technologies
      </p>
      <h3 ref={textRef2} className="font-medium text-3xl 2xl:text-4xl text-white 2xl:w-4/5 leading-tight mt-5 flex items-center justify-center flex-col text-center text-secondary">
        Achieve your professional dreams with <br /> courses tailored for top
        tech roles.
      </h3>

      <div className="absolute w-full h-full -z-[1] select-none">
        <div className="w-10 h-10 md:w-20 md:h-20 rounded-sm md:rounded-3xl overflow-hidden absolute top-20 left-5 xl:top-44 xl:left-44 tech-icon">
          <RedhatIconSVG className="w-10 h-10 md:w-20 md:h-20" />
        </div>
        <div className="w-10 h-10 md:w-20 md:h-20 rounded-sm md:rounded-3xl overflow-hidden absolute top-20 left-20 md:left-1/4 xl:top-64 xl:left-96 tech-icon">
          <ExpressJSIconSVG className="w-10 h-10 md:w-20 md:h-20" />
        </div>
        <div className="w-10 h-10 md:w-20 md:h-20 rounded-sm md:rounded-3xl overflow-hidden absolute top-20 left-[9.5rem] md:left-[48%] xl:top-[30rem] xl:left-72 tech-icon">
          <DockerIconSVG className="w-10 h-10 md:w-20 md:h-20" />
        </div>
        <div className="w-10 h-10 md:w-20 md:h-20 rounded-sm md:rounded-3xl overflow-hidden absolute top-20 right-20 md:right-[20%] xl:top-auto xl:right-auto xl:bottom-64 xl:left-36 tech-icon">
          <PythonIconSVG className="w-10 h-10 md:w-20 md:h-20" />
        </div>
        <div className="w-10 h-10 md:w-20 md:h-20 rounded-sm md:rounded-3xl overflow-hidden absolute top-20 right-5 xl:right-auto xl:top-auto  xl:bottom-48 xl:left-[26rem] tech-icon">
          <GoIconSVG className="w-10 h-10 md:w-20 md:h-20" />
        </div>
        {/* kanan */}
        <div className="w-10 h-10 md:w-20 md:h-20 rounded-sm md:rounded-3xl overflow-hidden absolute bottom-64 left-5 xl:left-auto xl:bottom-auto xl:top-44 xl:right-44 tech-icon">
          <ReactJSIconSVG className="w-10 h-10 md:w-20 md:h-20" />
        </div>
        <div className="w-10 h-10 md:w-20 md:h-20 rounded-sm md:rounded-3xl overflow-hidden absolute bottom-64 left-20 md:left-1/4 xl:left-auto xl:bottom-auto xl:top-64 xl:right-96 tech-icon">
          <JavascriptIconSVG className="w-10 h-10 md:w-20 md:h-20" />
        </div>
        <div className="w-10 h-10 md:w-20 md:h-20 rounded-sm md:rounded-3xl overflow-hidden absolute bottom-64 left-36 md:left-[48%] xl:bottom-auto xl:left-auto xl:top-[30rem] xl:right-72 tech-icon">
          <LaravelIconSVG className="w-10 h-10 md:w-20 md:h-20" />
        </div>
        <div className="w-10 h-10 md:w-20 md:h-20 rounded-sm md:rounded-3xl overflow-hidden absolute bottom-64 right-20 md:right-[20%] xl:bottom-64 xl:right-36 tech-icon">
          <NextJSIconSVG className="w-10 h-10 md:w-20 md:h-20" />
        </div>
        <div className="w-10 h-10 md:w-20 md:h-20 rounded-sm md:rounded-3xl overflow-hidden absolute bottom-64 right-5 xl:bottom-48 xl:right-[26rem] tech-icon">
          <TypescriptIconSVG className="w-10 h-10 md:w-20 md:h-20" />
        </div>
      </div>
    </section>
  );
};

export default TechnologiesHomepage;
