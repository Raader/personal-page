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
import { useContext, useState } from "react";
import Button from "./button";
import IconText from "./icon_text";
import NavLink from "./nav_link";
import ThemeContext from "./theme_context";
import { useRouter } from "next/dist/client/router";

export default function Navbar({ children }) {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(true);
  const { accentColor } = useContext(ThemeContext);
  const links = [
    {
      name: "Home",
      href: "/",
      icon: <HomeIcon className="w-5 h-5 xl:w-6 xl:h-6"></HomeIcon>,
    },
    {
      name: "Projects",
      href: "/projects",
      icon: <FolderIcon className="w-5 h-5 xl:w-6 xl:h-6"></FolderIcon>,
    },
    {
      name: "Articles",
      href: "/posts",
      icon: (
        <DocumentTextIcon className="w-5 h-5 xl:w-6 xl:h-6"></DocumentTextIcon>
      ),
    },
    {
      name: "About",
      href: "/about",
      icon: (
        <IdentificationIcon className="w-5 h-5 xl:w-6 xl:h-6"></IdentificationIcon>
      ),
    },
    {
      name: "Contact",
      href: "/contact",
      icon: <MailIcon className="w-5 h-5 xl:w-6 xl:h-6"></MailIcon>,
    },
  ];

  const isOnPage = (path) =>
    router.pathname === path ||
    (path !== "/" && router.pathname.startsWith(path));
  return (
    <nav
      className={`w-full p-4 md:p-5 xl:p-6 border-b-4`}
      style={{ borderColor: accentColor }}
    >
      <div className="container mx-auto flex items-center">
        <Brand></Brand>
        <div className="mx-16 hidden md:flex md:space-x-8 text-lg xl:text-xl">
          {links.map((link, index) => (
            <NavLink
              href={link.href}
              icon={link.icon}
              key={`nav-link-${index}`}
              selected={isOnPage(link.href)}
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
        <div className="w-screen flex flex-col text-xl -ml-4 -mb-4 mt-4">
          {links.map((link, index) => (
            <NavLink
              href={link.href}
              icon={link.icon}
              key={`drop-nav-link-${index}`}
              selected={isOnPage(link.href)}
              className="p-2 odd:bg-[#ebecee] dark:odd:bg-[#131b2c]"
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
