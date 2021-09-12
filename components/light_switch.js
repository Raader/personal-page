import { SunIcon } from "@heroicons/react/outline";
import Button from "./button";

function toggleDarkTheme() {
  if (!document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  } else {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
  }
}

export default function LightSwitch(props) {
  return (
    <Button className="block" onClick={toggleDarkTheme} {...props}>
      <SunIcon className="w-8 h-8"></SunIcon>
    </Button>
  );
}
