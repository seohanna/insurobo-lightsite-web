import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
// import ButtonBanner from "./ButtonBanner";
// import appIcon from "../../assets/img/main/appIcon.jpg";
// import MainTitle from "./MainTitle";
// import apply from "../../assets/img/main/mainInfo_apply.png";
// import qna from "../../assets/img/main/mainInfo_qna.png";
// import documents from "../../assets/img/main/mainInfo_documents.png";
// import { noticeData } from "../../api/data";
import useWindowSize from "../../hooks/useWindowSize";
import { useNavigate } from "react-router-dom";
// import { getNoticeList } from "../../api/support";

const MainInfo = () => {
  // const [data, setData] = useState([]);
  // const { width } = useWindowSize();
  // const navigate = useNavigate();
  // const goDetail = (link) => {
  //   navigate(link)
  // }
  // useEffect(() => {
  //   getNoticeList(1,10).then((res) => {
  //     console.log(res)
  //     setData(res.data.items)
  //   })

  // }, []);
  return (
    <Wrap>
      {/* <div>
        <ButtonBanner
          title='인슈로보 모바일앱 다운로드'
          text='휴대폰에서도 간편하게!'
          img={appIcon}
          link='/support/mobileGuide'
        />
        <ButtonBanner
          title='대표 상담번호'
          text='평일 09:00 ~ 18:00'
          LargeText='070-4126-3333'
          bgColor='#176FFF'
        />
      </div> */}
      <div>
        {/* <div>
          <MainTitle
            title='궁금증을 해결해 드릴게요'
            text='상담신청을 통해서 궁금증을 빠르게 해결하세요.'
          />
          <div className="question-wrap">
            <div>
              <h2>인슈 상담신청</h2>
              <div><img src={apply} alt="상담신청"/></div>
            </div>
            <div>
              <h2>자주묻는질문</h2>
              <div><img src={qna} alt="자주묻는질문"/></div>
            </div>
            <div>
              <h2>필요서류안내</h2>
              <div><img src={documents} alt="필요서류안내"/></div>
            </div>
          </div>
        </div> */}
        {/* <div>
          <div className="notice_title-wrap">
            <MainTitle
              title='공지사항'
              text='인슈로보 주요 정보를 한 눈에!'
            />
            <button onClick={() => navigate('/support/noticeList')}>더보기</button>
          </div>
          <div className="notice">
            {data.slice(0, width > 768 ? 3 : 4).map((dt) => (
              <div key={dt.NOTICE_IDX} onClick={() => goDetail(`/support/noticeDetail?noticeidx=${dt.NOTICE_IDX}`)}>
                <p>{dt.TITIE}</p>
                <span>{dt.NOTICE_DATE}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </Wrap>
  )
}

export default MainInfo;

const Wrap = styled.div`
  padding: 80px 0;
  font-family: 'Noto Sans KR', sans-serif;
  > div {
    display: flex;
    justify-content: space-between;
    > div {
      width: 570px;
      .question-wrap {
        padding-top: 30px;
        display: flex;
        justify-content: space-between;
        > div {
          padding: 20px 0 10px;
          width: 175px;
          height: 163px;
          border-radius: 15px;
          box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          > h2 {
            font-size: 18px;
            font-weight: 400;
            color: #000000;
          }
          > div {
            width: 100px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
      .notice_title-wrap {
        padding-bottom: 30px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        > button {
          font-size: 18px;
          text-decoration: underline;
        }
      }
      .notice {
        padding: 30px 20px;
        border-radius: 15px;
        box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10);
        height: 163px;
        > div {
          display: flex;
          justify-content: space-between;
          padding-bottom: 16px;
          > p {
            width: 400px;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            position: relative;
            padding-left: 20px;
          }
          > span {
            color: #B4B4B4;
          }
        }
        > div > p::before {
          position: absolute;
          top: 10px;
          left: 5px;
          content: '';
          width: 4px;
          height: 4px;
          background-color: #545454;
          display: block;
          border-radius: 50%;
        }
      }
      
    }
  }
  ${props => props.theme.window.mobile} {
    padding: 20px 0;
    > div:first-child > div:first-child {
      margin-bottom: 10px;
    }
    > div {
      flex-direction: column;
      > div {
        width: 100%;
        justify-content: space-between;
        .question-wrap {
          padding: 26px 0 20px 0;
          > div {
            width: 31%;
            height: 95px;
            padding: 10px 0;
            > h2 {
              font-size: 12px;
            }
            > div {
              width: 54px;
              height: 54px;
            }
          }
        }
        .notice_title-wrap {
          padding-bottom: 23px;
          > button {
            font-size: 14px;
          }
        }
        .notice {
          padding: 16px 15px;
          border-radius: 10px;
          height: 112px;
          > div {
            padding-bottom: 8px;
            font-size: 10px;
            > p {
              width: 82%;
            }
          }
          > div > p::before {
            top: 6.6px;
            width: 3px;
            height: 3px;
          }
        }
      }
      
    }
  }
`;
