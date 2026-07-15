import AboutusHero from "../Components/AboutusHero";
import CTA from "../Components/Cta";
import FeatureSection from "../Components/FeatureSection";
import MissionandVision from "../Components/Mission";
import OurStory from "../Components/OurStory";

function AboutUs(){
    return(
        <main>
         <AboutusHero />
         <OurStory />
         <FeatureSection />
         <MissionandVision />
         <CTA />
        </main>
       
    )
}
export default AboutUs;