import ThemeContext from "../components/theme_context";
import Layout from "../components/layout";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Efe Ağca</title>
      </Head>
      <ThemeContext.Provider value={{ accentColor: "#F87171" }}>
        <Layout></Layout>
      </ThemeContext.Provider>
    </>
  );
}
