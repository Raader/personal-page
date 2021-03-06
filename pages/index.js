import Head from "next/head";
import ArticleLink from "../components/article_link";
import Card from "../components/card";
import ColoredLink from "../components/colored_link";
import Layout from "../components/layout";
import OutlinedButton from "../components/outlined_button";
import Prose from "../components/prose";
import Section from "../components/section";
import ThemeContext from "../components/theme_context";
import { getAllPostPreviews } from "../lib/posts";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Efe Ağca | Personal Page, Portfolio And Blog</title>
        <meta
          name="description"
          content="I'm Efe Ağca, a self taught full stack developer who's been coding /
              developing opens source apps and libraries myself for over 4
              years."
        ></meta>
      </Head>
      <ThemeContext.Provider value={{ accentColor: "#F87171" }}>
        <Layout>
          <Section>
            <Prose>
              <h1 className="">
                {`Hey There! I'm Efe Ağca. I make web apps and stuff.`}
              </h1>
              <p>
                {`I'm Efe Ağca, a self taught full stack developer who's been coding /
                developing opens source apps and libraries myself for over 4
                years. I love contributing to open source projects. I mainly use
                the Javascript language.`}
              </p>
              <ColoredLink href="/about">Learn More About Me</ColoredLink>
            </Prose>
          </Section>

          <Section className="bg-[#ebecee] dark:bg-[#151d30]">
            <Prose>
              <h2 className="!my-0">Recent Articles</h2>
              <div className="flex flex-col">
                {posts.slice(0, 2).map((article, index) => (
                  <ArticleLink
                    article={article}
                    key={`article-${index}`}
                  ></ArticleLink>
                ))}
              </div>
            </Prose>
          </Section>
          <Section>
            <Prose>
              <h2>Skills</h2>
              <p>
                I have various skills on both the backend and the frontend as a
                full stack web developer. Here is a list of them.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 items-start">
                <div>
                  <h3 className="!mt-0">Backend</h3>
                  <ul>
                    <li>JavaScript</li>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>WebSockets</li>
                    <li>GraphQL</li>
                  </ul>
                </div>
                <div>
                  <h3 className="!mt-0">Frontend</h3>
                  <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>Sass</li>
                    <li>Material UI</li>
                  </ul>
                </div>
              </div>
              <ColoredLink href="/projects">
                Take A Look At My Projects
              </ColoredLink>
            </Prose>
          </Section>
        </Layout>
      </ThemeContext.Provider>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostPreviews();

  return { props: { posts } };
}
