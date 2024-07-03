import React from "react";
import SocialIcons from "./socialIcons";

type Props = {};

const Footer = (props: Props) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" m-auto max-w-screen-lg mt-8 border-t-2 border-cyan-600 grid grid-cols-12 pt-8 pb-8">
      <div className="col-span-6">
        <SocialIcons />
      </div>
      <div className="col-span-6 text-right">
        © {currentYear} Kronos Realm. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
