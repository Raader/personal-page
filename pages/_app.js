import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { useEffect } from "react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark")
      document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-7V3TZ07N9L"
      />
      <Script
        id="analytics"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-7V3TZ07N9L');`,
        }}
      ></Script>
    </>
  );
}

export default MyApp;
