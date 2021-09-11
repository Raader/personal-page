import { useContext } from "react";
import ThemeContext from "./theme_context";

export default function Brand() {
  const { accentColor } = useContext(ThemeContext);
  return (
    <div
      className={`text-3xl xl:text-4xl font-archivo uppercase`}
      style={{ color: accentColor }}
    >
      <span>r</span>
      <span>a</span>
      <span>a</span>
      <span>d</span>
      <span>e</span>
      <span>r</span>
    </div>
  );
}
