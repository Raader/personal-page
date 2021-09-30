import { useRef } from "react";

export default function Collapse({
  collapsed,
  animationDuration = "0.3s",
  children,
  style,
  className,
  ...props
}) {
  const ref = useRef();
  return (
    <div
      ref={ref}
      className={`${collapsed ? "max-h-0 md:max-h-full" : ""} ${className}`}
      style={{
        overflow: "hidden",
        maxHeight: !collapsed ? `${ref.current?.scrollHeight}px` : undefined,
        transition: `max-height ${animationDuration} ease-out`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
