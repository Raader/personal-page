import Head from "next/head";
import Layout from "../components/layout";
import ThemeContext from "../components/theme_context";

export default function Home() {
  return (
    <>
      <Head>
        <title>Raader</title>
      </Head>
      <ThemeContext.Provider value={{ accentColor: "#60A5FA" }}>
        <Layout></Layout>
      </ThemeContext.Provider>
    </>
  );
}
