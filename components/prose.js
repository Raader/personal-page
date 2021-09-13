export default function Prose({ className, ...props }) {
  return (
    <div
      className={`prose md:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-dark mx-auto ${className}`}
      {...props}
    ></div>
  );
}
