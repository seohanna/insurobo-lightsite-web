import React, { useState } from "react";
import { styled } from "styled-components";
import InnerBox from "../../InnerBox";
import History from "./History";
import bg from "../../../../assets/img/content/company-history.jpg";
import Vision from "./Vision";
import Partner from "./Partner";
import Ci from "./Ci";

const Introduction = () => {
  const [openTab, setOpenTab] = useState(1);
  const menu = [
    {
      id: 1,
      title: '히스토리',
    },
    {
      id: 2,
      title: '비전',
    },
    {
      id: 3,
      title: '파트너',
    },
    {
      id: 4,
      title: '회사CI',
    }
  ]
  return (
    <>
      <IntroduceWrap>
        <InnerBox>
          <h2>
            당신의 보험 모든것, 
            <br />
            쉽고 간편하게
          </h2>
          <p>
            믿음과 올바름, 우리의 가치입니다. <br />일상에 경험하지 못했던 쉽고 간편한 보험가입 서비스, <br />모두를
            위한 서비스를 만들고자 합니다.
          </p>
        </InnerBox>
      </IntroduceWrap>
      <TabContentWrap>
        <TabMenu>
          {menu.map((dt) => (
            <li className={openTab === dt.id ? 'selected': ''} key={dt.id}>
              <button onClick={() => setOpenTab(dt.id)}>
                {dt.title}
              </button>
            </li>
          ))}
        </TabMenu>
        <TabContent>
          {openTab === 1 ? (
            <History />) : 
          openTab === 2 ? (
            <Vision />) : 
          openTab === 3 ? (
            <Partner />) : 
          openTab === 4 && (
            <Ci />
          )}
        </TabContent>
      </TabContentWrap>
    </>
  )
}
export default Introduction;

const IntroduceWrap = styled.div`
  width: 100%;
  min-height: 200px;
  padding: 50px 84px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  object-fit: cover;
  background-image: url(${bg});
  h2 {
    color: #FFFFFF;
    font-size: 38px;
  }
  p {
    margin-top: 20px;
    font-size: 22px;
    line-height: 1.36;
    color: #FFFFFF;
  }

  ${(props) => props.theme.window.mobile} {
    padding: 30px;
    min-height: 0;

    > div {
      padding: 0;
    }
    h2 {
      font-size: 22px;
    }
    p {
      margin-top: 10px;
      font-size: 14px;
    }
  }
`;

const TabContentWrap = styled.div`
`;

const TabMenu = styled.ul`
  width: 1180px;
  margin: 0 auto;
  display: flex;
  padding-top: 32px;

  > li {
    flex-grow: 1;
    > button {
      width: 100%;
      height: 60px;
      display: block;
      font-size: 18px;
      font-weight: normal;
      line-height: 1.33;
      text-align: center;
      color: #868e96;
      border-bottom: 1px solid #f1f3f5;
    }
    &.selected {
      > button {
        font-weight: bold;
        color: #384cff;
        border-bottom: 2px solid #384cff;
      }
    }
  }
  ${(props) => props.theme.window.mobile} {
    width: 100%;
    padding-top: 0;
    margin-top: 10px;
    > li {
      > button {
        font-size: 14px;
        height: 40px;
        line-height: 1.43;
      }
      &.selected {
        > button::after {
          content: '';
          width: 4px;
          height: 4px;
          display: inline-block;
          border-radius: 2px;
          background-color: #384cff;
          vertical-align: top;
          margin-left: 2px;
        }
      }
    }
  }
`;

const TabContent = styled.div`

`;
