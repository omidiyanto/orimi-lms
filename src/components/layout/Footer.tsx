import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-sectionBackground">
      <div className="px-4 md:px-12 p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
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
            </Link>
            <div className="flex flex-col gap-2 mt-3">
              <p className="font-medium text-xl">Orimi</p>
              <p className="text-primary">#lead you to excellence</p>
              <p className="mt-5 lg:mt-10">Tanjungpinang, Kepulauan Riau</p>
              <Link href={"mailto:orimi@gmail.com"}>
                orimi@gmail.com
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 uppercase text-white font-medium text-lg">
                ORIMI
              </h2>
              <ul className="text-white font-normal">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Career
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Help and Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:orimi@gmail.com"
                    className="hover:underline"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 uppercase text-white font-medium text-lg">
                Legal
              </h2>
              <ul className="text-white font-normal">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 uppercase text-white font-medium text-lg">
                Courses
              </h2>
              <ul className="text-white font-normal">
                <li className="mb-4">
                  <Link
                    href="/course?language=javascript"
                    className="hover:underline "
                  >
                    Javascript
                  </Link>
                </li>

                <li className="mb-4">
                  <Link
                    href="/course?language=python"
                    className="hover:underline "
                  >
                    Python
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/course?language=go" className="hover:underline ">
                    Go
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/course?language=redhat"
                    className="hover:underline "
                  >
                    Red Hat
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/course?language=redhat"
                    className="hover:underline "
                  >
                    Docker
                  </Link>
                </li>
                <li>
                  <Link
                    href="/course?language=docker"
                    className="hover:underline "
                  >
                    Docker
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link href="/" className="hover:underline">
              Orimi™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex gap-5 mt-4 sm:justify-center sm:mt-0">
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <GitHubLogoIcon className="w-6 h-6" />
              <span className="sr-only">Github page</span>
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <InstagramLogoIcon className="w-6 h-6" />
              <span className="sr-only">Instagram page</span>
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
