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
              <p>
                {`I started my programming journey with python like most people
                do. After learning the basics i moved on to learn c# for game
                development but after trying to develop games for half a year, i
                decided game development just wasn't for me. When i looked into
                web development, I was immediately hooked. I loved the idea that
                everything was cross platform. I continued to learn about web
                development. I prefer learning with making, so i made dozens of
                web apps along the way. Most of them i never published but they
                all thought me things i couldn't learn by reading books or
                watching tutorials. In web development there is astounding
                amount of things to learn and i still learn something new
                everyday.`}
              </p>
            </Prose>
          </Section>
        </Layout>
      </ThemeContext.Provider>
    </>
  );
}
