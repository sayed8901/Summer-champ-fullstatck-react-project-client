import AnimatedSection from "../../components/AOS-Animate/AnimatedSection";
import useTitle from "../../hooks/useTitle";
import BannerSlider from "./Banners";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import OurHeros from "./OurHeros";
import ImprovementStrategy from "./ImprovementStrategy";
import Testimonials from "./Testimonials";
import CommonQNA from "./CommonQNA";
import LatestOpenings from "./LatestOpenings";
import Contact from "./Contact";

// N.B.: The routes below wrapped with <AnimatedSection> to show AOS effect.
const Home = () => {
  useTitle("Home");

  return (
    <div>
      <AnimatedSection>
        <BannerSlider></BannerSlider>
      </AnimatedSection>
      <AnimatedSection>
        <PopularClasses></PopularClasses>
      </AnimatedSection>
      <AnimatedSection>
        <LatestOpenings></LatestOpenings>
      </AnimatedSection>
      <AnimatedSection>
        <PopularInstructors></PopularInstructors>
      </AnimatedSection>
      <AnimatedSection>
        <ImprovementStrategy></ImprovementStrategy>
      </AnimatedSection>
      <AnimatedSection>
        <OurHeros></OurHeros>
      </AnimatedSection>
      <AnimatedSection>
        <Testimonials></Testimonials>
      </AnimatedSection>
      <AnimatedSection>
        <CommonQNA></CommonQNA>
      </AnimatedSection>
      <AnimatedSection>
        <Contact></Contact>
      </AnimatedSection>
    </div>
  );
};

export default Home;
