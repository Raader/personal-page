import Anchor from "./anchor";
import IconText from "./icon_text";

export default function NavLink({ href, icon, children }) {
  return (
    <Anchor href={href}>
      <IconText icon={icon}>{children}</IconText>
    </Anchor>
  );
}
