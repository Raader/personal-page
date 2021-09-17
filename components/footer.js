import Prose from "./prose";
import Section from "./section";

export default function Footer({ className, ...props }) {
  return (
    <Section className={`my-0 py-0 xl:my-0 ${className}`} {...props}>
      <Prose>
        <div className="flex">
          <p>© 2021 Efe Ağca</p>
          <div className="flex"></div>
        </div>
      </Prose>
    </Section>
  );
}
