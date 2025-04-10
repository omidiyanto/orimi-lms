import CourseContentVideoGroupItem from "@/components/atom/CourseContentVideoGroupItem";
import { Button } from "@/components/ui/button";
import {
  courseGroupItemType,
  dummyContentCourses,
} from "@/constant/detail_course";
import formatCurrencyRupiah from "@/helpers/formatCurrencyRupiah";
import { CircleCheck, CircleX } from "lucide-react";
import React, { FC } from "react";

interface DetailCourseSectionProps {
  description: string;
  courseContent: courseGroupItemType[];
  price: number;
  discount: number;
}

const DetailCourseSection: FC<DetailCourseSectionProps> = ({
  description,
  courseContent,
  discount,
  price,
}) => {

  return (
    <section className="px-4 md:px-12 container">
      <div className="w-full flex flex-col lg:flex-row gap-4 items-start lg:mt-40 relative">
        <div className="w-full lg:w-3/4 lg:pr-14 lg:min-h-screen">
          <div>
            <h3 className="font-bold text-3xl">Description</h3>
            <div
              dangerouslySetInnerHTML={{ __html: description }}
              className="mt-4 leading-loose text-base fully-html5"
            ></div>
          </div>
          <div className="my-32">
            <h3 className="font-bold text-3xl">Course Content</h3>
            <div className="mt-4 flex flex-col w-full items-center gap-4">
              {courseContent?.map((item: courseGroupItemType, idx: number) => (
                <CourseContentVideoGroupItem
                  key={idx}
                  title={item.title}
                  contentCourses={item.contentCourses}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4 justify-center items-center min-h-80 lg:sticky lg:top-40 mt-10 lg:mt-0">
          <div className="bg-cardBackground rounded-2xl min-h-96 shadow-lg p-4 xl:p-8 flex flex-col items-start justify-start">
            <div className="pb-3 mb-3 border-b border-fullwhite w-full">
              <h2 className="font-medium text-xl">Buy Course</h2>
              <p className="font-bold text-2xl line-through text-primary animate-pulse ">
                {formatCurrencyRupiah(price)}
              </p>
              <p className="font-bold text-2xl">
                {price === 0
                  ? "Free"
                  : formatCurrencyRupiah(+(price - (discount / 100) * price))}
              </p>
              <p className="my-2">
                Dapatkan course terbaik dan mulai belajar sebagai developer
              </p>
            </div>
            <div>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  {" "}
                  <CircleCheck className="text-primary" /> Lifetime Access
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  {price !== 0 ? (
                    <CircleCheck className="text-primary" />
                  ) : (
                    <CircleX className="text-red-500" />
                  )}{" "}
                  Sertifikat
                </li>
              </ul>
            </div>
            <div className="w-full mt-8">
              <Button className="w-full">Buy Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailCourseSection;
