import Image from "next/image";
import React from "react";
import OfferPercentTab from "./OfferPercentTab";
import QuickView from "@/Icons List/QuickView";
import Favourite from "@/Icons List/Favourite";
import FullStar from "@/Icons List/FullStar";
import HalfStar from "@/Icons List/HalfStar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import AddToCartButton from "./Button/AddToCartButton";
import Delete from "@/Icons List/Delete";

export default function ProductCard({ wishList = "", product, className = "" }) {

  return (
    <div className={cn("grid min-w-[9.5rem] md:min-w-[16rem] grid-rows-[auto_auto_1fr_auto] grid-cols-1 snap-start shadow", className)}>
      <div className="relative mb-2 md:mb-3 group">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.imgUrl}
            alt={product.title}
            className="w-full aspect-[16/14]"
          />
        </Link>
        <OfferPercentTab percent={`${product.percent}%`} className="m-1.5 md:m-2.5 z-1 absolute top-0 left-0" />

        <div className="*:md:mb-2 *:mb-1 flex flex-col p-1.5 md:p-2.5 z-1 absolute top-0 right-0">
          {wishList ?
            (<button className="bg-primary-black/5 hover:bg-line rounded-full p-0.75 md:p-1.25 active:bg-line transition-all duration-200 ease-in-out shadow shadow-primary-black/20">
              <Delete className="size-5.5 md:size-6 mt-0.25" />
            </button>) :
            (<>
              <button className="bg-primary-black/5 hover:bg-line rounded-full p-0.75 md:p-1.25 active:bg-line transition-all duration-200 ease-in-out shadow shadow-primary-black/20">
                <Favourite className="size-5.75 md:size-6 mt-0.25" />
              </button>
              <Link href={`/product/${1}`} className="bg-primary-black/5 hover:bg-line rounded-full p-0.75 md:p-1.25 active:bg-line transition-all duration-200 ease-in-out hidden md:block shadow shadow-primary-black/20">
                <QuickView className="size-6" />
              </Link>
            </>)
          }
        </div>
      </div>
      <div className="grid grid-rows-subgrid row-span-4 place-content-start grid-cols-subgrid px-1.5 md:px-3 pb-1 md:pb-1.5 ">
        <div className="mb-0.5 flex items-center justify-between gap-gap">
          <div>
            <span className="text-secondary-red text-[0.875rem] md:text-[1.125rem] font-semibold">
              ${product.newPrice}{" "}
            </span>{" "}
            <span className="text-[0.875rem] md:text-[1.125rem] font-semibold text-primary-black/50 ml-1">
              (<strike className="px-0.75"> ${product.oldPrice}</strike>)
            </span>
          </div>
          <AddToCartButton />
        </div>
        <h2 className="text-[1.0625rem] md:text-[1.375rem] leading-5.5 md:leading-7 font-semibold text-primary-black/80 pb-1.5">
          {product.title}{" "}
        </h2>

        <div className="flex items-center gap-2 pb-1">
          <div className=" gap-0.5 md:gap-1 items-center inline-flex *:size-4">
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <HalfStar />
          </div>
          <span>
            ({product.ratingCount})
          </span>
        </div>
        {product?.sales && <p>
          <span>Total Sales:</span> <span>{product.sales}</span>
        </p>}
      </div>
    </div>
  );
}
