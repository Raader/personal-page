import FormattedDate from "../../components/formatted_date";
import Layout from "../../components/layout";
import Prose from "../../components/prose";
import ThemeContext from "../../components/theme_context";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";

export default function Post({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <ThemeContext.Provider value={{ accentColor: "#FBBF24" }}>
        <Layout>
          <Prose>
            <h1>{post.title}</h1>
            <div className="-mt-8 mb-8">
              <FormattedDate>{post.date}</FormattedDate>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </Prose>
        </Layout>
      </ThemeContext.Provider>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const postIds = getAllPostIds();
  const paths = postIds.map((id) => ({ params: { id } }));

  return { paths, fallback: false };
}
