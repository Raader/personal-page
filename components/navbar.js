import {
  DocumentTextIcon,
  FolderAddIcon,
  FolderIcon,
  HomeIcon,
  IdentificationIcon,
  MailIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { SunIcon } from "@heroicons/react/outline";
import Anchor from "./anchor";
import Brand from "./brand";
import { useState } from "react";
import Button from "./button";
import IconText from "./icon_text";
import NavLink from "./nav_link";

export default function Navbar({ children }) {
  const [collapsed, setCollapsed] = useState(true);
  const links = [
    {
      name: "Home",
      href: "/",
      icon: <HomeIcon className="w-5 h-5 xl:w-6 xl:h-6"></HomeIcon>,
    },
    {
      name: "Projects",
      href: "/",
      icon: <FolderIcon className="w-5 h-5 xl:w-6 xl:h-6"></FolderIcon>,
    },
    {
      name: "Articles",
      href: "/",
      icon: (
        <DocumentTextIcon className="w-5 h-5 xl:w-6 xl:h-6"></DocumentTextIcon>
      ),
    },
    {
      name: "About",
      href: "/",
      icon: (
        <IdentificationIcon className="w-5 h-5 xl:w-6 xl:h-6"></IdentificationIcon>
      ),
    },
    {
      name: "Contact",
      href: "/",
      icon: <MailIcon className="w-5 h-5 xl:w-6 xl:h-6"></MailIcon>,
    },
  ];

  return (
    <nav className="w-full p-4 md:p-6 border-b-4 border-yellow-300">
      <div className="container mx-auto flex items-center">
        <Brand></Brand>
        <div className="mx-16 hidden md:flex md:space-x-8 text-lg xl:text-xl">
          {links.map((link, index) => (
            <NavLink
              href={link.href}
              icon={link.icon}
              key={`nav-link-${index}`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="ml-auto flex space-x-4">
          <Button
            className="block"
            onClick={() => document.documentElement.classList.toggle("dark")}
          >
            <SunIcon className="w-8 h-8"></SunIcon>
          </Button>
          <Button
            className="md:hidden"
            onClick={() => setCollapsed((prev) => !prev)}
          >
            <MenuIcon className="w-8 h-8"></MenuIcon>
          </Button>
        </div>
      </div>
      {!collapsed ? (
        <div className="w-full flex flex-col space-y-2 text-xl mt-4">
          {links.map((link, index) => (
            <NavLink
              href={link.href}
              icon={link.icon}
              key={`drop-nav-link-${index}`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </nav>
  );
}
