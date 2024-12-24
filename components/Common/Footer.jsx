import React from "react";
import Input from "./Input";
import SendIcon from "@/Icons List/SendIcon";
import SubTitle from "./SubTitle";

export default function Footer() {
  return (
    <section className="py-12 bg-black text-secondary-white grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-4 w-full">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Logo</h1>
        <SubTitle subtitle="Subscribe" />
        <div className="relative w-4/5">
          <Input
            type="text"
            placeholder="Enter your email"
            id="subscribe"
            label="Subscribe"
            className="bg-black text-secondary-white pr-7 w-full"
          />
          <button className="absolute transform top-[55%] -translate-y-[50%] right-0.5 cursor-pointer hover:scale-105 transition-scale duration-200 ">
            <SendIcon className="fill-secondary-white" />
          </button>
        </div>
      </div>
      <div>
        <SubTitle subtitle="Support" />
        <p>RN Road , Dhaka, Bangladesh.</p>
        <p>support@gmail.com</p>
        <p>+01723525234</p>
      </div>
      <div>
        <SubTitle subtitle="Account" />
        <p>My Account</p>
        <p>Login / Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>
      </div>
      <div>
        <SubTitle subtitle="Quick Link" />
         <p>Privacy Policy</p>
         <p>Terms of Use</p>
         <p>FAQ</p>
         <p>Contact</p>
      </div>
    </section>
  );
}
