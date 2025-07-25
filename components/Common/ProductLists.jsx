import React from "react";
import ProductCard from "./ProductCard";
import Product from "@/lib/ProductData";

export default function ProductLists() {
  return (
    <div className="mb-4 h-72 md:h-95 overflow-hidden w-[calc(100vw-((clamp(2rem,6vw,15rem))*2))] ">
      <div className="w-full overflow-x-scroll flex gap-4 md:gap-6 pb-30 snap-x snap-mandatory p-1 scroll-px-1">
        {Product.map(product =>
          <ProductCard key={product.id} product={product} />
        )}
      </div>
    </div>
  );
}
  