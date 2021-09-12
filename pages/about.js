import ThemeContext from "../components/theme_context";
import Layout from "../components/layout";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Raader</title>
      </Head>
      <ThemeContext.Provider value={{ accentColor: "#818CF8" }}>
        <Layout></Layout>
      </ThemeContext.Provider>
    </>
  );
}
