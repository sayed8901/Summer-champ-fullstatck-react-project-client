import AnimatedSection from "../../components/AOS-Animate/AnimatedSection";
import useTitle from "../../hooks/useTitle";
import BannerSlider from "./Banners";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";


// N.B.: The routes below wrapped with <AnimatedSection> to show AOS effect.
const Home = () => {
    useTitle('Home')
    return (
        <div>
            <AnimatedSection><BannerSlider></BannerSlider></AnimatedSection>
            <AnimatedSection><PopularInstructors></PopularInstructors></AnimatedSection>
            <AnimatedSection><PopularClasses></PopularClasses></AnimatedSection>
        </div>
    );
};

export default Home;