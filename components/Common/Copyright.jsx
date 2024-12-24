import CopyrightIcon from "@/Icons List/CopyrightIcon";
import React from "react";

export default function Copyright() {
  return (
    <footer className="py-2.5 text-center bg-black text-secondary-white/40 flex items-center justify-center gap-0.5 " >
      <CopyrightIcon /> <span>Copyright Programmer-TRH 2024. All rights reserved.</span>
    </footer>
  );
}
