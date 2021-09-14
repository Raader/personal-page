import Link from "next/link";
import { useContext } from "react";
import ThemeContext from "./theme_context";

export default function ColoredLink({ href, ...props }) {
  const { accentColor } = useContext(ThemeContext);
  return (
    <Link href={href}>
      <a style={{ color: accentColor }} {...props}></a>
    </Link>
  );
}
