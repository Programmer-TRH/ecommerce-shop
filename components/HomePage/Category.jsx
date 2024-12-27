import React from "react";
import HighLightedSubtitle from "../Common/HighLightedSubtitle";
import Title from "../Common/Title";
import LeftRightScroll from "../Common/Button/LeftRightScroll";
import ViewAll from "../Common/Button/ViewAll";
import CategorieList from "./CategorieList";

export default function Category() {
  return (
       <section className="my-8">
          <HighLightedSubtitle text="Categories " />
          <div className="flex items-center justify-between mb-8">
            <Title text="Browse By Categories" />
            <LeftRightScroll />
          </div>
          <CategorieList />
          <ViewAll />
        </section>
  )
}
 