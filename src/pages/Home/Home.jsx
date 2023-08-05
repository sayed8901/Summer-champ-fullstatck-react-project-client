import AnimatedSection from "../../components/AOS-Animate/AnimatedSection";
import useTitle from "../../hooks/useTitle";
import BannerSlider from "./Banners";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import OurHeros from "./OurHeros";
import ImprovementStrategy from "./ImprovementStrategy";

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
        <PopularInstructors></PopularInstructors>
      </AnimatedSection>
      <AnimatedSection>
        <ImprovementStrategy></ImprovementStrategy>
      </AnimatedSection>
      <AnimatedSection>
        <OurHeros></OurHeros>
      </AnimatedSection>
    </div>
  );
};

export default Home;
