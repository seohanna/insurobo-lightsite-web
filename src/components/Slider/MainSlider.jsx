import React, { useState } from "react";
import styled from "styled-components";
import useWindowSize from "../../hooks/useWindowSize";

import Slider from ".";
import oneday from "../../assets/img/main/mainSlideBanner_oneDay.png";
import travel from "../../assets/img/main/mainSlideBanner_travel.jpg";
import dmgSF from "../../assets/img/main/mainSlideBanner_dmgSF.jpg";
import civilSafety from "../../assets/img/main/mainSlideBanner_civilSafety.jpg";


const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { width } = useWindowSize();
  const settings = {
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    beforeChange: (slide, newSlide) => setCurrentSlide(newSlide),
    responsive: [
      {
        breakpoint: 767.98,
        settings: {
          dots: true,
        }
      },
    ]
  }
  
  const data = [
    {
      id: 1,
      link: 'https://insuroboplus.com/traveler/oneday',
      img: oneday,
      tarket: '_blank'
    },
    {
      id: 2,
      link: 'https://insuroboplus.com/traveler/home',
      img: travel,
      tarket: '_blank'
    },
    {
      id: 3,
      link: 'https://insuroboplus.com/dmgSF/introduce',
      img: dmgSF,
      tarket: '_blank'
    },
    {
      id: 4,
      link: 'https://insurobo.com/benefits/civilSafety',
      img: civilSafety,
      tarket: '_self'
    },
  ];
  return (
    <Slider
      width={width > 768 ? '655px' : '100%'}
      height={width > 768 ? '365px' : '48.6vw'}
      settings={settings}
      currentSlide={currentSlide}
      totalSlides={data.length}
      player={width > 768}
      noneStyle={width < 768}
    >
      {data.map((dt) => (
        <Banner 
          key={dt.id}
          img={dt.img}
          onClick={() => window.open(dt.link, dt.tarket)}
        />
      ))}
    </Slider>
  )
}

export default MainSlider;

const Banner = styled.div`
  height: 365px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;

  ${(props) => props.theme.window.mobile} {
    height: 48.6vw;
  }
`;
