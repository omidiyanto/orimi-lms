"use client";
import {
  AvatarCircleProps,
  avatarList,
  courseReviews,
  ReviewsData,
} from "@/constant/homepage";
import Image from "next/image";
import React, { FC, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

interface HeroHomepageProps {}

function AvatarCircle({ avatar_url }: AvatarCircleProps) {
  return (
    <div className="overflow-hidden rounded-full w-6 h-6 -ml-1 border border-white">
      <Image
        className="w-6 h-6 object-cover object-center"
        src={avatar_url}
        width={20}
        height={20}
        quality={100}
        alt="avatar"
      />
    </div>
  );
}

const HeroHomepage: FC<HeroHomepageProps> = ({}) => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi untuk teks
      gsap.fromTo(
        textRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // Animasi untuk gambar
      gsap.fromTo(
        imageRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)", delay: 0.5 }
      );

      // Animasi untuk card setelah delay 500ms dari animasi gambar
      gsap.fromTo(
        cardRef.current,
        { y: 50, scale: 0, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "elastic.inOut(1,0.5)",
          delay: 1.75,
        }
      );
    },textRef);

    return () => ctx.revert()
  }, []);

  return (
    <section className="px-4 md:px-12 flex flex-col-reverse md:grid md:grid-cols-2  items-center overflow-hidden">
      <div ref={textRef}>
        <h2 className="font-medium text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white  2xl:w-4/5 leading-tight">
          Your journey to IT excellence starts here.
        </h2>
        <p className="text-primary text-2xl lg:text-3xl 2xl:text-3xl  mt-3 lg:mt-5">
          #learning to excellence
        </p>
        <div className="mt-4 md:mt-6 lg:mt-12">
          <Button className="lg:min-w-48 font-medium lg:text-2xl">
            Start now!
          </Button>
        </div>
      </div>
      <div className="relative top-0 w-full flex justify-end ">
        <div
          ref={imageRef}
          className="relative top-0 md:pr-12 md:pt-12 lg:pr-20 lg:pt-10"
        >
          <Image
            className="md:w-full lg:w-[34rem] h-full object-cover object-center md:flex hidden"
            src={"/homepage/hero-img.png"}
            alt="Hero IMG"
            width={545}
            height={477}
            quality={100}
          />
          <Image
            className="w-full object-cover object-center md:hidden flex rounded-2xl mb-6"
            src={"/homepage/mobile-hero.png"}
            alt="Hero IMG"
            width={500}
            height={400}
            quality={100}
          />
          <div
            ref={cardRef}
            className="hidden md:flex md:w-48 md:overflow-hidden lg:overflow-auto lg:w-64 xl:w-96 h-40 lg:h-60 xl:h-[23rem] bg-sectionBackground py-6 px-5 rounded-3xl absolute top-0 z-[1] right-0  flex-col items-start gap-4"
          >
            <div>
              <p className="text-white font-bold text-sm mb-2">
                Course Reviews
              </p>
              <div className="flex flex-row">
                {avatarList.map((item, idx) => (
                  <AvatarCircle avatar_url={item} key={idx} />
                ))}
                <div className="overflow-hidden rounded-full w-6 h-6 -ml-1 border border-white bg-gray font-bold text-xs text-center flex justify-center items-center">
                  2k+
                </div>
              </div>
            </div>
            <div className="lg:hidden text-center flex justify-center items-center w-full mt-3">
              <p className="text-white font-medium text-sm mb-2 text-center w-full">
                Prove it yourself
              </p>
            </div>
            <div className="lg:flex flex-col gap-3 hidden">
              {courseReviews.map((item: ReviewsData, idx: number) => (
                <div
                  key={idx}
                  className="w-full flex flex-row items-start gap-2"
                >
                  <div>
                    <div className="overflow-hidden rounded-full w-6 h-6 border border-white">
                      <Image
                        className="w-6 h-6 rounded-full object-cover object-center"
                        src={item.avatar_url}
                        width={20}
                        height={20}
                        quality={100}
                        alt="avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">
                      <p className="font-medium text-xs text-white">
                        {item.name}
                      </p>
                      <p className="text-gray text-xs">{item.position}</p>
                    </div>
                    <div className="text-gray text-xs">{item.review}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHomepage;
