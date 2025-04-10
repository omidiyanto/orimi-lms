"use client";
import { contentCourseGroupType } from "@/constant/detail_course";
import {
  formatSecondsToMinutes,
  formatSecondsToTime,
} from "@/helpers/formatSeconds"; // Pastikan format function untuk jam dan menit sudah benar
import { BookText, ChevronDown, MonitorPlay, VideoIcon } from "lucide-react";
import React, { FC, useRef, useState } from "react";
import { Badge } from "../ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import VideoYoutubePlayer from "./VideoYoutubePlayer";

interface CourseContentVideoGroupItemProps {
  title: string;
  contentCourses: contentCourseGroupType[];
}

const CourseContentVideoGroupItem: FC<CourseContentVideoGroupItemProps> = ({
  title,
  contentCourses,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const totalLectures = contentCourses?.length;
  const totalLecturesDuration = contentCourses?.reduce((acc, item) => {
    return acc + item?.durationSeconds;
  }, 0);

  return (
    <div
      className={`w-full border bg-cardBackground ${
        isOpen ? "rounded-2xl" : "rounded-2xl"
      } px-4 py-3 transition-all transform ease-in-out duration-200`}
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={handleOpen}
      >
        <div className="flex items-center gap-3">
          <span
            className={`transition-transform transform ease-in-out duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <ChevronDown />
          </span>
          <span>{title}</span>
        </div>
        <div>
          <span>{totalLectures} videos - </span>
          <span>{formatSecondsToMinutes(totalLecturesDuration)}</span>
        </div>
      </div>

      <div
        ref={contentRef}
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? 20 : 0,
        }}
        className={`flex flex-col gap-4 overflow-hidden transition-all transform ease-in-out duration-500`}
      >
        {contentCourses?.map((item: contentCourseGroupType, idx: number) => (
          <div key={idx} className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
              <span>
                {item.isVideo ? (
                  <MonitorPlay className="w-4 h-4" />
                ) : (
                  <BookText className="w-4 h-4" />
                )}
              </span>
              <span>{item.title}</span>
            </div>
            <div className="grid grid-cols-2 ">
              {item.isAblePreview ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <Badge className="cursor-pointer">Preview</Badge>
                  </DialogTrigger>
                  <DialogContent className="">
                    <DialogHeader>
                      <DialogTitle>
                        <div className="font-normal mb-2">Course preview</div>
                        <div className="font-medium mb-4">{item.title}</div>
                      </DialogTitle>
                      <DialogDescription>
                        <div className="w-full h-96">
                          {item.isVideo && (
                            <VideoYoutubePlayer
                              className="w-full h-full"
                              url={item.linkVideoPreview!!}
                              autoplay
                            />
                          )}
                          <div
                            className="fully-html5"
                            dangerouslySetInnerHTML={{
                              __html: item.contentIfNotVideo!!,
                            }}
                          ></div>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ) : (
                <span></span>
              )}
              <span className="flex justify-end">
                {formatSecondsToTime(item.durationSeconds)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContentVideoGroupItem;
