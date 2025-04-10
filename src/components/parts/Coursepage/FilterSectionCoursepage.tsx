"use client";
import CourseCard from "@/components/atom/CourseCard";
import CourseOnSearchCard from "@/components/atom/CourseOnSearchCard";
import {
  categoryCourse,
  categoryCourseType,
  courseDummy,
  courseIF,
  languageCourse,
  languageCourseType,
  sortCourse,
  sortCourseType,
} from "@/constant/course";
import axios from "axios";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";

interface FilterSectionCoursepageProps {}

const FilterSectionCoursepage: FC<FilterSectionCoursepageProps> = ({}) => {
  const [filterVisible, setFilterVisible] = useState(true);
  const [dataTemplate, setDataTemplate] = useState([]);
  const [categoryTemplate, setCategoryTemplate] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<string[]>([]);
  const [keyword, setKeyword] = useState<string>("");
  const [priceStart, setPriceStart] = useState("");
  const [priceEnd, setPriceEnd] = useState("");
  const [sortBy, setSortBy] = useState<string>("");
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  const updateURLParams = () => {
    const params = new URLSearchParams();

    if (keyword) params.set("keyword", keyword);
    if (selectedCategory.length)
      params.set("category", selectedCategory.join(","));
    if (selectedStyle.length) params.set("style", selectedStyle.join(","));
    if (priceStart) params.set("price_start", priceStart);
    if (priceEnd) params.set("price_end", priceEnd);
    if (sortBy) params.set("sort", sortBy);

    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`
    );
  };

  useEffect(() => {
    const fetchCategoryData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://sore-backend.vercel.app/api/v1/category_template`
        );
        setCategoryTemplate(response.data.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryData();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("keyword")) setKeyword(params.get("keyword") || "");
    if (params.get("category"))
      setSelectedCategory(params.get("category")!.split(","));
    if (params.get("style")) setSelectedStyle(params.get("style")!.split(","));
    if (params.get("price_start"))
      setPriceStart(params.get("price_start") || "");
    if (params.get("price_end")) setPriceEnd(params.get("price_end") || "");
    if (params.get("sort")) setSortBy(params.get("sort") || "");
  }, []);

  useEffect(() => {
    // Update URL parameters when state changes
    updateURLParams();

    // Clear the previous timeout if it exists
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    // Set a new timeout to fetch data after 500 ms
    const timeout = setTimeout(async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://sore-backend.vercel.app/api/v1/templates?category=${selectedCategory}&style=${selectedStyle}&keyword=${keyword}&price_start=${priceStart}&price_end=${priceEnd}${
            sortBy && `&sort=${sortBy}`
          }`
        );
        console.log(response);
        setDataTemplate(response.data.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }, 500);

    // Store the timeout in state
    setDebounceTimeout(timeout);

    // Cleanup timeout on component unmount or when dependencies change
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [selectedCategory, selectedStyle, keyword, priceStart, priceEnd, sortBy]);

  const onClickCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory((prevSelectedItems) => {
      if (prevSelectedItems.includes(e.target.value)) {
        // Jika item sudah ada di array, hapus item tersebut
        return prevSelectedItems.filter((i) => i !== e.target.value);
      } else {
        // Jika item belum ada di array, tambahkan item tersebut
        return [...prevSelectedItems, e.target.value];
      }
    });
  };

  const onClickStyle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedStyle((prevSelectedItems) => {
      if (prevSelectedItems.includes(e.target.value)) {
        // Jika item sudah ada di array, hapus item tersebut
        return prevSelectedItems.filter((i) => i !== e.target.value);
      } else {
        // Jika item belum ada di array, tambahkan item tersebut
        return [...prevSelectedItems, e.target.value];
      }
    });
  };

  const onClickSortBy = (value: string) => {
    if (sortBy === value) {
      setSortBy(""); // Hapus pilihan jika diklik dua kali
    } else {
      setSortBy(value); // Set pilihan baru
    }
  };

  return (
    <section className="px-4 md:px-12 mt-8 md:my-8">
      <div className="flex flex-col gap-5 mb-8">
        <div className="flex flex-col gap-y-5 lg:flex-row">
          <div>
            <p className="text-primary text-xl">Select Our Course</p>
            <h2 className="text-3xl font-medium">
              Mulai ambil course yang anda minati
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-row relative top-0">
        {/* Filter Section */}
        <div className="w-1/5 hidden lg:block relative ">
          <div className="sticky top-40">
            <h2 className="text-2xl font-medium mb-4 ">Filter</h2>
            <input
              type="text"
              placeholder="Search course you want to learn"
              className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-full text-black"
              value={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            />
            <div>
              <h3 className="text-xl text-textBlack font-bold py-4">
                Category
              </h3>
              <div className="flex flex-col gap-y-2 text-textDarkGray mb-4">
                {categoryCourse?.map(
                  (item: categoryCourseType, idx: number) => (
                    <label key={idx}>
                      <input
                        value={item.id}
                        type="checkbox"
                        className="mr-2 w-4 h-4"
                        onChange={onClickCategory}
                        checked={selectedCategory.includes(item.id)}
                      />{" "}
                      {item.category_name}
                    </label>
                  )
                )}
              </div>
            </div>
            <div>
              <h3 className="text-xl text-textBlack font-bold py-4">
                Languange
              </h3>
              <div className="flex flex-col gap-y-2 text-textDarkGray mb-4">
                {languageCourse?.map(
                  (item: languageCourseType, idx: number) => (
                    <label key={idx}>
                      <input
                        onChange={onClickStyle}
                        value={item.language_name}
                        type="checkbox"
                        className="mr-2"
                        checked={selectedStyle.includes(item.language_name)}
                      />
                      {item.language_name}
                    </label>
                  )
                )}
              </div>
            </div>
            <div>
              <h3 className="text-xl text-textBlack font-bold py-4">Sort by</h3>
              <div className="flex flex-col gap-y-2 text-textDarkGray mb-4">
                {sortCourse?.map((item: sortCourseType, idx: number) => (
                  <label key={idx}>
                    <input
                      type="radio"
                      name="sort"
                      className="mr-2"
                      value={item.sort_name}
                      checked={sortBy === item.sort_name}
                      onClick={() => {
                        onClickSortBy(item.sort_name);
                      }}
                    />
                    {item.sort_name}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:pl-8 lg:w-4/5  mt-8">
          {/* Render filtered templates */}
          {loading ? (
            <div className={`w-full  transition-all duration-300 ease-in-out`}>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 md:gap-x-5 gap-y-5 lg:gap-y-14 `}
              >
                {Array.from({ length: 12 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-4 h-48 md:h-72 lg:h-80 rounded-xl w-full text-bgGray bg-cardBackground animate-pulse duration-1000 ease-in-out transition-all"
                  ></div>
                ))}
              </div>
            </div>
          ) : dataTemplate?.length === 0 ? (
            <div className={`w-full  transition-all duration-300 ease-in-out`}>
              <p className="text-center mt-5">No template found</p>
            </div>
          ) : (
            <div className={`w-full  transition-all duration-300 ease-in-out`}>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 md:gap-x-5 gap-y-5 lg:gap-y-14 `}
              >
                {[...courseDummy, ...courseDummy]?.map((item: courseIF) => (
                  <Link href={`/course/detail/${item.slug}`}>
                    <CourseOnSearchCard
                      className="w-full  md:w-full   lg:w-full  xl:w-full "
                      {...item}
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FilterSectionCoursepage;
