import React, { FC } from "react";

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = ({}) => {
  return (
    <main className=" mt-24 md:mt-40 lg:mt-48 h-[55vh]">
      <section className="container flex flex-col justify-center items-center w-full h-full">
        <p className="text-xl lg:text-3xl font-bold">About us</p>
        <p className="text-xl lg:text-3xl font-medium">
          Will be available soon...
        </p>
      </section>
    </main>
  );
};

export default AboutPage;
