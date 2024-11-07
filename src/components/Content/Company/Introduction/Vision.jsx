import React from "react";
import InnerBox from "../../InnerBox";
import TopText from "./TopText";
import { styled } from "styled-components";
import icon1 from "../../../../assets/img/content/company-vision_list1.png";
import icon2 from "../../../../assets/img/content/company-vision_list2.png";
import icon3 from "../../../../assets/img/content/company-vision_list3.png";
import icon4 from "../../../../assets/img/content/company-vision_list4.png";

const Vision = () => { 
    const data = [
      {
        id: 1,
        icon: icon1,
        content: `
          <ul class="list-dot">
            <li>주소기반 손해보험 중심의 <span class="main">인터넷보험판매전문회사</span></li>
            <li>소상공인 정책 / 의무보험 및 신개념 개인보험</li>
          </ul>
        `
      },
      {
        id: 2,
        icon: icon2,
        content: `
          <ul class="list-dot">
            <li><span class="main">SaaS</span> 솔루션</li>
            <li>보험사 및 판매사 대상 인슈어테크 기술제공</li>
          </ul>
        `
      },
      {
        id: 3,
        icon: icon3,
        content: `
          <ul class="list-dot">
            <li>지능형 <span class="main">인슈어테크 플랫폼</span></li>
            <li>공급자, 판매자, 수요자를 연결</li>
          </ul>
        `
      },
      {
        id: 4,
        icon: icon4,
        content: `
          <ul class="list-dot">
            <li>보험기반 차세대 <span class="main">금융서비스</span> 제공</li>
          </ul>
        `
      },
    ]
    return (
      <>
        <InnerBox>
          <TopText text='소상공인과 개인 고객을 위한 쉽고 간편한 생활금융파트너!' />
        </InnerBox>
        <ContentWrap>
          <InnerBox>
            <ShadowBoxWrap>
              {data.map((dt) => (
                <li 
                  key={dt.id} 
                  style={{ backgroundImage: `url(${dt.icon})`}}
                  dangerouslySetInnerHTML={{__html: dt.content}}
                />
              ))}
            </ShadowBoxWrap>
          </InnerBox>
        </ContentWrap>
      </>

    )
  }
  export default Vision;

  const ContentWrap = styled.div`
    margin-top: 16px;
    background-color: #f8f9fa;
    
    ${(props) => props.theme.window.mobile} {
      margin-top: -20px;
    }
  `;

  const ShadowBoxWrap = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 40px 0;
    
    > li {
      width: 280px;
      height: 308px;
      padding: 170px 16px 40px;
      background-color: #FFFFFF;
      background-repeat: no-repeat;
      background-position: center 40px;
      background-size: 100px auto;
      border-radius: 12px;
      box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
      .main {
        color: #2EA5FF;
        font-weight: 400;
      }
      > .list-dot {
        > li {
          position: relative;
          padding-left: 14px;
          color: #495057;
          font-weight: 400;
          &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 9px;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: #212529;
          }

        }
      }
    }
    ${(props) => props.theme.window.mobile} {
      padding: 20px 0 0 0;
      flex-flow: row wrap;
      > li {
        width: calc(50% - (10px / 2));
        height: 270px;
        padding: 120px 16px 20px;
        background-size: 80px auto;
        background-position: center 20px;
        font-size: 14px;
        margin-bottom: 10px;
        &:nth-child(3), &:last-child {
          margin-bottom: 0;
        }
      }
      > .list-dot {
        > li {
          
        }
      }
    }
  `;
