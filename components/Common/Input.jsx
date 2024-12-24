import { cn } from "@/lib/utils";
import React from "react";

export default function Input({ id = "", className = "", ...props }) {
  return (
    <input
      id={id}
      {...props}
      className={cn(
        "py-button-block px-button-inline rounded-md bg-secondary-smoke outline-hidden mt-1 text-black border border-line ",
        className
      )}
    />
  );
}
 