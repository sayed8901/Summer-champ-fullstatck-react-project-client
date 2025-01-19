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
      <div className="my-container">
        <AnimatedSection>
          <PopularClasses></PopularClasses>
        </AnimatedSection>
      </div>
      <div className="my-container">
        <AnimatedSection>
          <LatestOpenings></LatestOpenings>
        </AnimatedSection>
      </div>
      <div className="my-container">
        <AnimatedSection>
          <PopularInstructors></PopularInstructors>
        </AnimatedSection>
      </div>
      <div className="my-container">
        <AnimatedSection>
          <ImprovementStrategy></ImprovementStrategy>
        </AnimatedSection>
      </div>
      <div className="my-container">
        <AnimatedSection>
          <OurHeros></OurHeros>
        </AnimatedSection>
      </div>
      <div className="my-container">
        <AnimatedSection>
          <Testimonials></Testimonials>
        </AnimatedSection>
      </div>
      <div className="my-container">
        <AnimatedSection>
          <CommonQNA></CommonQNA>
        </AnimatedSection>
      </div>
      <div className="my-container">
        <AnimatedSection>
          <Contact></Contact>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Home;
