import { useContext } from "react";
import Anchor from "../../components/anchor";
import Button from "../../components/button";
import FormattedDate from "../../components/formatted_date";
import Layout from "../../components/layout";
import Prose from "../../components/prose";
import ThemeContext from "../../components/theme_context";
import { getAllPosts } from "../../lib/posts";
import Head from "next/head";

export default function PostsPage({ posts }) {
  const { accentColor } = useContext(ThemeContext);
  return (
    <>
      <Head>
        <title>Articles | Raader</title>
      </Head>
      <ThemeContext.Provider value={{ accentColor: "#FBBF24" }}>
        <Layout>
          <Prose>
            <h1>Articles</h1>
            <div className="-mt-8">
              {posts.map((post, index) => (
                <div key={`post-${index}`}>
                  <div className="flex items-baseline flex-nowrap justify-between">
                    <Anchor href={`/posts/${post.id}`}>
                      <h3>{post.title}</h3>
                    </Anchor>
                    <FormattedDate>{post.date}</FormattedDate>
                  </div>

                  <div
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    className="-my-4 "
                  ></div>

                  <Anchor
                    href={`/posts/${post.id}`}
                    style={{ color: accentColor }}
                  >
                    Read More
                  </Anchor>
                </div>
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
