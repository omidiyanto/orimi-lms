"use client";
import React, { FC, useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import VideoYoutubePlayer from "@/components/atom/VideoYoutubePlayer";
import useDisableRightClickByRef from "@/hooks/useDisableRightClickByRef";


gsap.registerPlugin(ScrollTrigger);

interface VideoTrailerCourseSectonProps {
    videoURL : string
}

const VideoTrailerCourseSecton: FC<VideoTrailerCourseSectonProps> = ({videoURL}) => {
    const videoRef = useRef<HTMLDivElement>(null);
    const [isNotFocused, setIsNotFocused] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    useDisableRightClickByRef(sectionRef)
    
    const handleVisibilityChange = useCallback((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            setIsNotFocused(!entry.isIntersecting);
        });
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(handleVisibilityChange, {
            threshold: 0.1, // 10% visibility
        });

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, [handleVisibilityChange]);

    return (
        <section ref={sectionRef} className="px-4 md:px-12 container">
            <div  ref={videoRef} className="w-full my-10 lg:my-20 h-[20rem] md:h-[25rem] lg:h-[27.5rem] xl:h-[32.5rem] lg:px-40">
                <div
                   
                    className={`overflow-hidden  transition-transform duration-300 ${
                        isNotFocused ? "bg-sectionBackground w-80 fixed bottom-5 xl:bottom-10 right-5 z-50 lg:w-72 xl:w-96 h-60 border-primary border rounded-3xl opacity-100 hidden md:flex justify-center items-center" : "bg-sectionBackground w-full h-full rounded-3xl flex justify-center items-center"
                    }`}
                >
                    <VideoYoutubePlayer url={videoURL} className="w-full h-full" autoplay />
                </div>
            </div>
        </section>
    );
};

export default VideoTrailerCourseSecton;
