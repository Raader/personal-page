import Head from "next/head";
import Card from "../components/card";
import Layout from "../components/layout";
import Prose from "../components/prose";
import ThemeContext from "../components/theme_context";

export default function Home() {
  return (
    <>
      <Head>
        <title>Personal Page | Efe Ağca</title>
        <meta
          name="description"
          content="I'm a self taught full stack developer who's been coding /
              developing opens source apps and libraries myself for over 4
              years."
        ></meta>
      </Head>
      <ThemeContext.Provider value={{ accentColor: "#60A5FA" }}>
        <Layout>
          <h1 className="sr-only">Efe Ağca</h1>

          <Prose className="max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="!mt-0">
                  Hey There! I'm Efe. I make web apps and stuff.
                </h2>
                <Card className="text-blue-400">
                  I'm a self taught full stack developer who's been coding /
                  developing opens source apps and libraries myself for over 4
                  years. I love contributing to open source projects. I mainly
                  use the Javascript language.
                </Card>
              </div>
            </div>
            <div>
              <h2>Skills</h2>
              <p>
                I have various skills on both the backend and the frontend as
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
            </div>
          </Prose>
        </Layout>
      </ThemeContext.Provider>
    </>
  );
}
