import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AnimatedSection = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <div data-aos="fade-up">{children}</div>;
};

export default AnimatedSection;
