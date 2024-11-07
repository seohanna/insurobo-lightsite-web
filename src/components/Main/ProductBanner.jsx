import React from "react";
import MainTitle from "./MainTitle";
import { styled } from "styled-components";
import img1 from "../../assets/img/main/productBanner_duty.png";
import img2 from "../../assets/img/main/productBanner_must.png";
import img3 from "../../assets/img/main/productBanner_invest.png";

const ProductBanner = () => {
  const goLink = (link, target) => {
    window.open(link, target);
  }
  return (
    <Wrap>
      <MainTitle
        title='소상공인 지원사업'
        text='다양한 보험을 직접 확인하고 비교해보세요!'
        label='Go!'
      />
      <ul>
        <li onClick={() => goLink('https://insurobo.com/smallbiz/multiuse', "_self")}>
          <Overlay />
          <h2>
            업종별 의무보험<br />
            <b>꼭!</b>챙기세요
          </h2>
          <p>의무보험</p>

        </li>
        <li onClick={() => goLink('https://insurobo.com/smallbiz/disaster', "_self")}>
          <Overlay />
          <h2>
            사업장 <b>안전!</b><br />
            선택이 아닌 <b>필수</b>
          </h2>
          <p>필수보험</p>
        </li>
        <li onClick={() => goLink('https://insurobo.com/personal/cancerCare', "_self")}>
          <Overlay />
          <h2>
            저축과 <b>위험보장</b>을<br />
            동시에!
          </h2>
          <p>재테크보험</p>
        </li>
      </ul>
    </Wrap>
  )
}
export default ProductBanner;

const Wrap = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  > ul {
    display: flex;
    justify-content: space-between;
    padding: 34px 0 80px;
    > li {
      display: flex;
      cursor: pointer;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      width: 373px;
      height: 256px;
      padding: 24px;
      border-radius: 15px;
      overflow: hidden;
      background-repeat: no-repeat;
      background-position: center;

      > h2 {
        color: #FFFFFF;
        font-size: 23px;
        font-weight: 300;
        z-index: 1;
        > b {
          color: #FFFFFF;
          font-weight: 700;
        }
      }
      > p {
        color: #FFFFFF;
        font-size: 30px;
        font-weight: 700;
        align-self: flex-end;
        z-index: 1;
      }
    }
    > li:first-child {
      background-image: url(${img1});
      background-position: 50% 0;
    }
    > li:nth-child(2) {
      background-image: url(${img2});
      background-position: 50% 0;
    }
    > li:last-child {
      background-image: url(${img3});
      background-position: -98px 0;
    }

    
  }
  ${(props) => props.theme.window.mobile} {
    > ul {
      padding: 20px 0;
      flex-direction: column;
      > li {
        width: 100%;
        height: 132px;
        margin-bottom: 10px;
        > h2 {
          font-size: 16px;
        }
        > p {
          font-size: 24px;
        }
      }
      > li:first-child {
        background-position: 22% 15%;
        background-size: 105%;
      }
      > li:nth-child(2) {
        background-position: 20% 18%;
        background-size: 110%;
      }
      > li:last-child {
        background-position: 70% 65%;
        background-size: 110%;
      }
    }
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.58);
  position: absolute;
  inset: 0;
  z-index: 0;
`;


