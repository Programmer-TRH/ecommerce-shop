import React from "react";
import HighLightedSubtitle from "../Common/HighLightedSubtitle";
import Title from "../Common/Title";
import ProductLists from "../Common/ProductLists";
import ViewAll from "../Common/Button/ViewAll";
import LeftRightScroll from "../Common/Button/LeftRightScroll";

export default function BestSellingProduct() {
  return (
    <section className="my-8">
      <HighLightedSubtitle text="This Month's " />
      <div className="flex items-center justify-between mb-4 md:mb-8">
        <Title text="Best products" />
        <LeftRightScroll />
      </div>
      <ProductLists />
      <ViewAll />
    </section>
  );
}
