import { discount } from "./discount";

export interface courseIF {
  image_url: string;
  title: string;
  price: number;
  discount: number;
  rate: number;
  total_reviews: number;
  slug: string;
}

export type categoryCourseType = {
  id: string;
  category_name: string;
};
export type languageCourseType = {
  language_name: string;
};

export type sortCourseType = {
  sort_name: string;
};

export const courseDummy: courseIF[] = [
  {
    slug: "website-dengan-vuejs-3-dari-pemula-hingga-mahir",
    title: "Website dengan VueJS 3 dari pemula hingga mahir",
    discount: discount,
    price: 75000,
    image_url:
      "https://buildwithangga.com/storage/assets/thumbnail/165629/Thumbnail.png",
    rate: 5,
    total_reviews: 2234,
  },
  {
    slug: "website-dengan-vuejs-3-dari-pemula-hingga-mahir",
    title: "ReactJS dasar, cocok untuk pemula",
    discount: discount,
    price: 125000,
    image_url:
      "https://buildwithangga.com/storage/assets/thumbnails/thumbnail%20kelas%20react%20javascript%20web%20development%20buildwith%20angga.png",
    rate: 5,
    total_reviews: 3217,
  },
  {
    slug: "website-dengan-vuejs-3-dari-pemula-hingga-mahir",
    title:
      "Fullstack NextJS Developer: Membuat website therapy kesehatan psikologis",
    discount: discount,
    price: 200000,
    image_url:
      "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/66a5f5e6db33b065e407a9dc_bba1d0ce-5199-41d1-9769-a3a20c17e5d1.jpeg",
    rate: 5,
    total_reviews: 1259,
  },
  {
    slug: "website-dengan-vuejs-3-dari-pemula-hingga-mahir",
    title: "Website dengan VueJS 3 dari pemula hingga mahir",
    discount: discount,
    price: 75000,
    image_url:
      "https://buildwithangga.com/storage/assets/thumbnail/165629/Thumbnail.png",
    rate: 5,
    total_reviews: 2234,
  },
  {
    slug: "website-dengan-vuejs-3-dari-pemula-hingga-mahir",
    title: "Website dengan VueJS 3 dari pemula hingga mahir",
    discount: discount,
    price: 75000,
    image_url:
      "https://buildwithangga.com/storage/assets/thumbnail/165629/Thumbnail.png",
    rate: 5,
    total_reviews: 2234,
  },
];

export const categoryCourse: categoryCourseType[] = [
  {
    id: "1",
    category_name: "DevOps Development",
  },
  {
    id: "2",
    category_name: "Frontend Development",
  },
  {
    id: "3",
    category_name: "Backend Development",
  },
  {
    id: "4",
    category_name: "Machine Learning Development",
  },
];
export const languageCourse: languageCourseType[] = [
  {
    language_name: "Go",
  },
  {
    language_name: "Javascript",
  },
  {
    language_name: "Python",
  },
  {
    language_name: "PHP",
  },
];

export const sortCourse: sortCourseType[] = [
  { sort_name: "Free" },
  { sort_name: "Premium" },
];
