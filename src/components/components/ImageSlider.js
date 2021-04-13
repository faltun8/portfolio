import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useGlobalContext } from "../context";

const SliderData = [
  {
    image: "/blog/11.png",
  },
  {
    image: "/blog/12.png",
  },
  {
    image: "/blog/13.png",
  },
  {
    image: "/blog/14.png",
  },
  {
    image: "/blog/15.png",
  },
  {
    image: "/blog/16.png",
  },
  {
    image: "/restaurant/21.png",
  },
  {
    image: "/restaurant/22.png",
  },
  {
    image: "/restaurant/23.png",
  },
  {
    image: "/restaurant/24.png",
  },
];

const ImageSlider = () => {
    const { folder } = useGlobalContext();
    console.log("folder", folder)
  const [current, setCurrent] = useState(0);
  const newList = SliderData.filter(res => res.image.includes(`/${folder}`));
  const length = newList.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(newList) || newList.length <= 0) {
    return null;
  }

  

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {newList.map((slide, index) => {
        console.log("slide :", slide.image);

        return (
          <div
            className={index === current ? "slide active-slide" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="previews" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
