import Layout from "../../components/layout";
import ThemeContext from "../../components/theme_context";
import Head from "next/head";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Efe Ağca</title>
      </Head>
      <ThemeContext.Provider value={{ accentColor: "#34D399" }}>
        <Layout></Layout>
      </ThemeContext.Provider>
    </>
  );
}
