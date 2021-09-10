import { MenuIcon } from "@heroicons/react/solid";
import { SunIcon } from "@heroicons/react/outline";
import Anchor from "./anchor";
import Brand from "./brand";
import { useState } from "react";
import Button from "./button";

export default function Navbar({ children }) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <nav className="w-full p-4 border-b-4 border-yellow-300">
      <div className="container mx-auto flex items-center">
        <Brand></Brand>
        <div className="mx-16 hidden md:flex md:space-x-8 text-xl">
          <Anchor href="/">Home</Anchor>
          <Anchor href="/">Projects</Anchor>
          <Anchor href="/">Articles</Anchor>
          <Anchor href="/">About</Anchor>
        </div>

        <div className="ml-auto flex space-x-4">
          <Button
            className=""
            onClick={() => document.documentElement.classList.toggle("dark")}
          >
            <SunIcon className="w-8 h-8"></SunIcon>
          </Button>
          <Button
            className="lg:hidden"
            onClick={() => setCollapsed((prev) => !prev)}
          >
            <MenuIcon className="w-8 h-8"></MenuIcon>
          </Button>
        </div>
      </div>
      {!collapsed ? (
        <div className="w-full flex flex-col space-y-2 text-xl mt-4">
          <Anchor href="/">Home</Anchor>
          <Anchor href="/">Projects</Anchor>
          <Anchor href="/">Articles</Anchor>
          <Anchor href="/">About</Anchor>
        </div>
      ) : (
        <div></div>
      )}
    </nav>
  );
}
