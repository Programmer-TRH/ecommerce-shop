import CartBag from "@/Icons List/CartBag";
import MallBag from "@/Icons List/MallBag";
import MoneyBagIcon from "@/Icons List/MoneyBagIcon";
import MoneyHandIcon from "@/Icons List/MoneyHandIcon";
import SaleIcon from "@/Icons List/SaleIcon";
import Shop from "@/Icons List/Shop";
import ShoppingBag from "@/Icons List/ShoppingBag";
import React from "react";

export default function HighLightedSection() {
  return (
    <section className="my-8 flex flex-wrap items-center justify-center *:shrink gap-8 *:grid *:place-items-center">
      <div className=" bg-secondary-smoke p-4 w-52 border-1 border-line rounded-sm">
        <div className="**:fill-primary-white bg-primary-black/30 rounded-full p-2 ">
          <ShoppingBag className="bg-primary-black rounded-full p-2 size-12 md:size-13" />
        </div>
        <h2 className="text-[1.375rem] font-bold mt-1">
          45.5k
        </h2>
        <p className="font-medium text-sm text-primary-black/80">
          Customer active in our site
        </p>
      </div>
      <div className="bg-secondary-red p-4  w-52 border-1 border-line rounded-sm">
        <div className="**:fill-primary-white bg-primary-white/30 rounded-full p-2 ">
          <SaleIcon className="bg-primary-white rounded-full p-2 size-12 md:size-13" />
        </div>
        <h2 className="text-[1.375rem] font-bold text-primary-white mt-1">
          33k
        </h2>
        <p className="font-medium text-sm text-primary-white/80">
          Monthly Product Sale
        </p>
      </div>
      <div className="bg-secondary-smoke p-4 w-52 border-1 border-line rounded-sm">
        <div className="**:fill-primary-white bg-primary-black/30 rounded-full p-2 ">
          <MoneyBagIcon className="bg-primary-black rounded-full p-2 size-12 md:size-13" />
        </div>
        <h2 className="text-[1.375rem] font-bold mt-1">
          25k
        </h2>
        <p className="font-medium text-sm text-primary-black/80">
          Anual gross sale in our site
        </p>
      </div>
    </section>
  );
}
