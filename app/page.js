import BottomToTopButton from "@/components/Common/BottomToTopButton";
import AllProducts from "@/components/HomePage/AllProducts";
import BestSellingProduct from "@/components/HomePage/BestSellingProduct";
import Category from "@/components/HomePage/Category";
import CategoryBanner from "@/components/HomePage/CategoryBanner";
import Features from "@/components/HomePage/Features";
import FlashSales from "@/components/HomePage/FlashSales";
import HeroSection from "@/components/HomePage/HeroSection";

export default function Home() {
  return (
    <>
     <HeroSection />
     <FlashSales />
     <hr className="border-line" />
     <Category />
     <BestSellingProduct />
     <CategoryBanner />
     <AllProducts />
     <Features />
     <BottomToTopButton />
    </>
  );
}
