"use client";
import { companiesHomepageList } from "@/constant/homepage";
import { gsap } from "gsap";
import Image from "next/image";
import React, { FC, useState } from "react";
import Marquee from "react-fast-marquee";

interface CompaniesHomepageProps {}

const CompaniesHomepage: FC<CompaniesHomepageProps> = () => {
  const [items, setItems] = useState(companiesHomepageList);
  return (
    <section className="mt-12 w-full bg-sectionBackground text-gray py-10 overflow-hidden show-animation">
      <h3 className="px-4 font-medium text-center text-xl md:text-2xl">
        Trusted by companies and millions of learners around the world
      </h3>
      <div className="overflow-hidden mt-6">
        <Marquee className="" autoFill>
          {items.map((item: string, idx: number) => (
            <div key={idx} className="ml-6">
              <Image
                className="w-full h-auto aspect-video"
                src={item}
                width={150}
                height={37}
                quality={100}
                alt={`company-${idx + 1}`}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default CompaniesHomepage;
