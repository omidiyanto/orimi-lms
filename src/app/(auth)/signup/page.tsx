import React, { FC } from "react";

interface SignUpPageProps {}

const SignUpPage: FC<SignUpPageProps> = ({}) => {
  return (
    <main className=" mt-24 md:mt-40 lg:mt-48 h-[55vh]">
      <section className="container flex flex-col justify-center items-center w-full h-full">
        <p className="text-xl lg:text-3xl font-bold">Signup Page</p>
        <p className="text-xl lg:text-3xl font-medium">
          Will be available soon...
        </p>
      </section>
    </main>
  );
};

export default SignUpPage;
