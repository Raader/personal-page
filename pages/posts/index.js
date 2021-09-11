import Layout from "../../components/layout";
import ThemeContext from "../../components/theme_context";

export default function PostsPage() {
  return (
    <ThemeContext.Provider value={{ accentColor: "#FCD34D" }}>
      <Layout></Layout>
    </ThemeContext.Provider>
  );
}
