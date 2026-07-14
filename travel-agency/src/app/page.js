import CTA from "./Components/Cta";
import FeaturedPackage from "./Components/FeaturedPackageSection";
import FeatureSection from "./Components/FeatureSection";
import Hero from "./Components/Hero";
import PopularDestination from "./Components/PopularDestination";
import TestimonialSection from "./Components/TestimonailSection";

export default function Home() {
  return (
   <main>
    <Hero />
    <FeatureSection />
    <PopularDestination />
    <FeaturedPackage />
    <TestimonialSection />
    <CTA />
    </main> 
    
  );
}
