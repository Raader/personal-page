import ThemeContext from "../components/theme_context";
import Layout from "../components/layout";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Efe Ağca</title>
      </Head>
      <ThemeContext.Provider value={{ accentColor: "#FBBF24" }}>
        <Layout></Layout>
      </ThemeContext.Provider>
    </>
  );
}
