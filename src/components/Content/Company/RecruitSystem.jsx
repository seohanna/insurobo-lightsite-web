import React from "react";
import { styled } from "styled-components";
import InnerBox from "../InnerBox";
import arrow from "../../../assets/img/content/company-recruitSystem-arrow.png";
import arrow_m from "../../../assets/img/content/company-recruitSystem-arrow-m.png";
import clothes from "../../../assets/img/content/company-recruitSystem_clothes.png";
import date from "../../../assets/img/content/company-recruitSystem_date.png";
import food from "../../../assets/img/content/company-recruitSystem_food.png";
import money from "../../../assets/img/content/company-recruitSystem_money.png";
import notebook from "../../../assets/img/content/company-recruitSystem_notebook.png";
import summer from "../../../assets/img/content/company-recruitSystem_summer.png";

const RecruitSystem = () => {
  const system1 = [
    { id: 1, title: '지원서 접수'},
    { id: 2, title: '서류전형'},
    { id: 3, title: '실무자 면접'},
    { id: 4, title: '급여/입사일 협의'},
    { id: 5, title: '최종합격'}
  ];
  const system2 = [
    { id: 1, title: '개인노트북 지급', text: '언제 어디서든 노트북 들고 다니며 \n즐겁게 일을 할 수 있어요!', icon: notebook},
    { id: 2, title: '자유복장', text: '본인 개성에 맞게 자유롭게 \n편한 복장으로 일 할 수 있어요!', icon: clothes},
    { id: 3, title: '자유로운 월차, 연차', text: '필요한 날짜에 미리 서류 작성 하나로 \n반차,월차,연차 사용할 수 있어요!', icon: date},
    { id: 4, title: '점심제공', text: '직장인이라면 점심시간은 필수! \n회사가 맛있는 점심 쏜다 쏜다!', icon: food},
    { id: 5, title: '여름휴가', text: '열심히 일만 할 수 없죠! \n여름에 물놀이 하러 Let’go~', icon: summer},
    { id: 6, title: '추가 상여금', text: '명절(설날, 추석) 두둑하게 \n보낼 수 있게 해드립니다!', icon: money}
  ];
  return (
    <>
      <InnerBox><Title>채용안내</Title></InnerBox>
      <StepBoxWrap>
        <div>
          <InnerBox>
            {system1.map((dt) => (
              <StepBox key={dt.id}>
                <p>STEP{dt.id}</p>
                <div><p>{dt.title}</p></div>
              </StepBox>
            ))}
          </InnerBox>
        </div>
      </StepBoxWrap>
      <WelFareWrap>
        <InnerBox>
          <Title>복지제도</Title>
          <Text>좋은 동료들과 훌륭한 문화에서 일하는 인재를 위해 아끼지 않습니다.</Text>
          <ul>
            {system2.map((dt) => (
              <li style={{backgroundImage: `url(${dt.icon})`}} key={dt.id}>
                <h2>{dt.title}</h2>
                <p>{dt.text}</p>
              </li>
            ))} 
          </ul>
        </InnerBox>
      </WelFareWrap>
    </>
  )
}
export default RecruitSystem;

const StepBoxWrap = styled.div`
margin-top: 16px;
  div {
    background-color: #f8f9fa;
    > div {
      display: flex;
      justify-content: space-between;
    }
  }
  ${(props) => props.theme.window.mobile} {
    margin-top: -16px;
    div {
      > div {
        flex-flow: column;
        justify-content: flex-start;
      }
    }
  }

`;
const StepBox = styled.div`
  position: relative;
  width: 190px;
  border-radius: 12px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  &:first-child::before {
    content: none;
  }
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -46px;
    width: 36px;
    height: 36px;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin-top: -18px;
  }
  > p {
    width: 100%;
    font-size: 18px;
    height: 40px;
    line-height: 40px;
    border-radius: 12px 12px 0 0;
    background-color: #384cff;
    color: #FFFFFF;
    font-weight: 700;
    text-align: center;
  }
  > div {
    align-self: center;
    align-items: center;
    height: 84px;
    padding: 0 30px;
    > p {
      font-size: 18px;
      line-height: 1.33;
      color: #495057;
    }
  }
  ${(props) => props.theme.window.mobile} {
    width: 100%;
    height: 64.8px;
    margin: 0 0 20px 0;
    border-radius: 8px;

    padding: 10px 16px;
    background-color: #FFFFFF !important;
    &:first-child {
      margin-top: 20px;
    }
    &:last-child {
      margin-bottom: 0;
    }
    &:first-child::before {
    content: block;
    }
    &::before {
      top: -14px;
      left: 50%;
      width: 15px;
      height: 8px;
      margin-top: 0;
      margin-left: -12.5px;
      background-image: url(${arrow_m});
      
    }
    > p {
      background-color: #FFFFFF;
      border-radius: 0;
      height: 18px;
      color: #384cff;
      font-size: 12px;
      line-height: 18px;
      text-align: start;
    }
    > div {
      width: 100%;
      background-color: #FFFFFF;
      height: auto;
      padding: 0 14px;
      > p {
        width: 100%;
        font-size: 14px;
        text-align: end;
      }
    }
  }
`;


const Title = styled.h2`
  font-size: 24px;
  color: #212529;
  margin-bottom: 10px;
  ${(props) => props.theme.window.mobile} {
    font-size: 18px;
    
  }
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.33;
  color: #adb5bd;
  ${(props) => props.theme.window.mobile} {
    font-size: 14px;
    
  }
`;

const WelFareWrap = styled.div`
  margin-top: 60px;
  ul {
    display: flex;
    flex-flow: row wrap;
    margin-top: 30px;

    > li {
      width: 50%;
      background-repeat: no-repeat;
      background-position: 0 center;
      background-size: 100px auto;
      border-bottom: 1px solid #f1f3f5;
      padding: 26px 20px 26px 136px;
      &:first-child {
        border-top: 1px solid #f1f3f5;
      }
      > h2 {
        font-size: 22px;
        line-height: 1.36;
        color: #212529;
      }
      > p {
        margin-top: 10px;
        font-size: 18px;
        line-height: 1.33;
        color: #868e96;
      }
    }
  }
  ${(props) => props.theme.window.mobile} {
    margin-top: 40px;
    padding-bottom: 20px;
    ul {
      margin-top: 20px;
      flex-flow: column;
      > li {
        width: 100%;
        padding: 14px 14px 14px 90px;
        background-size: 60px auto;
        > h2 {
          font-size: 16.2px;
        }
        > p {
          font-size: 14px;
          margin-top: 4px;
        }
      }
    }
  }
`;

