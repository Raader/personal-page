import Head from "next/head";
import Layout from "../components/layout";
import ThemeContext from "../components/theme_context";

export default function Home() {
  return (
    <>
      <Head>
        <title>Efe Ağca | Personal Page</title>
        <meta name="description" content="I'm a self taught full stack developer who's been coding /
              developing opens source apps and libraries myself for over 4
              years."></meta>
      </Head>
      <ThemeContext.Provider value={{ accentColor: "#60A5FA" }}>
        <Layout></Layout>
      </ThemeContext.Provider>
    </>
  );
}
