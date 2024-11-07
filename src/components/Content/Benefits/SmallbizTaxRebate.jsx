import React from "react";
import JehuTitle from "../JehuTitle";
import styled from "styled-components";
import title from "../../../assets/img/content/benefits-tax_title.png";
import tax from "../../../assets/img/content/benefits-tax.jpg";
import CommonButton from "../../Button/CommonButton";

const SmallbizTaxRebate = () => {
  return (
    <>
      <JehuTitle title={title} jehu='비즈넷 환급' />
      <PointText>
        이미 <span>820,000명</span>의 사장님이<br />
        소득세ㆍ법인세 환급 혜택을 받았어요.
      </PointText>
      <BizBox>
        <p>
          <span>나만 모르고 있었던 종합소득세 환급금, </span>
          30초만에 조회하세요.
          <br />
          세무대리인 바뀜 걱정 없이, 
          <span>안전하게 신청할 수 있어요!</span>
        </p>
        <div>
          <CommonButton title='환급금 무료 조회'/>
        </div>
      </BizBox>
    </>
  )
}

export default SmallbizTaxRebate;

const PointText = styled.p`
  font-size: 44px;
  text-align: center;
  font-weight: 700;
  color: #212529;
  margin: 30px 0 40px;
  > span {
    color: #2EA5FF;
    font-weight: 700;
  }

  ${(props) => props.theme.window.mobile} {
    font-size: 20px;
  }
`;

const BizBox = styled.div`
  position: relative;
  width: 800px;
  height: 750px;
  margin: 0 auto;
  padding: 568px 40px 40px;
  border-radius: 30px;
  background-color: #f6f9ff;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 528px;
    border-radius: 30px 30px 0 0;
    background: url(${tax});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  > p {
    text-align: center;
    color: #212529;
    font-weight: 400;
    > span {
      color: #212529;
      font-weight: 400;
    }
  }
  > div {
    display: flex;
    justify-content: center;
  }
  ${(props) => props.theme.window.mobile} {
    width: 100%;
    border-radius: 12px;
    height: 407px;
    padding: 231px 20px 20px;
    &::before {
      height: 211px;
      border-radius: 12px 12px 0 0;
    }
    > p {
      font-size: 14px;
      line-height: 1.33;
      > span {
        display: block;
      }
    }
    > div {
      > button {
        margin-top: 20px;
      }
    }
  }
`;



