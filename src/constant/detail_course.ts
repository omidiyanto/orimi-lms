import { discount } from "./discount";

export type contentCourseGroupType = {
  title: string;
  linkVideoPreview: string | null | undefined;
  isAblePreview: boolean;
  durationSeconds: number;
  isVideo: boolean;
  contentIfNotVideo: string | null | undefined;
};

export type courseGroupItemType = {
  title: string;
  contentCourses: contentCourseGroupType[];
};

export type creatorsIDType = {
  _id: string;
  name: string;
  email: string;
};

export type detailCourseType = {
  title: string;
  slug: string;
  subtitle: string;
  rateStar: number;
  students: number;
  updatedAt: Date;
  creatorsID: creatorsIDType[];
  trailerVideoURL: string;
  price: number;
  discount: number;
  description: string;
  content: courseGroupItemType[];
};

// dummy data

export const dummyContentCourseItems: contentCourseGroupType[] = [
  {
    title: "Welcome to the course!",
    isVideo: true,
    isAblePreview: true,
    linkVideoPreview: "https://www.youtube.com/watch?v=3KnHgNT7Dd4",
    contentIfNotVideo: null,
    durationSeconds: 65,
  },
  {
    title: "Introduction of the course!",
    isVideo: true,
    isAblePreview: true,
    linkVideoPreview: "https://www.youtube.com/watch?v=g6dlVsiHvJg",
    contentIfNotVideo: null,
    durationSeconds: 75,
  },
  {
    title: "Setup Requirements",
    isVideo: false,
    isAblePreview: true,
    linkVideoPreview: null,
    contentIfNotVideo: "<p><strong>Requirements : </strong><br/>VSCODE</p>",
    durationSeconds: 92,
  },
  {
    title: "Join Group Chat",
    isVideo: false,
    isAblePreview: false,
    linkVideoPreview: null,
    contentIfNotVideo: "<p><strong>Requirements : </strong><br/>VSCODE</p>",
    durationSeconds: 57,
  },
];

export const dummyContentCourses: courseGroupItemType[] = [
  {
    title: "Getting Started",
    contentCourses: dummyContentCourseItems,
  },
  {
    title: "Javascript Basic",
    contentCourses: dummyContentCourseItems,
  },
];

export const dummyDetailCourse: detailCourseType = {
  title: "The Complete Python Bootcamp From Zero to Hero in Python",
  slug: "the-complete-python-bootcamp-from-zero-to-hero-in-python",
  creatorsID: [
    { _id: "6215215", email: "oriastan999@gmail.com", name: "O. Riastanjung" },
    { _id: "6215216", email: "omidiyanto7@gmail.com", name: "O. Midiyanto" },
  ],
  subtitle:
    "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
  rateStar: 5,
  students: 2650,
  updatedAt: new Date(),
  trailerVideoURL: "https://youtu.be/j5D06xj7WN0",
  description: `Become a Python Programmer and learn one of employer's most
              requested skills of 2023! This is the most comprehensive, yet
              straight-forward, course for the Python programming language on
              Udemy! Whether you have never programmed before, already know
              basic syntax, or want to learn about the advanced features of
              Python, this course is for you! In this course we will teach you
              Python 3. With over 100 lectures and more than 21 hours of video
              this comprehensive course leaves no stone unturned! This course
              includes quizzes, tests, coding exercises and homework assignments
              as well as 3 major projects to create a Python project portfolio!
              Learn how to use Python for real-world tasks, such as working with
              PDF Files, sending emails, reading Excel files, Scraping websites
              for informations, working with image files, and much more! This
              course will teach you Python in a practical manner, with every
              lecture comes a full coding screencast and a corresponding code
              notebook! Learn in whatever manner is best for you! We will start
              by helping you get Python installed on your computer, regardless
              of your operating system, whether its Linux, MacOS, or Windows,
              we've got you covered.
              <br />
              We cover a wide variety of topics, including:
              <br />
              <ul>
                <li>Command Line Basics Installing</li>
                <li>Python Running Python Code</li>
                <li>
                  Strings Lists Dictionaries Tuples Sets Number Data Types
                </li>
                <li>Print Formatting</li>
                <li>Functions Scope args/kwargs Built-in Functions</li>
                <li>
                  Debugging and Error Handling Modules External Modules Object
                </li>
                <li>Oriented Programming Inheritance Polymorphism File I/O</li>
                <li>Advanced Methods Unit Tests and much more!</li>
              </ul>
              <br />
              You will get lifetime access to over 100 lectures plus
              corresponding Notebooks for the lectures! This course comes with a
              30 day money back guarantee! If you are not satisfied in any way,
              you'll get your money back. Plus you will keep access to the
              Notebooks as a thank you for trying out the course! So what are
              you waiting for? Learn Python in a way that will advance your
              career and increase your knowledge, all in a fun and practical
              way!`,
  discount: discount,
  price: 799000,
  content: dummyContentCourses,
};
