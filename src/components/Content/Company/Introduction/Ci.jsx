import React from "react";
import { styled } from "styled-components";
import InnerBox from "../../InnerBox";
import TopText from "./TopText";
import useWindowSize from "../../../../hooks/useWindowSize";
import ci1 from "../../../../assets/img/content/company-ci1.png";
import ci1_m from "../../../../assets/img/content/company-ci1-m.png";
import ci2 from "../../../../assets/img/content/company-ci2.png";
import ci2_m from "../../../../assets/img/content/company-ci2-m.png";
import ci3 from "../../../../assets/img/content/company-ci3.png";
import ci3_m from "../../../../assets/img/content/company-ci3-m.png";
import ci4 from "../../../../assets/img/content/company-ci4.png";
import ci4_m from "../../../../assets/img/content/company-ci4-m.png";
import ci5 from "../../../../assets/img/content/company-ci5.png";
import ci5_m from "../../../../assets/img/content/company-ci5-m.png";
import ci6 from "../../../../assets/img/content/company-ci6.png";
import ci6_m from "../../../../assets/img/content/company-ci6-m.png";


const Ci = () => {
  const { width } = useWindowSize();
  return (
    <InnerBox>
      <TopText text='인슈로보 CI는 사용자들의 안전을 연결한다는 의무를 담고 있습니다.' />
      <ContentWrap>
        <CiboxWrap>
          <div>
            <Title>대문자 조합 로고 타입</Title>
            <img src={width > 768 ? ci1 : ci1_m} alt="대문자 조합 로고 타입 CI" />
          </div>
          <div>
            <Title>한글 조합 로고 타입</Title>
            <img src={width > 768 ? ci2 : ci2_m} alt="한글 조합 로고 타입 CI" />
          </div>
          <div className="btn-wrap">
            <button>ai 다운로드</button>
            <button>jpg 다운로드</button>
            <button>png 다운로드</button>
          </div>
        </CiboxWrap>
        <div>
          <div>
            <Title>컬러가이드</Title>
            <p>
              기업 전용 컬러는 브랜드 이미지를 나타내고 있습니다.<br />
              지정된 색상으로 회사의 아이덴티티를 명확히 합니다.
            </p>
            <img src={width > 768 ? ci3 : ci3_m} alt="CI 컬러가이드" />
          </div>
        </div>
        <div>
          <div>
            <Title>로고 색상 활용구조</Title>
            <p>
              색상과 배경색은 기본 색상 외에 본 항에 수록된 색상을 사용할 수 있습니다.<br />
              이미지 왜곡 및 손상을 막기 위해 다음의 배경색 사용규정을 준수하여 오용사례까지 발생하지 않도록 해야합니다.
            </p>
            <CiboxWrap className="ci-box3">
              <img src={width > 768 ? ci4 : ci4_m} alt="CI Full 컬러가이드" />
              <img src={width > 768 ? ci5 : ci5_m} alt="CI Main/Negative 컬러가이드" />
            </CiboxWrap>
          </div>
        </div>
        <div>
          <div>
            <Title>로고단색 활용구조</Title>
            <p>
              단색 색상 규정은 4원색이 불가능할 경우 활용합니다.<br />
              단색 및 검은색 바탕의 활용시에는 흰색으로 사용하며,<br />
              검은색 바탕의 순차적인 명도 변화에 따른 로고타입은 아래 예시에 따라 사용하도록 합니다.
            </p>
            <CiboxWrap className="ci-box4">
              <img src={width > 768 ? ci6 : ci6_m} alt="CI 로고단색 활용구조가이드" />
            </CiboxWrap>
          </div>
        </div>
      </ContentWrap>
    </InnerBox>
  )
}
export default Ci;

const ContentWrap = styled.div`
  > div {
    margin-top: 60px;
    
    > div {
      > p {
        font-size: 16px;
        line-height: 1.5;
        color: #212529;
        margin-bottom: 20px;
        font-weight: 400;
      }
    }
  }
  ${(props) => props.theme.window.mobile} {
    > div {
      margin-top: 60px;
      > div {
        > p {
          font-size: 14px;
          line-height: 1.43;
        }
      }
      &:first-child {
        border-top: 1px solid #f1f3f5;
        padding-top: 20px;
        margin: 0;
      }
    }
  }
`;

const Title = styled.h2`
  font-size: 24px;
  line-height: 1.33;
  color: #212529;
  margin-bottom: 16px;
  ${(props) => props.theme.window.mobile} {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const CiboxWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  
  > div {
    width: 580px;
    &.btn-wrap {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 30px;
      > button {
        background-color: #f1f3f5;
        color: #212529;
        min-width: 120px;
        padding: 0 10px;
        height: 48px;
        font-size: 16px;
        margin-left: 10px;
        font-weight: bold;
        border-radius: 8px;
        &:first-child {
          margin-left: 0;
        }
        
      }
    }
  }
  &.ci-box3 {
    align-items: flex-start;
    > img:first-child {
      width: 348px;
    }
    > img:last-child {
      width: 745px;
    }
  }
  &.ci-box4 {
    align-items: flex-start;
    > img:first-child {
      width: 835px;
    }
  }
  ${(props) => props.theme.window.mobile} {
    > div {
      width: 100%;
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
      &.btn-wrap {
        margin-top: 0;
        flex-flow: column;
        
      > button {
        min-width: 0;
        padding: 0 16px;
        height: 40px;
        font-size: 14px;
        margin-left: 0;
        margin-bottom: 10px;
        font-weight: 400;
        &:last-child {
          margin-bottom: 0;
        }
      }
      }
    }
    &.ci-box3 {
      > img:first-child {
        width: 100%;
      }
      > img:last-child {
        width: 100%;
        margin-top: 20px;
      }
    }
    &.ci-box4 {
      > img:first-child {
        width: 100%;
      }
    }
  }
`;
