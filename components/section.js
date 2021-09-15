export default function Section({ className, ...props }) {
  return (
    <section className={`p-4 my-4 xl:my-8 ${className}`} {...props}></section>
  );
}
