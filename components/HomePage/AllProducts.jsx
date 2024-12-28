import React from "react";
import HighLightedSubtitle from "../Common/HighLightedSubtitle";
import LeftRightScroll from "../Common/Button/LeftRightScroll";
import Title from "../Common/Title";
import ViewAll from "../Common/Button/ViewAll";
import Product from "@/lib/ProductData";
import ProductCard from "../Common/ProductCard";

export default function AllProducts() {
  return (
    <section>
      <HighLightedSubtitle text="Browse" />
      <div className="flex items-center justify-between mb-4 md:mb-8
      ">
        <Title text="All Products" />
        <LeftRightScroll />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-4 md:gap-6 mb-4 md:mb-8">
        {Product.map(product =>
          <ProductCard key={product.id} product={product} />
        )}
      </div>
      <ViewAll />
    </section>
  );
}
