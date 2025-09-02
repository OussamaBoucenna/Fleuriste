import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import clsx from "clsx"; // optional, for merging classes

export default function HorizontalScroll({
  children,
  className = "",
  itemSpacing = "space-x-3",
}) {
  const ref = useRef(null);
  const { events } = useDraggable(ref);

  return (
    <div
      ref={ref}
      {...events}
      className={clsx(
        "flex overflow-x-scroll scrollbar-hide max-w-full cursor-grab active:cursor-grabbing",
        itemSpacing,
        className
      )}
    >
      {children}
    </div>
  );
}
