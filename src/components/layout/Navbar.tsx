"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Effect to add or remove no-scroll class on body
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMobileMenuOpen]);
  return (
    <header className="px-4 md:px-12 py-4 md:py-7 fixed top-0 z-50 w-full">
      <nav className="bg-fullwhite text-white w-full px-4 md:px-6 py-3 md:py-7 rounded-3xl bg-opacity-5 backdrop-blur-sm flex flex-row items-center justify-between">
        <h1>
          <Link
            href={"/"}
            className="cursor-pointer flex items-center gap-2 text-white font-bold text-xl"
          >
            <Image
              alt="Orimi logo"
              quality={100}
              src={"/orimi-logo.svg"}
              width={56}
              height={55}
              className="w-12 md:w-14 h-12 md:h-14"
            />
            <span className="hidden md:block">Orimi</span>
          </Link>
        </h1>
        <div className="hidden lg:flex items-center gap-20">
          <ul className="flex items-center gap-20">
            <li className="border-b border-b-transparent hover:border-b-white duration-300 ease-in-out">
              <Link href={"/course"}>Course</Link>
            </li>
            <li className="border-b border-b-transparent hover:border-b-white duration-300 ease-in-out">
              <Link href={"/roadmap"}>Roadmap</Link>
            </li>
            <li className="border-b border-b-transparent hover:border-b-white duration-300 ease-in-out">
              <Link href={"/about"}>About us</Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <Link href={"/signin"}>
            <Button variant={"secondary"}>Sign in</Button>
          </Link>
          <Link href={"/signup"}>
            <Button variant={"default"}>Sign up</Button>
          </Link>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            className="bg-primary text-black rounded-xl p-2.5"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu />
          </button>
        </div>
      </nav>

      {/* mobile */}
      <div
        className={`lg:hidden px-4 md:px-12 py-4 md:py-7 fixed top-0 right-0 w-full  h-screen bg-background z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full py-4 flex justify-end">
          <button
            className="bg-primary text-black rounded-xl p-2.5"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <X />
          </button>
        </div>
        {/* Add your mobile menu items here */}
        <ul className="flex flex-col items-start gap-14 mt-10 text-white">
          <li
            className="w-full text-2xl hover:underline font-medium "
            onClick={() => setMobileMenuOpen(false)}
          >
            <Link
              href={"/"}
              className="cursor-pointer flex items-center gap-2 text-white font-bold"
            >
              Home
            </Link>
          </li>
          <li
            className="w-full text-2xl hover:underline font-medium "
            onClick={() => setMobileMenuOpen(false)}
          >
            <Link href={"/course"}>Course</Link>
          </li>
          <li
            className="w-full text-2xl hover:underline font-medium "
            onClick={() => setMobileMenuOpen(false)}
          >
            <Link href={"/roadmap"}>Roadmap</Link>
          </li>
          <li
            className="w-full text-2xl hover:underline font-medium "
            onClick={() => setMobileMenuOpen(false)}
          >
            <Link href={"/about"}>About us</Link>
          </li>
          <li
            className="flex flex-col gap-8 w-full text-2xl hover:underline font-medium "
            onClick={() => setMobileMenuOpen(false)}
          >
            <Button
              className="rounded-xl w-full text-2xl"
              variant={"secondary"}
            >
              Sign in
            </Button>
            <Button className="rounded-xl w-full text-2xl" variant={"default"}>
              Sign up
            </Button>
          </li>
          <li
            className="w-full text-2xl hover:underline font-medium "
            onClick={() => setMobileMenuOpen(false)}
          ></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
