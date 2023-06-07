import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const BannerSlider = () => {
  return (
    <div className="mt-8 mb-16 h-[85vh] overflow-hidden object-cover rounded-2xl">
        <Carousel autoPlay>
      <div><img src={'https://i.ibb.co/W0B58Dj/download.jpg'} /></div>
      <div><img src={'https://i.ibb.co/vYkqZNj/download.jpg'} /></div>
      <div><img src={'https://i.ibb.co/C9pdfqk/download.jpg'} /></div>
      <div><img src={'https://i.ibb.co/pJQYhV5/download.jpg'} /></div>
      <div><img src={'https://i.ibb.co/sHW0jYV/images.jpg'} /></div>
      <div><img src={'https://i.ibb.co/h1wW2Mk/images.jpg'} /></div>
      <div><img src={'https://i.ibb.co/fHSG6v7/download.jpg'} /></div>
    </Carousel>
    </div>
  );
};

export default BannerSlider;
