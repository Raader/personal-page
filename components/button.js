export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`appearance-none p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
