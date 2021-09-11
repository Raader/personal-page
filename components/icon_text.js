export default function IconText({ children, icon, className, ...props }) {
  return (
    <div
      className={`flex items-center ${icon ? "space-x-2" : ""} ${className}`}
      {...props}
    >
      <div>{icon}</div>
      <div>{children}</div>
    </div>
  );
}
