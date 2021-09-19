import ThemeContext from "../components/theme_context";
import Layout from "../components/layout";
import Head from "next/head";
import Section from "../components/section";
import Prose from "../components/prose";
import OutlinedButton from "../components/outlined_button";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Efe Ağca</title>
      </Head>
      <ThemeContext.Provider value={{ accentColor: "#A78BFA" }}>
        <Layout>
          <Section>
            <Prose>
              <h1 className="!mb-0">Contact Me</h1>
              <p>Feel free to contact me for whatever reason.</p>
              <form
                className="space-y-4 max-w-lg"
                action="https://formspree.io/f/xayabgnl"
                method="POST"
              >
                <label className="block">
                  Full Name
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    className="block w-full rounded-lg border-transparent focus:ring-[#A78BFA] focus:border-[#A78BFA] dark:bg-black"
                  ></input>
                </label>
                <label className="block">
                  Email
                  <input
                    name="_replyto"
                    type="email"
                    placeholder="Your Email"
                    className="block w-full rounded-lg border-transparent focus:ring-[#A78BFA] focus:border-[#A78BFA] dark:bg-black"
                  ></input>
                </label>
                <label className="block">
                  Message
                  <textarea
                    name="message"
                    className="block w-full rounded-lg border-transparent focus:ring-[#A78BFA] focus:border-[#A78BFA] dark:bg-black"
                    rows="5"
                  ></textarea>
                </label>
                <OutlinedButton type="submit">Send Message</OutlinedButton>
              </form>
            </Prose>
          </Section>
        </Layout>
      </ThemeContext.Provider>
    </>
  );
}
