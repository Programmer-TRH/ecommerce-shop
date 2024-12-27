import Image from "next/image";
import React from "react";
import OfferPercentTab from "./OfferPercentTab";
import QuickView from "@/Icons List/QuickView";
import Favourite from "@/Icons List/Favourite";
import FullStar from "@/Icons List/FullStar";
import HalfStar from "@/Icons List/HalfStar";
 
export default function ProductCard({ product }) {

  return (
    <div className="md:min-w-60 min-w-48 grid grid-rows-[auto_auto_1fr_auto] grid-cols-1 snap-start">
      <figure className="grid">
        <Image
          src={product.imgUrl}
          alt={product.title}
          className="bg-secondary-smoke mix-blend-darken w-full aspect-[16/14]  col-start-1 -col-end-1 row-start-1 -row-end-1 mb-3 "
        />
        <div className="flex justify-between items-start col-start-1 -col-end-1 row-start-1 -row-end-1 p-2.5 z-1">
          <OfferPercentTab percent={`${product.percent}%`} />
          <div className="*:mb-2 *:block">
            <button className="bg-primary-white hover:bg-line active:bg-line transition-all duration-200 ease-in-out rounded-full p-1.25">
              <Favourite />
            </button>
            <button className="bg-primary-white hover:bg-line rounded-full p-1.25 active:bg-line transition-all duration-200 ease-in-out">
              <QuickView />
            </button>
          </div>
        </div>
      </figure>
      <div className="grid grid-rows-subgrid row-span-4 place-content-start grid-cols-subgrid ">
        <h3>
          <span className="text-secondary-red text-base md:text-[1.125rem] font-semibold">
            ${product.newPrice}{" "}
          </span>{" "}
          <span className="text-base md:text-[1.125rem] font-semibold text-primary-black/50 ml-1">
            (<strike className="px-0.75"> ${product.oldPrice}</strike>)
          </span>
        </h3>
        <h2 className="text-lg md:text-[1.375rem] leading-7 font-semibold text-primary-black/80 pb-1.5">
          {product.title}{" "}
        </h2>

        <div className="flex items-center gap-2 pb-1">
          <div className=" gap-1 items-center inline-flex *:size-4">
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
