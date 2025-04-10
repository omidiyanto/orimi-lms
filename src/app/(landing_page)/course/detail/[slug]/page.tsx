import DetailCourseSection from "@/components/parts/DetailCoursePage/DetailCourseSection";
import HeroDetailCourseSection from "@/components/parts/DetailCoursePage/HeroDetailCourseSection";
import VideoTrailerCourseSecton from "@/components/parts/DetailCoursePage/VideoTrailerCourseSection";
import { dummyDetailCourse } from "@/constant/detail_course";
import React, { FC } from "react";

interface DetailCoursePageProps {}

const DetailCoursePage: FC<DetailCoursePageProps> = ({}) => {
  const course = dummyDetailCourse;
  return (
    <main className=" mt-24 md:mt-40 lg:mt-48 min-h-screen">
      <HeroDetailCourseSection
        title={course.title}
        subtitle={course.subtitle}
        rateStar={course.rateStar}
        students={course.students}
        updatedAt={course.updatedAt}
        creators={course.creatorsID}
      />
      <VideoTrailerCourseSecton videoURL={course.trailerVideoURL} />
      <DetailCourseSection description={course.description} discount={course.discount} price={course.price} courseContent={course.content} />
    </main>
  );
};

export default DetailCoursePage;
