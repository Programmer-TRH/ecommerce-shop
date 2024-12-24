import CartIcon from "@/Icons List/CartIcon";
import Favourite from "@/Icons List/Favourite";
import SearchIcon from "@/Icons List/SearchIcon";
import React from "react";
import Input from "./Input";
import LoginProfileButton from "./LoginProfileButton";
import NavItem from "./NavItem";


export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-2 gap-gap ">
      <h1 className="text-3xl font-bold">Logo</h1>
      <NavItem />
      <div className="flex gap-gap items-center">
        <div className="relative ">
          <Input
            type="search"
            className="pr-7 border border-line w-full "
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
