import React from "react";
import { styled } from "styled-components";

import title from "../../../assets/img/content/finance_card.png";
import card1 from "../../../assets/img/content/finance_card_hi.png";
import card2 from "../../../assets/img/content/finance_card_simple.png";
import CommonButton from "../../Button/CommonButton";
import JehuTitle from "../../Content/JehuTitle";


const SmallbizCard = () => {
  return (
    <Wrap>
      <JehuTitle title={title} jehu='신한카드' />
      <ContentInner>
        <BoxWrap>
          <ShadowBox>
            <p>신한카드 Hi-Point MyShop</p>
            <img src={card1} alt="신한카드 Hi-Point MyShop 카드 이미지" />
            <dl>
              <dt>연회비</dt>
              <dd>국내전용 1만원</dd>
              <dd>해외겸용 1만 5천원</dd>
            </dl>
            <div className="card-detail">
              <p>
                사업성경비P <strong>1~5% 적립</strong>
              </p>
              <p>
                주유소 포인트 <strong>60P/ℓ 적립</strong>
              </p>
              <p>
                카드론/현금서비스 <strong>이자율 우대</strong>
              </p>
            </div>
            <div>
              <CommonButton title='카드 신청하기' />
            </div>
          </ShadowBox>
          <ShadowBox>
            <p>신한카드 Simple Platinum#</p>
            <img src={card2} alt="신한카드 Simple Platinum# 카드 이미지" />
            <dl>
              <dt>연회비</dt>
              <dd>국내전용 2만 7천원</dd>
              <dd>해외겸용 3만원</dd>
            </dl>
            <div className="card-detail">
              <p>
                국내외 가맹점 <strong>1% 캐시백</strong>
              </p>
              <p>
                대중교통 <strong>추가 0.7% 캐시백</strong>
              </p>
              <p>
                잔돈할인 <strong>월 10회</strong>
              </p>
            </div>
            <div>
              <CommonButton title='카드 신청하기' />
            </div>
          </ShadowBox>
        </BoxWrap>
        <p>준법감시 심의필 제20230803-Cpi-010호(2023.08.03~2024.08.02)</p>
      </ContentInner>
    </Wrap>
  )
}
export default SmallbizCard;

const Wrap = styled.div`
  padding: 40px;
  font-family: "Pretendard Variable";
  background-color: #f8f9fa;
  ${props => props.theme.window.tab} {
    padding: 20px 0;
  }
  ${props => props.theme.window.mobile} {
    padding: 20px;
  }
`;

const ContentInner = styled.div`
  padding: 40px 0;
  margin: 0 auto;
  width: 1180px;
  > p {
    margin-top: 30px;
    font-size: 18px;
    color: #adb5bd;
    font-weight: 400;
  }
  ${props => props.theme.window.tab} {
    width: 100%;
    > p {
      margin-top: 20px;
      font-size: 18px;
    }
  }
  ${props => props.theme.window.mobile} {
    padding: 20px 0;
    > p {
      font-size: 14px;
    }
  }
`;


const BoxWrap = styled.div`
  display: flex;
  justify-content: space-between;
  ${props => props.theme.window.tab} {
    flex-flow: row wrap;
  }
`;

const ShadowBox = styled.div`
  width: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
  background-color: #FFFFFF;
  padding: 40px;
  > p {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 30px;
    color: #212529;
  }
  > img {
    width: 280px;
  }
  > dl {
    width: 231px;
    display: inline-block;
    margin: 20px auto;
    position: relative;
    padding-left: 92px;
    > dd {
      color: #212529;
      font-size: 18px;
      font-weight: 400;
      line-height: 1.38
    }
    > dt {
      position: absolute;
      left: 0;
      top: 0;
      font-weight: bold;
      line-height: 1.33;
      color: #212529;
      font-size: 18px;
    }
  }
  .card-detail {
    width: 100%;
    text-align: center;
    padding: 20px 0 40px;
    border-top: 1px solid #f1f3f5;
    line-height: 1.33;
    > p {
      color: #212529;
      font-size: 18px;
      margin-top: 6px;
      font-weight: 400;
      > strong {
        font-weight: 700;
        color: #384cff;
      }
    }
    > p:first-child {
      margin-top: 0;
    }
  }
  ${props => props.theme.window.tab} {
    &:last-child {
      margin-top: 20px;
    }
    width: 100%;
    padding: 20px;
    > p {
      font-size: 18px;
      margin-bottom: 12px;
    }
    > img {
      width: 200px;
      height: 126px;
    }
    > dl {
      width: 175px;
      padding-left: 53px;
      margin: 16px auto;
      > dd {
        font-size: 16px;
      }
      > dt {
        font-size: 16px;
      }
    }
    .card-detail {
      padding: 16px 0;
      > p {
        margin-top: 4px;
        font-size: 16px;
      }
    }
    > div {
      > button {
        margin-top: 0;
      }
    }
  }
  ${props => props.theme.window.mobile} {
    > div {
      width: 100%;
    }
  }
`;
