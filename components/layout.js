import Navbar from "./navbar";
import { useState } from "react";

export default function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <Navbar></Navbar>
      <main className="mx-auto">{children}</main>
    </div>
  );
}
