export default function Prose({ className, ...props }) {
  return (
    <div
      className={`prose md:prose-lg xl:prose-xl dark:prose-dark mx-auto`}
      {...props}
    ></div>
  );
}
