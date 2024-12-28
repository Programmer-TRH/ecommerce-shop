"use client"
import AboutUs from "@/Icons List/AboutUs";
import CartIcon from "@/Icons List/CartIcon";
import HomeIcon from "@/Icons List/HomeIcon";
import ProfileIcon from "@/Icons List/ProfileIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


export default function MobileNavBar() {

  const pathname = usePathname()

  return (
    <div className="md:hidden flex items-center justify-between text-lg fixed bottom-0 left-0 z-99 bg-primary-white w-full shadow shadow-primary-black/50 transition-all duration-200 ease-in-out *:grid *:grid-rows-[1fr,auto] *:place-content-center *:active:bg-secondary-red *:place-items-center *:px-button-inline *:py-button-block *:w-24 *:h-16 **:font-semibold **:text-base">

        <Link href="/" className={`${pathname === "/" ? "bg-secondary-red" : "bg-primary-white"}`}>
          <HomeIcon className="size-6.5 -mb-0.75 " />
          <p>Home</p>
        </Link>

        <Link href="/about" className={`${pathname === "/about" ? "bg-secondary-red" : "bg-primary-white"}`}>
          <AboutUs className="size-6.75 -mb-0.5" />
          <p>About</p>
        </Link>
        
        <Link href="/cart" className={`${pathname === "/cart" ? "bg-secondary-red" : "bg-primary-white"}`}>
          <CartIcon className="size-7.5 -mb-1" />
          <p>Cart</p>
        </Link>
        
       <button>
       <div>
          <ProfileIcon className="size-8.5 -mb-1" />
        </div>
        <p>Profile</p>
       </button>
        
    </div>
  );
}
