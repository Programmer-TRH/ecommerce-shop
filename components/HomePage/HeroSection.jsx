import WomensFashion from "@/Icons List/HeroIconList/WomensFashion";
import React from "react";
import Image from "next/image";
import heroIamge from "@/public/HomeImg.jpg";
import HiglightedTitle from "../Common/HiglightedTitle";
import ShopNowButton from "../Common/Button/ShopNowButton";
import Beauty from "@/Icons List/HeroIconList/Beauty";
import MensFashion from "@/Icons List/HeroIconList/MensFashion";
import Electronics from "@/Icons List/HeroIconList/Electronics";
import Lifestyles from "@/Icons List/HeroIconList/Lifestyles";
import Sports from "@/Icons List/HeroIconList/Sports";
import Baby from "@/Icons List/HeroIconList/Baby";

export default function HeroSection() {
  return (
    <section className="grid gap-1 md:grid-cols-[2fr_7fr] py-8  ">
      <div className="border-r border-line hidden md:block *:flex *:items-center *:gap-1.5 **:text-nowrap **:font-medium **:text-lg *:pb-3  ">
        <div>
          <WomensFashion className="w-5 h-4 inline-block" />
          <span>Woman's Fashion</span>
        </div>
        <div>
          <MensFashion className="size-5 inline-block" />
          <span>Men's Fashion</span>
        </div>
        <div>
          <Electronics className="size-5 inline-block" />
          <span>Electronics</span>
        </div>
        <div>
          <Lifestyles className="size-5 inline-block" />
          <span>Home & Lifestyle</span>
        </div>
        <div>
          <Sports className="size-5 inline-block" />
          <span>Sports & Outdoor</span>
        </div>
        <div>
          <Baby className="size-8 inline-block -ml-1.25" />
          <span className="-ml-1.5">Baby's & Toys</span>
        </div>
        <div>
          <Beauty className="h-5 w-4.5 inline-block"/>
          <span>Health & Beauty</span>
        </div>
      </div>
      <div className=" grid grid-cols-[1fr_1fr] items-center  bg-primary-black text-secondary-white px-3 py-2 sm:px-8 sm:py-4 md:ml-8 ">
        <div className="py-button-block px-button-inline">
          <p className="mb-1"> Latest Smart Phone</p>
          <HiglightedTitle className="md:mb-4 lg:mb-6 mb-2" title={`Up to 10% off Voucher`} />
          <ShopNowButton />
        </div>
        <Image src={heroIamge} alt="Hero Img" className=" aspect-[10/8] md:aspect-[10/6]" />
      </div>
    </section>
  );
} 
