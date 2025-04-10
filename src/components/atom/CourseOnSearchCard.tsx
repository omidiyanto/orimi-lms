import { courseIF } from "@/constant/course";
import formatCurrencyRupiah from "@/helpers/formatCurrencyRupiah";
import { StarFilledIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { Star } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";

interface CourseOnSearchCardProps extends courseIF {
  className?: string;
}

const CourseOnSearchCard: FC<CourseOnSearchCardProps> = ({
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
        "w-64 h-[25rem] md:h-[27rem] md:w-[26rem] lg:h-[30rem] xl:w-[30rem] xl:h-[28rem] rounded-xl overflow-hidden bg-cardBackground bg-opacity-20 hover:bg-opacity-40 backdrop-blur border-[1px] border-white/30 hover:border-primary group pb-4 cursor-pointer transition-all duration-500",
        className
      )}
    >
      <div className="w-full h-2/5 overflow-hidden">
        <Image
          className="w-full h-full object-cover object-center group-hover:scale-110 group-hover:saturate-150 group-hover:brightness-110 transition-all duration-500"
          quality={100}
          src={image_url}
          alt={title}
          width={900}
          height={600}
        />
      </div>
      <div className="px-4 text-white mt-3">
        <p className="font-medium text-xl  transition-all duration-500 min-h-28 lg:min-h-32">
          {title}
        </p>

        <div className="flex flex-col md:flex-col md:items-start gap-1 mt-3">
          <p className="text-white font-medium text-base md:text-xl animate-pulse">
            {formatCurrencyRupiah(+(price - (discount / 100) * price))}
          </p>
          <p className="text-primary line-through font-medium text-base md:text-xl">
            {formatCurrencyRupiah(price)}
          </p>
        </div>

        <div className="font-normal text-base flex items-center gap-1 mt-3">
          <div className="flex flex-row gap-1 items-center">
            {Array.from({ length: rate }).map((item, idx) => (
              <StarFilledIcon key={idx} />
            ))}
          </div>
          <span className="ml-2 ">({total_reviews} reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default CourseOnSearchCard;
