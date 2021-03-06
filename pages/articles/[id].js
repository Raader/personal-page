import FormattedDate from "../../components/formatted_date";
import Layout from "../../components/layout";
import Prose from "../../components/prose";
import ThemeContext from "../../components/theme_context";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Section from "../../components/section";

export default function Article({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} | Efe Ağca</title>
        <meta
          name="description"
          content={post.preview?.replace(/<p>|<\/p>/g, "")}
        ></meta>
        <meta name="author" content="Efe Ağca"></meta>
      </Head>
      <ThemeContext.Provider value={{ accentColor: "#60A5FA" }}>
        <Layout>
          <Section>
            <Prose>
              <h1>{post.title}</h1>
              <div className="-mt-8 mb-8">
                <FormattedDate long>{post.date}</FormattedDate>
              </div>
              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </Prose>
          </Section>
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
