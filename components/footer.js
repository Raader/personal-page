import Anchor from "./anchor";
import GithubIcon from "./icons/github_icon";
import Prose from "./prose";
import Section from "./section";

export default function Footer({ className, ...props }) {
  return (
    <Section
      className={`my-0 py-0 xl:my-0
     ${className}`}
      {...props}
    >
      <Prose>
        <div className="flex justify-between items-center">
          <p>© 2021 Efe Ağca</p>
          <div className="flex">
            <a href="https://github.com/Raader">
              <GithubIcon className="w-5 h-5"></GithubIcon>
            </a>
          </div>
        </div>
      </Prose>
    </Section>
  );
}
