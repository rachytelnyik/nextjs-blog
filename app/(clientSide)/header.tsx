"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  const pathname = usePathname();

  const activeStyle =
    "hover:text-cyan-600 active:text-cyan-600 border-b-2 border-cyan-600 active:font-semibold";

  const nonActiveStyle = "hover:animate-pulse";

  const isActive = (path: string) => path === pathname;

  return (
    <div className="m-auto max-w-screen-lg mb-4">
      <header className="flex items-center justify-between py-4">
        <Link
          href={"/"}
          className="text-xl font-medium text-white hover:text-cyan-600"
        >
          Kronos Realm
        </Link>
        <nav>
          <ul className="flex space-x-4 font-bold">
            <li className="pl-6">
              <Link
                className={isActive("/blog") ? activeStyle : nonActiveStyle}
                href="/blog"
              >
                Blog
              </Link>
            </li>
            <li className="pl-6">
              <Link
                className={isActive("/projects") ? activeStyle : nonActiveStyle}
                href="/projects"
              >
                Projects
              </Link>
            </li>
            <li className="pl-6">
              <Link
                href="/contact"
                className="relative px-6 py-3 font-bold text-white rounded-lg group"
              >
                <span
                  className={`absolute inset-0 w-full h-full transition duration-300 transform ${
                    isActive("/contact")
                      ? "-translate-x-0 -translate-y-0"
                      : "-translate-x-1 -translate-y-1"
                  }  bg-cyan-600 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0`}
                ></span>
                <span
                  className={`absolute inset-0 w-full h-full transition duration-300 transform ${
                    isActive("/contact")
                      ? "-translate-x-0 -translate-y-0"
                      : "translate-x-1 translate-y-1"
                  }  bg-cyan-900 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen`}
                ></span>
                <span className={`relative`}>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
