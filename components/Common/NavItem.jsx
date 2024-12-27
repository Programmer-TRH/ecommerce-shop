"use client";
import React from "react";
import Link from "next/link";
import { usePathname} from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavItem() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]
  return (
    <nav className="max-md:hidden flex justify-between gap-gap">
     {navItems.map((item) => (
        <Link key={item.name} href={item.path} className={cn("px-button-inline py-button-block border rounded-md border-white transition-color duration-300 hover:font-semibold", pathname === item.path ? "bg-secondary-smoke  border-line font-semibold" : "text-base")}>
            {item.name}
        </Link>
     ))}
    </nav>
  );
}
 