import Link from "next/link";

export default function Anchor({ children, className, ...props }) {
  return (
    <Link {...props}>
      <a
        className={`font-semibold text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition duration-100 ${className}`}
      >
        {children}
      </a>
    </Link>
  );
}
