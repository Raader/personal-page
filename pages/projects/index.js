import Layout from "../../components/layout";
import ThemeContext from "../../components/theme_context";
import Head from "next/head";
import Section from "../../components/section";
import Prose from "../../components/prose";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Efe Ağca</title>
        <meta
          name="description"
          content="The list of my personal projects."
        ></meta>
      </Head>
      <ThemeContext.Provider value={{ accentColor: "#34D399" }}>
        <Layout>
          <Section>
            <Prose>
              <h1>My Projects</h1>
              <p>
                These are all my personal side projects i made throughout my
                learning journey and they are all open source.
              </p>
            </Prose>
          </Section>
        </Layout>
      </ThemeContext.Provider>
    </>
  );
}
