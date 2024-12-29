import { cn } from "@/lib/utils";
import React from "react";

export default function SubmitButton({ className="" }) {
  return (
    <button
      className={cn(
        "block py-button-block px-button-inline rounded-md bg-secondary-smoke outline-hidden mt-1 text-black border border-line", className
      )}
    >
      Submit
    </button>
  );
}
