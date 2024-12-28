import HighLightedSection from "@/components/AboutPage/HighLightedSection";
import StorySection from "@/components/AboutPage/StorySection";
import Team from "@/components/AboutPage/Team";
import FeatureCards from "@/components/Common/FeatureCards";
import HighLightedSubtitle from "@/components/Common/HighLightedSubtitle";
import Title from "@/components/Common/Title";
import React from "react";

export default function AboutPage() {
  return (
    <div>
       <section className='py-8'>
            <HighLightedSubtitle text="Story" />
            <Title text="Our Story" />
            <StorySection />
          </section>
   
      <section className='py-8'>
            <HighLightedSubtitle text="Statistics" />
            <Title text="Look At Our Statistics" />
            <HighLightedSection />
          </section>
     
      <section className='py-8'>
            <HighLightedSubtitle text="Team Member's" />
            <Title text="Our Expert Team Member's" />
            <Team />
          </section>
      
      <section className="py-8">
        <HighLightedSubtitle text="Feature" />
        <Title text="We offers" />
        <FeatureCards />
      </section>
    </div>
  );
}
