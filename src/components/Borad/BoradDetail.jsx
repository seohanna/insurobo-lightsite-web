import React from "react";
import { css, styled } from "styled-components";
import CommonButton from "../Button/CommonButton";
import { useNavigate } from "react-router-dom";

const BoradDetail = ({ data, recruit, event }) => {
  const navigate = useNavigate();
  return (
    <>
      {recruit ? (
        <>
           <BoradDetailWrap recruit={recruit} event={event}>
            <BoradTop>
              {data.CATEGORY === "ALL" || data.CATEGORY === "All" ? (
                <span className="recruit">
                  <span className="type">경력</span>
                  <span className="type blue">신입</span>
                </span>    
              ) : (
                <span className="recruit single">
                  <span className="type">
                    {(data.CATEGORY === "NEW" || data.CATEGORY === "New" ) ? '신입' :
                    (data.CATEGORY === "EXP" || data.CATEGORY === "Exp") && '경력'}
                  </span>
                </span>
              )}

              <p>{data.START_YMD} ~ {data.END_YMD}</p>
            </BoradTop>
            <BoradContent dangerouslySetInnerHTML={{ __html: data.CONTENT }} />
          </BoradDetailWrap>
          <ButtonWrap>
            <CommonButton title='목록' className='gray' onClick={() => navigate(`/company/recruitList`, { state: { ...data }})} />
            <CommonButton title='지원하기' onClick={() => window.open(`https://www.jobkorea.co.kr/Recruit/GI_Read/44208763?Oem_Code=1`)}/>
          </ButtonWrap>
        </>
      ) : event ? (
        <>
          <BoradDetailWrap>
            <BoradTop className="event">
              <h2>{data.TITIE}</h2>
              <p>{data.UPD_DTTM}</p>
            </BoradTop>
          </BoradDetailWrap>
          <BoradContent dangerouslySetInnerHTML={{ __html: data.CONTENT }} />
          <ButtonWrap className="event">
            <CommonButton title='목록' className='gray' onClick={() => navigate(`/benefits/eventList`, { state: { ...data }})} />
          </ButtonWrap>
        </>
      ) : (
        <>
          <BoradDetailWrap>
            <BoradTop>
              <h2>{data.PBLANCNM}</h2>
              {data.SPORTINSTTNM && (
                <dl>
                  <dt>주관기관 :</dt>
                  <dd>&nbsp;{data.SPORTINSTTNM}</dd>
                  <dt>진행상태 :</dt>
                  <dd>신청가능</dd>
                </dl>
              )}
            </BoradTop>
            <BoradContent dangerouslySetInnerHTML={{ __html: data.POLICYCNTS }} />
            {data.TERM && (<TermDate>신청기간 : {data.TERM}</TermDate>)}
            {data.REFRNC && (<SubData dangerouslySetInnerHTML={{ __html: data.REFRNC }} />)}
          </BoradDetailWrap>
          <ButtonWrap>
            {data.PBLANCDTLURL && <CommonButton title='상세정보' onClick={() => window.open(data.PBLANCDTLURL, '_blank')}/>}
            <CommonButton title='목록' className='gray' onClick={() => navigate(`/benefits/smallbizSupportList`, { state: { ...data }})} />
          </ButtonWrap>
        </>
      )}
    </>
  )
}

export default BoradDetail;

const BoradDetailWrap = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #f1f3f5;
  ${props => props.recruit && css`
    border-bottom: none;
  `}
  ${(props) => props.theme.window.mobile} {
    padding-bottom: 0;
  }
`;

const BoradTop = styled.div`
  padding-bottom: 20px;
  > h2 {
    font-size: 22px;
    margin-top: 16px;
    line-height: 1.36;
    color: #212529;
  }
  > dl {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    > dd, dt {
      color: #495057;
    }
    > dt:not(:first-child) {
      position: relative;
      margin-left: 10px;
      padding-left: 10px;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 1px;
        height: 10px;
        margin-top: -5px;
        background-color: #adb5bd;
      }
    }
  }
  &.event {
    padding-bottom: 0;
  }
  .recruit {
    width: 150px;
    display: flex;
    justify-content: space-between;
    .type {
      display: flex;
      width: 70px;
      height: 43px;
      color: #FFFFFF;
      border-radius: 6px;
      font-size: 16px;
      font-weight: 700;
      align-items: center;
      justify-content: center;
      background-color: #868e96;
      &.blue {
        background-color: #2ea5ff;
      }
    }
  }
  p {
    text-align: right;
    color: #adb5bd;
    line-height: 1.38;
    margin-top: 10px;
  }
  ${(props) => props.theme.window.mobile} {
    padding-bottom: 10px;
    > h2 {
      margin-top: 10px;
      font-size: 16px;
    }
    > dl {
      > dd, dt {
        font-size: 14px;
      }
    }
    .recruit {
      width: 100px;
      .type {
        width: 45px;
        height: 26px;
        font-size: 12px;
      }
    }
    p {
      font-size: 14px;
      line-height: 1.43;
    }
  }
  &.event {
    padding-bottom: 10px;
  }
`;

const BoradContent = styled.div`
  padding: 20px 0;
  border-top: 1px solid #f1f3f5;
  border-bottom: 1px solid #f1f3f5;
  min-height: 353px;
  font-size: 16px;
  line-height: 1.5;
  p {
    color: #212529;
    font-weight: 400;
    > b {
      font-weight: 700;
      > span {
        font-weight: 700;
      }
    }
  }
  ${(props) => props.theme.window.mobile} {
    min-height: 300px;
    line-height: 1.57;
    p, li {
      font-size: 14px;
      white-space: pre-wrap;
      font-weight: 700;
    }
  }
`;

const TermDate = styled.div`
  padding-top: 20px;
  color: #495057;
  ${(props) => props.theme.window.mobile} {
    padding-top: 10px;
    font-size: 14px;

  }
`;

const SubData = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 12px;
  background-color: #f8f9fa;
  > p {
    font-weight: 400;
    color: #212529;
    > b {
      font-weight: 700;
    }
  }
  ${(props) => props.theme.window.mobile} {
    margin-top: 10px;
    > p {
      font-size: 14px;
    }
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  > button {
    &:nth-child(2) {
      margin-left: 10px;
    }
  }
  ${(props) => props.theme.window.mobile} {
    justify-content: space-between;
    > button {
      width: 49%;
      min-width: 0;
      &:nth-child(2) {
        margin-left: 0;
      }
    }
  }
  &.event {
    justify-content: center;
  }
`;
