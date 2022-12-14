import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { sliderImage } from "./Data";

const SlideImage = () => {
  return (
    <div className="slide-container ">
      <Slide
        duration={3000}
        infinite={true}
        pauseOnHover={false}
        autoplay={true}
        canSwipe={true}
        arrows={false}
        slidesToScroll={true}
      >
        {sliderImage.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              className="h-[600px] bg-cover flex items-center"
              style={{
                backgroundImage: `linear-gradient(65.81deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 67.52%) , url(${slideImage.image})`,
              }}
            >
              <div className="flex flex-col  font-quicksand  px-[30px] md:px-[120px] ">
                <h1 className="text-white font-quicksand font-bold text-[28px] md:text-[55px]">
                  {slideImage.title}
                </h1>
                <p className="text-[#EEEEEE] font-inter w-[330px] md:w-[540px] text-[14px] md:text-[16px] ">
                  {slideImage.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default SlideImage;
