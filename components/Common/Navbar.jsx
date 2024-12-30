import SearchIcon from "@/Icons List/SearchIcon";
import React from "react";
import Input from "./Input";
import LoginProfileButton from "./Button/LoginProfileButton";
import NavItem from "./NavItem";

import RightNavItems from "./RightNavItems";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-2 gap-gap sticky top-0 left-0 z-100 bg-primary-white shadow ">
      <h1 className="text-3xl font-bold">Logo</h1>
      <NavItem />
      <div className="flex gap-3 items-center max-md:*:not-first:hidden">
        <form className="relative ">
          <Input
            type="search"
            className="pr-7 border border-line w-full "
            placeholder="What are you looking for?"
          />
          <button
            type="submit"
            className="absolute transform top-[55%] -translate-y-[50%] right-0.75 cursor-pointer hover:scale-105 transition-scale duration-200"
          >
            <SearchIcon />
          </button>
        </form>
        <RightNavItems />
        <LoginProfileButton />
      </div>
    </header>
  );
}
