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
    <div className="m-auto max-w-screen-md mb-4">
      <header className="flex items-center justify-between py-4">
        <Link href={"/"} className="text-xl font-medium">
          Kronos Realm
        </Link>
        <nav>
          <ul className="flex space-x-4 font-bold">
            <li>
              <Link
                className={isActive("/blog") ? activeStyle : nonActiveStyle}
                href="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className={isActive("/projects") ? activeStyle : nonActiveStyle}
                href="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className={isActive("/about") ? activeStyle : nonActiveStyle}
                href="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
