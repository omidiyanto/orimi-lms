import { courseIF } from "@/constant/course";
import formatCurrencyRupiah from "@/helpers/formatCurrencyRupiah";
import { StarFilledIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { Star } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";

interface CourseCardProps extends courseIF {
  className?: string;
}

const CourseCard: FC<CourseCardProps> = ({
  discount,
  image_url,
  price,
  rate,
  title,
  total_reviews,
  className,
}) => {
  return (
    <div
      className={clsx(
        "w-64 h-[30rem] md:h-96 md:w-[26rem] xl:w-[30rem] xl:h-96 rounded-3xl overflow-hidden bg-cardBackground bg-opacity-20 hover:bg-opacity-40 backdrop-blur border-[1px] border-white/30 hover:border-primary group pb-4 cursor-pointer transition-all duration-500",
        className
      )}
    >
      <div className="w-full h-1/2 overflow-hidden">
        <Image
          className="w-full h-full object-cover object-center group-hover:scale-110 group-hover:saturate-150 group-hover:brightness-110 transition-all duration-500"
          quality={100}
          src={image_url}
          alt={title}
          width={900}
          height={600}
        />
      </div>
      <div className="px-4 text-white mt-3 h-full">
        <p className="font-semibold text-xl line-clamp-3 md:line-clamp-2 group-hover:line-clamp-3 transition-all duration-500 md:min-h-20">
          {title}
        </p>

        <div className="flex flex-col md:flex-row md:items-center gap-3 mt-5">
          <p className="text-white font-bold text-xl md:text-2xl animate-pulse">
            {formatCurrencyRupiah(+(price - (discount / 100) * price))}
          </p>
          <p className="text-primary line-through font-medium text-base md:text-xl">
            {formatCurrencyRupiah(price)}
          </p>
        </div>

        <div className="font-medium text-base flex items-center gap-1 mt-5">
          <div className="flex flex-row gap-1 items-center">
            {Array.from({ length: rate }).map((item, idx) => (
              <StarFilledIcon key={idx} />
            ))}
          </div>
          <span className="ml-2">({total_reviews} reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
