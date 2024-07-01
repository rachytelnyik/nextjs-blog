import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="m-auto max-w-screen-md mb-4">
      <header className="flex items-center justify-between py-4">
        <h1 className="text-xl font-medium">Kronos Realm</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
