import { useContext } from "react";
import Anchor from "./anchor";
import ColoredLink from "./colored_link";
import FormattedDate from "./formatted_date";
import ThemeContext from "./theme_context";

export default function ArticleLink({ article, ...props }) {
  const { accentColor } = useContext(ThemeContext);

  return (
    <div {...props}>
      <div className="flex items-baseline flex-col md:flex-row md:justify-between">
        <Anchor href={`/articles/${article.id}`}>
          <h3 className="!mb-0">{article.title}</h3>
        </Anchor>
        <FormattedDate className="!m-0">{article.date}</FormattedDate>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: article.content }}
        className="-my-4 "
      ></div>

      <ColoredLink
        href={`/articles/${article.id}`}
        style={{ color: accentColor }}
      >
        Read More
      </ColoredLink>
    </div>
  );
}
