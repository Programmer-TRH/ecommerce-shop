import CartIcon from "@/Icons List/CartIcon";
import Favourite from "@/Icons List/Favourite";
import SearchIcon from "@/Icons List/SearchIcon";
import React from "react";
import Input from "./Input";
import LoginProfileButton from "./LoginProfileButton";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-2 ">
      <h1 className="text-3xl font-bold">Logo</h1>
      <nav className="max-md:hidden flex justify-between gap-gap *:px-gap">
        <a href="#">Home</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
      </nav>
      <div className="flex gap-gap items-center">
        <div className="relative">
          <Input
            type="search"
            className="pr-7 border border-line "
            placeholder="What are you looking for?"
          />

          <button className="absolute transform top-[55%] -translate-y-[50%] right-0.75 cursor-pointer hover:scale-105 transition-scale duration-200">
            <SearchIcon />
          </button>
        </div>
        <Favourite />
        <CartIcon />
        <LoginProfileButton />
      </div>
    </header>
  );
}
