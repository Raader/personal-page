import Link from "next/link";

export default function Anchor({ children, href, className, ...props }) {
  return (
    <Link href={href}>
      <a
        className={`font-semibold text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition duration-200 ${className}`}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
}
