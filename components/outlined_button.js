import { useContext } from "react";
import Button from "./button";
import ThemeContext from "./theme_context";

export default function OutlinedButton({ className, ...props }) {
  const { accentColor } = useContext(ThemeContext);
  return (
    <Button
      className={`border-2 px-4 rounded-lg ${className}`}
      style={{ borderColor: accentColor, color: accentColor }}
      {...props}
    ></Button>
  );
}
