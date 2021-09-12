import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark")
      document.documentElement.classList.add("dark");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
