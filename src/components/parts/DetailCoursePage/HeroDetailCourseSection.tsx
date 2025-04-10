import React, { FC } from "react";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Calendar, UsersRound } from "lucide-react";
import { creatorsIDType } from "@/constant/detail_course";
import moment from "moment";

interface HeroDetailCourseSectionProps {
  title: string;
  subtitle: string;
  students: number;
  rateStar: number;
  updatedAt: Date;
  creators: creatorsIDType[];
}

const HeroDetailCourseSection: FC<HeroDetailCourseSectionProps> = ({
  title,
  subtitle,
  students,
  rateStar,
  updatedAt,
  creators,
}) => {
  return (
    <section className="px-4 md:px-12 container">
      <div className="flex justify-center items-center flex-col gap-4">
        <h2 className="text-3xl xl:text-5xl font-medium text-center md:w-1/2">
          {title}
        </h2>
        <p className="text-sm xl:text-xl md:w-1/2 text-center">{subtitle}</p>
      </div>
      <div className="flex items-center gap-4 justify-center mt-5">
        <p className="text-sm xl:text-xl text-primary">5.0</p>
        <span className="flex items-center gap-1 text-primary">
          {Array.from({ length: rateStar }).map((_, idx) => (
            <StarFilledIcon className="w-3 h-3 md:w-auto md:h-auto" key={idx} />
          ))}
        </span>
        <p className="text-sm xl:text-xl">({students} students)</p>
      </div>
      <div className="flex flex-wrap items-center gap-4 xl:gap-10 justify-center mt-5">
        <p className="text-sm xl:text-xl flex items-center gap-1">
          <Calendar className="w-4 h-4 md:w-auto md:h-auto" />
          Last updated {moment(updatedAt).format("MMMM YYYY")}
        </p>
        <p className="text-sm xl:text-xl font-medium flex items-center justify-center gap-1 flex-wrap">
          <UsersRound className="w-4 h-4 md:w-auto md:h-auto" /> Created by{" "}
          <span className="flex flex-row items-center flex-wrap gap-1">
            {creators.map((item, idx) => (
              <span key={idx} className="text-primary underline">
                {item.name} {idx !== creators.length-1 && ", "}
              </span>
            ))}
          </span>
        </p>
      </div>
    </section>
  );
};

export default HeroDetailCourseSection;
