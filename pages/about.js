import ThemeContext from "../components/theme_context";
import Layout from "../components/layout";
import Head from "next/head";
import Section from "../components/section";
import Prose from "../components/prose";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Efe Ağca</title>
      </Head>
      <ThemeContext.Provider value={{ accentColor: "#FBBF24" }}>
        <Layout>
          <Section>
            <Prose>
              <h1>About Me</h1>
              <p>
                {`I'm Efe Ağca, a self taught full stack developer who's been
                coding / developing opens source apps and libraries myself for
                over 4 years.`}
              </p>
            </Prose>
          </Section>
        </Layout>
      </ThemeContext.Provider>
    </>
  );
}
