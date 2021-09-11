import { useContext } from "react";
import Anchor from "./anchor";
import IconText from "./icon_text";
import ThemeContext from "./theme_context";

export default function NavLink({ href, icon, children, selected, ...props }) {
  const { accentColor } = useContext(ThemeContext);
  return (
    <Anchor href={href} {...props}>
      <IconText icon={icon} style={selected ? { color: accentColor } : {}}>
        {children}
      </IconText>
    </Anchor>
  );
}
