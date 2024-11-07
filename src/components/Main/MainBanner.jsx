import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import ContentInner from "../../layout/ContentInner";
import MainSlider from "../Slider/MainSlider";

import loan from "../../assets/img/main/mainProduct_loan.png";
import info from "../../assets/img/main/mainProduct_info.jpg";
import calc from "../../assets/img/main/mainProduct_calc.jpg";


const MainBanner = () => {
  const { width } = useWindowSize();
  return (
    <ContentInner noneStyle>
      <Wrap>
        <MainSlider />
        <MainProduct>
          <div>
            <Link to='/finance/smallbizLoan'>
              <h2>소상공인 전용대출</h2>
              <p>
                {width > 768 ? `사장님들을 위하여 준비했습니다!\n지금 당장 확인해보세요.` : `사장님들을 위하여 준비했습니다!`}
              </p>
            </Link>
          </div>
          <div>
            <Link to='/benefits/smallbizSupportList'>
              <h2>지원사업정보</h2>
              <p>
                {width > 768 ? `소상공인을 위한\n맞춤 정보 공간` : `소상공인 맞춤 공간`}
              </p>
            </Link>
            <Link to='https://insuroboplus.com/home'>
              <h2>간편보험계산</h2>
              <p>
                {width > 768 ? `매우 간단하게\n보험료 계산해보세요.` : `간단한 보험료 계산`}
              </p>
            </Link>
          </div>
        </MainProduct>
      </Wrap>
    </ContentInner>
  )
}

export default MainBanner;

const Wrap = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  font-family: 'Noto Sans KR', sans-serif;
  ${(props) => props.theme.window.mobile} {
    padding: 0;
    display: block;
  }
`;

const MainProduct = styled.div`
  width: 485px;
  display: flex;
  align-content: space-between;
  flex-flow: row wrap;
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    > a {
      display: block;
      border-radius: 15px;
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.07);
      background-repeat: no-repeat;
      > h2 {
        font-size: 20px;
        line-height: 30px;
        padding-bottom: 3px;
      }
      > p {
        font-size: 14px;
        white-space: pre-wrap;
      }
    }
  }
  > div:first-child {
    > a {
      width: 485px;
      height: 172px;
      padding: 0 25px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-image: url(${loan});
      background-position: right;
    }
  }
  > div:last-child {
    > a {
      width: 235px;
      height: 179px;
      padding: 20px;
      background-image: url(${calc});
    }
  }
  > div:last-child > a:first-child {
    text-align: end;
    background-image: url(${info});
    background-position: 13px calc(100% - -5.7px);
  }
  > div:last-child > a:last-child {
    background-image: url(${calc});
    background-position: calc(100% - -20px) calc(100% - -18px);
  }

  ${(props) => props.theme.window.mobile} {
    width:100%;
    padding: 20px 0;
    > div {
      padding: 0 24px;
      > a {
        border-radius: 10px;
        > h2 {
          font-size: 14px;
          line-height: 20px;
          
        }
        > p {
          font-size: 12px;
        }
      }
    }
    > div:first-child {
      > a {
        padding: 20px 16px;
        width:100%;
        height: 86px;
         background-size: contain;
        > h2 {
          font-size: 18px;
          line-height: 26px;
        }
      }
    }
    > div:last-child {
      margin-top: 10px;
      > a {
        padding: 12px;
        width: 48.4%;
        height: 62px;
        > h2 {
          padding-bottom: 1px;
          line-height: 20px;
        }
      }
    }
    > div:last-child > a:first-child {
      background-size: 23%;
      background-position: 8px 8px;
    }
    > div:last-child > a:last-child {
      background-size: 29%;
      background-position: top right;
      
    }
  }
`;



