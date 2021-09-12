import { useContext } from "react";
import ThemeContext from "./theme_context";

export default function FormattedDate({ children, ...props }) {
  const { accentColor } = useContext(ThemeContext);

  return (
    <p style={{ color: accentColor }} {...props}>
      {new Date(children).toLocaleDateString()}
    </p>
  );
}
