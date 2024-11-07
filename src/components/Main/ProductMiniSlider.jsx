import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Slider from "../Slider";
import icon1 from '../../assets/icon/main/icon-loanSave.png';
import icon2 from '../../assets/icon/main/icon-userSave.png';
import icon3 from '../../assets/icon/main/icon-multiFacility.png';
import icon4 from '../../assets/icon/main/icon-privacy.png';
import icon5 from '../../assets/icon/main/icon-houseFire.png';
import icon6 from '../../assets/icon/main/icon-onedaySports.png';
import icon7 from '../../assets/icon/main/icon-disaster.png';
import icon8 from '../../assets/icon/main/icon-gasAccident.png';

const ProductMiniSlider = () => {
  const product = [
    {
      id: 1,
      title: '대출안심 보장보험',
      icon: icon1,
    },
    {
      id: 2,
      title: '시민안전보험',
      icon: icon2,
    },
    {
      id: 3,
      title: '다중이용시설 배상책임보험',
      icon: icon3,
    },
    {
      id: 4,
      title: '개인정보보호 배상책임보험',
      icon: icon4,
    },
    {
      id: 5,
      title: '주택 화재보험',
      icon: icon5,
    },
    {
      id: 6,
      title: '원데이 스포츠보험',
      icon: icon6,
    },
    {
      id: 7,
      title: '재난배상 책임보험',
      icon: icon7,
    },
    {
      id: 8,
      title: '가스사고배상책임보험',
      icon: icon8
    }
  ];

  const navigate = useNavigate();
  const settings = {
    speed: 1000,
    variableWidth: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 767.98,
          settings: {
          slidesToShow: 2,
        }
      }
    ]
  }
  
  return (
    <Wrap>
      <Slider
        width='100%'
        height='44px'
        settings={settings}
        border
      >
        {product.map((dt) => (
          <Product
            key={dt.id}
            onClick={() => navigate(dt.link)}
          >
            <div>
              <img src={dt.icon} alt={dt.title} />
              <p>{dt.title}</p>
            </div>
          </Product>
        ))}
      </Slider>
    </Wrap>
  )
}

export default ProductMiniSlider;

const Wrap = styled.div`
  padding-bottom: 50px;
  font-family: 'Noto Sans KR', sans-serif;
  ${(props) => props.theme.window.mobile} {
    padding-bottom: 14px;
  }
`;

const Product = styled.div`
  margin-right: 20px;
  > div {
    display: flex;
    align-items: center;
    height: 44px;
    > img {
      margin-right: 10px;
      width: 30px;
    }

  }

  ${(props) => props.theme.window.mobile} {
    margin-right: 10px;
    > div {
      > img {
        margin-right: 6px;
      }
      > p {
        font-size: 14px;
      }
    }
  }
`;
