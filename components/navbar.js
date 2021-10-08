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
      <div className="container mx-auto flex items-center flex-wrap">
        <Brand></Brand>
        <div className="ml-auto flex space-x-4 md:order-3">
          <LightSwitch></LightSwitch>
          <Button
            className="md:hidden"
            onClick={() => setCollapsed((prev) => !prev)}
          >
            <MenuIcon className="w-8 h-8"></MenuIcon>
          </Button>
        </div>
        <Collapse
          collapsed={collapsed}
          className="w-screen flex flex-col text-xl -mr-4 -ml-4 -mb-4 mt-4 md:w-auto md:my-0 md:mt-0 md:flex-row md:items-center md:mx-16 md:space-x-8 md:text-lg xl:text-xl md:order-2"
        >
          {navigationLinks.map((link, index) => (
            <NavLink
              href={link.href}
              icon={link.icon}
              key={`drop-nav-link-${index}`}
              selected={isOnPage(link.href)}
              className="p-2 md:p-0 odd:bg-[#ebecee] dark:odd:bg-[#151d30] md:!bg-transparent"
            >
              {link.name}
            </NavLink>
          ))}
        </Collapse>
      </div>
    </nav>
  );
}
