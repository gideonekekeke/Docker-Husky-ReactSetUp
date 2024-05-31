// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            src="https://via.placeholder.com/1920x600"
            alt="Slide 1"
            style={{width: "100%", height: "500px"}}
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/1920x600"
            alt="Slide 2"
            style={{width: "100%", height: "auto"}}
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/1920x600"
            alt="Slide 3"
            style={{width: "100%", height: "auto"}}
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/1920x600"
            alt="Slide 4"
            style={{width: "100%", height: "auto"}}
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/1920x600"
            alt="Slide 5"
            style={{width: "100%", height: "auto"}}
          />
        </div>
      </Slider>
    </div>
  );
};

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const PrevArrow = (props: ArrowProps) => {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%",
        padding: "10px",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: "20px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

const NextArrow = (props: ArrowProps) => {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%",
        padding: "10px",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        right: "20px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

export default CarouselComp;
