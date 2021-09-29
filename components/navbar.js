import {
  DocumentTextIcon,
  FolderIcon,
  HomeIcon,
  IdentificationIcon,
  MailIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import Brand from "./brand";
import { useContext, useState } from "react";
import Button from "./button";
import NavLink from "./nav_link";
import ThemeContext from "./theme_context";
import { useRouter } from "next/dist/client/router";
import LightSwitch from "./light_switch";
import Collapse from "./collapse";

const navigationLinks = [
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
    href: "/articles",
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

export default function Navbar({ children }) {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(true);
  const { accentColor } = useContext(ThemeContext);

  const isOnPage = (path) =>
    router.pathname === path ||
    (path !== "/" && router.pathname.startsWith(path));
  return (
    <nav
      className={`w-full p-4 md:p-5 xl:p-6 border-b-4 mb-4 xl:mb-10`}
      style={{ borderColor: accentColor }}
    >
      <div className="container mx-auto flex items-center">
        <Brand></Brand>
        <div className="mx-16 hidden md:flex md:space-x-8 text-lg xl:text-xl">
          {navigationLinks.map((link, index) => (
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
          <LightSwitch></LightSwitch>
          <Button
            className="md:hidden"
            onClick={() => setCollapsed((prev) => !prev)}
          >
            <MenuIcon className="w-8 h-8"></MenuIcon>
          </Button>
        </div>
      </div>
      <Collapse
        collapsed={collapsed}
        className="w-screen flex flex-col text-xl -ml-4 -mb-4 mt-4"
      >
        {navigationLinks.map((link, index) => (
          <NavLink
            href={link.href}
            icon={link.icon}
            key={`drop-nav-link-${index}`}
            selected={isOnPage(link.href)}
            className="p-2 odd:bg-[#ebecee] dark:odd:bg-[#151d30]"
          >
            {link.name}
          </NavLink>
        ))}
      </Collapse>
    </nav>
  );
}
