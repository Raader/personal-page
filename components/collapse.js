import { useRef } from "react";

export default function Collapse({
  collapsed,
  animationDuration = "0.3s",
  children,
  ...props
}) {
  const ref = useRef();
  return (
    <div
      ref={ref}
      style={{
        overflow: "hidden",
        maxHeight: !collapsed ? `${ref.current?.scrollHeight}px` : "0",
        transition: `max-height ${animationDuration} ease-out`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
