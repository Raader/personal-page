import { useContext } from "react";
import ThemeContext from "./theme_context";

export default function FormattedDate({ children, className, long, ...props }) {
  const { accentColor } = useContext(ThemeContext);

  return (
    <p
      style={{ color: accentColor }}
      className={`whitespace-nowrap ${className}`}
      {...props}
    >
      {new Date(children).toLocaleDateString(
        "en-US",
        long
          ? { weekday: "long", year: "numeric", month: "long", day: "numeric" }
          : {
              year: "numeric",
              month: "short",
              day: "numeric",
            }
      )}
    </p>
  );
}
