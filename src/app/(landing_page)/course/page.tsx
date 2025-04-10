import FilterSectionCoursepage from "@/components/parts/Coursepage/FilterSectionCoursepage";
import React, { FC } from "react";

interface CoursePageProps {}

const CoursePage: FC<CoursePageProps> = ({}) => {
  return (
    <main className=" mt-24 md:mt-40 lg:mt-48 ">
      <FilterSectionCoursepage />
    </main>
  );
};

export default CoursePage;
