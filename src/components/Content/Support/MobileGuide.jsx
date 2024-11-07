import React from "react";
import { styled } from "styled-components";
import bg from "../../../assets/img/content/support-mobileGuideTop.jpg";
import InnerBox from "../InnerBox";
import apple from "../../../assets/icon/common/icon-app-apple.png";
import google from "../../../assets/icon/common/icon-app-google.png";
import guide1 from "../../../assets/img/content/support-guide1.jpg";
import guide2 from "../../../assets/img/content/support-guide2.jpg";
import guide3 from "../../../assets/img/content/support-guide3.jpg";
import guide4 from "../../../assets/img/content/support-guide4.jpg";
import Slider from "../../Slider";
import useWindowSize from "../../../hooks/useWindowSize";

const MobileGuide = () => {
  const { width } = useWindowSize();
  const settings = {
    slidesToShow: 1.6,
    slidesToScroll: 1,
    infinite: false,

  }

  const guide = [
    {
      id: 1,
      img: guide1,
      title: '메인'
    },
    {
      id: 2,
      img: guide2,
      title: '보험안내'
    },
    {
      id: 3,
      img: guide3,
      title: '보험신청'
    },
    {
      id: 4,
      img: guide4,
      title: '계약관리'
    },
  ]
  return (
    <>
      <MobileGuideTop>
        <InnerBox>
          <h2>모바일 서비스 안내</h2>
          <p>
            언제 어디서나 간편하게 보험부터 금융정보까지,<br />
            당신이 원하는 모든 서비스가 여기에!!
          </p>
          <ButtonWrap>
            <button onClick={() => window.open('https://play.google.com/store/apps/details?id=com.insurobo.insutech&pli=1')}>Google Play</button>
            <button onClick={() => window.open('https://apps.apple.com/kr/app/%EC%9D%B8%EC%8A%88%EB%A1%9C%EB%B3%B4/id6478134030')}>App Store</button>
          </ButtonWrap>
        </InnerBox>
      </MobileGuideTop>
      <BottomContent>
        <p>주요 서비스</p>
        
        {width > 768 ? (
          <ServiceWrap>
            {guide.map((dt) => (
              <Service key={dt.id}>
                <h3>{dt.title}</h3>
                <img src={dt.img} alt={dt.title} />
              </Service>
            ))}
          </ServiceWrap>
        ) : (
          <Slider settings={settings} noneStyle mobileGuide >
            {guide.map((dt) => (
              <Service key={dt.id}>
                <h3>{dt.title}</h3>
                <img src={dt.img} alt={dt.title} />
              </Service>
            ))}
          </Slider>
        )}
      </BottomContent>
    </>
  )
}
export default MobileGuide;

const MobileGuideTop = styled.div`
  padding: 170px 0;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  h2 {
    color: #FFFFFF;
    font-size: 50px;
  }
  p {
    color: #FFFFFF;
    font-size: 30px;
    margin: 30px 0;
    line-height: 1.36;
  }

  ${(props) => props.theme.window.mobile} {
    padding: 60px 0 70px;
    h2 {
      font-size: 30px;
    }
    p {
      color: #FFFFFF;
      font-size: 16px;
      margin: 20px 0 45px;
      line-height: 1.43;
    }
  }
`;

const ButtonWrap = styled.div`
  
  > button {
    margin-left: 20px;
    position: relative;
    width: 230px;
    height: 50px;
    padding: 11px 40px 11px 80px;
    background-color: #FFFFFF;
    font-size: 20px;
    font-weight: normal;
    line-height: 1.4;
    color: #212529;
    border-radius: 25px;
    &::before {
      content: '';
      position: absolute;
      left: 43px;
      top: 50%;
      margin-top: -14px;
      width: 28px;
      height: 28px;
      background-position: center;
      background-size: 100% auto; 
    }
    &:first-child {
      margin-left: 0;
      &::before {
        background-image: url(${google});
      }
    }
    &:last-child::before {
      background-image: url(${apple});
    }
  }
  ${(props) => props.theme.window.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    > button {
      width: 180px;
      height: 40px;
      font-size: 16px;
      padding: 9px 30px 9px 60px;
      margin-left: 0;
      &:last-child {
        margin-top: 20px;
      }
      &::before {
        left: 34px;
        margin-top: -12px;
        width: 24px;
        height: 24px;
      }
    }
  }
  
`;

const BottomContent = styled.div`
  padding-top: 60px;
  width: 1180px;
  margin: 0 auto;
  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 10px;
    color: #212529;
  }
  ${(props) => props.theme.window.mobile} {
    padding-top: 40px;
    width: 100%;
    p {
      font-size: 18px;
      padding-left: 20px;
    }
  }
`;

const ServiceWrap = styled.div`
  padding: 30px;
  display: flex;
  font-size: 20px;
  text-align: center;
  border-radius: 12px;
  background-color: #f8f9fa;

`;

const Service = styled.div`
  &:not(:first-child) {
    margin-left: 20px;
  }
  > h3 {
    font-weight: 400;
    color: #495057;
    margin-bottom: 20px;
    font-size: 18px;
  }
  ${(props) => props.theme.window.mobile} {
    margin-left: 0;
    img {
      margin-right: 10px;
      width: 200px;
    }
   > h3 {
    font-size: 14px;
    text-align: center;
    margin-bottom: 10px;
    line-height: 1.43;
   }
  }
`;

