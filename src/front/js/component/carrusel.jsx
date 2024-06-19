import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import logo1 from  "../../img/logo1.png";
import logo2 from  "../../img/logo2.webp";
import logo3 from  "../../img/logo3.png";

const logos = [
  logo1,
  logo2,
  logo3
];

const LogoCarousel = () => {
  const settings = {
    dots: false, 
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, 
    cssEase: 'linear', 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  };

  // Duplicate the logos array to create a continuous loop effect
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Slider {...settings}>
        {duplicatedLogos.map((logo, index) => (
          <div key={index}>
            <img src={logo} alt={`logo-${index}`} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoCarousel;
