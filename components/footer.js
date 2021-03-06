import Anchor from "./anchor";
import GithubIcon from "./icons/github_icon";
import StackOverflowIcon from "./icons/stackoveflow_icon";
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
          <div className="flex space-x-4">
            <a href="https://github.com/Raader">
              <GithubIcon className="w-5 h-5"></GithubIcon>
            </a>
            <a href="https://stackoverflow.com/users/13301648/raader">
              <StackOverflowIcon className="w-5 h-5"></StackOverflowIcon>
            </a>
          </div>
        </div>
      </Prose>
    </Section>
  );
}
