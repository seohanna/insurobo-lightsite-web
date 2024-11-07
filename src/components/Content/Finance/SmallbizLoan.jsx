import React from "react";
import { styled } from "styled-components";
import money from '../../../assets/img/content/finance_loan.png';
import CommonButton from "../../Button/CommonButton";

const SmallbizLoan = () => {
  return (
    <Wrap>
      <p>
        대출 조건 깐깐하게 따지는 소상공인이라면
      </p>
      <Highlight><strong>대출</strong>도 남달라야합니다!</Highlight>
      <ListContent>
        <li>
          <p>쉽고 빠른 대출</p>
          <p>특징</p>
        </li>
        <li>
          <p>소상공인</p>
          <p>대상</p>
        </li>
        <li>
          <p>연 5.90% ~ 20.90%</p>
          <p>금리</p>
        </li>
        <li>
          <p>최대 10년</p>
          <p>기간</p>
        </li>
      </ListContent>
      <ButtonWrap>
        <p>
          나도 대출이 될까하고 고민중이신가요?<br />
          인슈로보에서는 중ㆍ저신용 고객님들도 대출 한도 확인 가능!
        </p>
        <CommonButton
          title='대출상담 신청하기'
        />
      </ButtonWrap>
    </Wrap>
  )
}

export default SmallbizLoan;

const Wrap = styled.div`
  text-align: center;
  background-size: 160px auto;
  background-image: url(${money});
  background-repeat: no-repeat;
  background-position: 80% 0%;
  margin-top: -80px;
  padding-top: 80px;
  padding-bottom: 140px;
  font-family: "Pretendard Variable";
  > p {
    font-size: 24px;
    line-height: 1.33;
    color: #495057;
    margin-bottom: 1.6rem;
  }
  ${props => props.theme.window.tab} {
    background-position: top right;
    background-size: 70px auto;
    padding-top: 20px;
    margin-top: -20px;
    > p {
      font-size: 14px;
      line-height: 1.433;
      margin-bottom: 6px
    }
  }

  ${props => props.theme.window.mobile} {
    padding: 20px 20px 20px 20px;
    background-position: calc(100% - 20px) 0;
  }
`;

const Highlight = styled.span`
  font-size: 48px;
  font-weight: 700;
  color: #384CFF;
  line-height: 1.21;
  position: relative;
  > strong {
    font-weight: 700;
    color: #2EA5FF;
  }
  ::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 10px;
    background-color: rgba(46, 165, 255, 0.3);
  }
  ${props => props.theme.window.tab} {
    font-size: 22px;
    line-height: 1.36;
    ::after {
      bottom: 0;
      height: 7px;
    }
  }
`;

const ListContent = styled.ul`
  margin: 80px 0;
  display: flex;
  justify-content: center;
  > li {
    width: 220px;
    height: 220px;
    position: relative;
    border: solid 14px #384cff;
    padding-bottom: 20px;
    border-radius: 110px;
    margin-left: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    > p:first-child {
      font-size: 28px;
      font-weight: 700;
      color: #384cff;
    }
    > p:last-child {
      position: absolute;
      width: 100%;
      bottom: 30px;
      color: #868e96;
      font-size: 20px;
      font-weight: 400;
    }
  }
  > li:first-child {
    border-color: #2ea5ff;
    margin-left: 0;
    > p:first-child {
      color: #2ea5ff;
    }
  }
  ${props => props.theme.window.tab} {
    width: 284px;
    margin: 30px auto 40px;
    flex-flow: row wrap;
    justify-content: space-between;
    > li {
      width: 132px;
      height: 132px;
      border-width: 8px;
      margin-left: 0;
      margin-top: 10px;
      padding-bottom: 8px;
      > p:first-child {
        font-size: 18px;
      }
      > p:last-child {
        font-size: 14px;
        bottom: 17px;
      }
    }
  }
`;

const ButtonWrap = styled.div`
  width: 660px;
  display: inline-block;
  padding: 40px;
  background-color: #f8f9fa;
  border-radius: 12px;
  
  > p {
    font-size: 20px;
    color: #212529;
    font-weight: 400;
  }

  ${props => props.theme.window.mobile} {
    width: 100%;
    padding: 20px;
    > p {
      font-size: 16px;
      line-height: 1.38;
    }
  }
`;