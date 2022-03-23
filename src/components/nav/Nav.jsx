import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import "./nav.css";

const navs = [
  {
    href: "#",
    icon: <AiOutlineHome />,
  },
  {
    href: "#about",
    icon: <AiOutlineUser />,
  },
  {
    href: "#experiences",
    icon: <BiBook />,
  },
  {
    href: "#services",
    icon: <RiServiceLine />,
  },
  {
    href: "#contact",
    icon: <BiMessageSquareDetail />,
  },
];
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      {navs.map((nav) => (
        <a
          href={nav.href}
          className={activeNav === nav.href ? "active" : ""}
          onClick={() => setActiveNav(nav.href)}
          key={nav.href}
        >
          {nav.icon}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
