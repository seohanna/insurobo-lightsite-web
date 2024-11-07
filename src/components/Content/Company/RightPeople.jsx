import React from "react";
import InnerBox from "../InnerBox";
import icon1 from "../../../assets/img/content/company-rightPeople-talent1.png";
import icon2 from "../../../assets/img/content/company-rightPeople-talent2.png";
import icon3 from "../../../assets/img/content/company-rightPeople-talent3.png";
import icon4 from "../../../assets/img/content/company-rightPeople-talent4.png";
import icon5 from "../../../assets/img/content/company-rightPeople-talent5.png";
import { styled } from "styled-components";

const RightPeople = () => {
  const talent = [
    {
      id: 1,
      icon: icon1,
      text: '열린 마인드와 소통을 추구하고\n정확한 의사전달을 하는'
    },
    {
      id: 2,
      icon: icon2,
      text: '자유로운 분위기에\n책임감 있게 행동하는'
    },
    {
      id: 3,
      icon: icon3,
      text: '융합적 사고와 다양한 디지털\n역량으로 새로움을 도전하는'
    },
    {
      id: 4,
      icon: icon4,
      text: '기본적, 고정적인 개념이 아닌,\n새로운 바탕으로 창조해나가는'
    },
    {
      id: 5,
      icon: icon5,
      text: '함께 일하는 모든 구성원을\n신뢰하고 존중하는'
    },
  ]
  return (
    <InnerBox>
      <BigTitle>
        새로운 가치를 창조할 수 있는 사람들에게<br />
        인슈로보는 언제나 열려 있습니다.
      </BigTitle>
      <SubTitle>다양한 소통을 하고 더 나은 삶을 위한 창조적인 인재를 기다립니다.</SubTitle>
      <ContentWrap>
        {talent.map((dt) => (
          <div style={{backgroundImage: `url(${dt.icon})`}} key={dt.id}>
            {dt.text}
          </div>
        ))}
      </ContentWrap>

    </InnerBox>
  )
}
export default RightPeople;

const BigTitle = styled.h2`
  font-size: 44px;
  text-align: center;
  color: #2ea5ff;
  margin-bottom: 20px;

  ${(props) => props.theme.window.mobile} {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #212529;
  text-align: center;
  ${(props) => props.theme.window.mobile} {
    font-size: 16px;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  padding-top: 50px;
  > div {
    width: 380px;
    height: 228px;
    padding: 132px 40px 40px;
    font-size: 20px;
    line-height: 1.4;
    text-align: center;
    color: #212529;
    margin: 10px;
    background-repeat: no-repeat;
    background-position: center 40px;
    background-size: 72px auto;
    border-radius: 12px;
    background-color: #f8f9fa;
    white-space: pre-wrap;
    &:first-child {
      margin-left: 0;
    }
    &:nth-child(3) {
      margin-right: 0;
    }
  }
  ${(props) => props.theme.window.mobile} {
    padding-top: 30px;
    flex-flow: column;
    > div {
      width: 100%;
      height: 84px;
      padding: 20px 20px 20px 92px;
      background-size: 40px auto;
      background-position: 20px center;
      margin: 0 0 10px 0;
      font-size: 16px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`
