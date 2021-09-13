import { useContext } from "react";
import ThemeContext from "./theme_context";

export default function Card({ className, ...props }) {
  const { accentColor } = useContext(ThemeContext);
  return (
    <p
      className={`border-4 rounded-lg p-4 ${className}`}
      style={{ borderColor: accentColor }}
      {...props}
    ></p>
  );
}
