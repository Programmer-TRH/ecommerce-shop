import React from "react";
import HighLightedSubtitle from "../Common/HighLightedSubtitle";
import Title from "../Common/Title";
import ProductLists from "../Common/ProductLists";
import ViewAll from "../Common/Button/ViewAll";
import LeftRightScroll from "../Common/Button/LeftRightScroll";

export default function FlashSales() {
  return (
    <section className="my-8">
      <HighLightedSubtitle text="Today's " />
      <div className="flex items-center justify-between mb-8">
        <Title text="Flash Sales" />
        <LeftRightScroll />
      </div>
      <ProductLists />
      <ViewAll />
    </section>
  );
}
