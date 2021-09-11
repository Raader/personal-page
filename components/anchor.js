import Link from "next/link";

export default function Anchor({ children, className, ...props }) {
  return (
    <Link {...props}>
      <a
        className={`font-semibold text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition duration-200 ${className}`}
      >
        {children}
      </a>
    </Link>
  );
}
