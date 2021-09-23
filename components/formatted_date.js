import { useContext } from "react";
import ThemeContext from "./theme_context";

export default function FormattedDate({ children, className, ...props }) {
  const { accentColor } = useContext(ThemeContext);

  return (
    <p
      style={{ color: accentColor }}
      className={`whitespace-nowrap ${className}`}
      {...props}
    >
      {new Date(children).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
    </p>
  );
}
