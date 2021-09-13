import Head from "next/head";
import Layout from "../components/layout";
import ThemeContext from "../components/theme_context";

export default function Home() {
  return (
    <>
      <Head>
        <title>Efe Ağca | Personal Page</title>
      </Head>
      <ThemeContext.Provider value={{ accentColor: "#60A5FA" }}>
        <Layout></Layout>
      </ThemeContext.Provider>
    </>
  );
}
