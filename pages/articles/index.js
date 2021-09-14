import Layout from "../../components/layout";
import Prose from "../../components/prose";
import ThemeContext from "../../components/theme_context";
import { getAllPosts } from "../../lib/posts";
import Head from "next/head";
import ArticleLink from "../../components/article_link";

export default function Articles({ posts }) {
  return (
    <>
      <Head>
        <title>Articles | Efe Ağca</title>
      </Head>
      <ThemeContext.Provider value={{ accentColor: "#60A5FA" }}>
        <Layout>
          <Prose>
            <h1>Articles</h1>
            <div className="-mt-8">
              {posts.map((post, index) => (
                <ArticleLink key={`post-${index}`} article={post}></ArticleLink>
              ))}
            </div>
          </Prose>
        </Layout>
      </ThemeContext.Provider>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return { props: { posts } };
}
