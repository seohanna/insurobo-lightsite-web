import React, { useEffect, useState } from "react";
import styled from "styled-components";
import end from "../../../assets/img/content/event-end.png";
import { getEventList } from "../../../api/benefits";
import { useNavigate } from "react-router-dom";
const host_url=process.env.REACT_APP_INSUROBO_PLUS_HOST;

const EventList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getEventList().then((res) => {
      setData(res.data.items)
    })
  }, []);
  const navigate = useNavigate();
  const goDetail = (link) => {
    navigate(link)
  }

  return (
    <ListWrap>
      <ul>
        {data.map((dt) => (
          <li kety={dt.EVENT_IDX} className={dt.DATE_TERM && dt.DATE_TERM === '0' ? '' : 'end'} onClick={() => goDetail(`/benefits/eventDetail?eventidx=${dt.EVENT_IDX}`)}>
            <button>
              <span className="img-wrap">
                <img src={host_url+`/file/fileDownload/${dt.FILE_ID}`} alt="이벤트 이미지"/>
              </span>
              <span className="event-title">{dt.TITIE}</span>
              <span className="event-date">{dt.START_YMD}~{dt.END_YMD}</span>
            </button>
          </li>
        ))}
      </ul>
    </ListWrap>
  )
}

export default EventList;

const ListWrap = styled.div`
  border-top: 1px solid #f1f3f5;
  border-bottom: 1px solid #f1f3f5;
  padding: 40px 0;

  > ul {
    display: flex;
    flex-flow: row wrap;
    > li:nth-child(3n), li:last-child {
      margin-right: 0;
    }
    > li:nth-child(-n+3) {
      margin-top: 0;
    }
    > li {
      width: calc(33.3% - 14px);
      margin-right: 20px;
      margin-top: 60px;
      > button {
        display: block;
        width: 100%;
        height: auto;
        text-align: left;
        cursor: pointer;
        > span {
          display: block;
        }
        .img-wrap {
          position: relative;
          height: 220px;
        }
        .event-title {
          margin-top: 20px;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.33;
          color: #212529;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          word-wrap: break-word;
        }
        .event-date {
          display: block;
          margin-top: 10px;
          font-size: 16px;
          line-height: 1.38;
          color: #adb5bd;
        }
      }
    }
    .end .img-wrap::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .5);
      background-image: url(${end});
      background-position: center;
      background-repeat: no-repeat;
      background-size: 128px;
    }
  }
  ${(props) => props.theme.window.mobile} {
    border-top: 0;
    border-bottom: 0;
    padding: 0;
    > ul {
      > li:nth-child(-n+3) {
        margin-top: 30px;
      }
      > li:first-child {
        margin-top: 0;
      }
      > li {
        width: 100%;
        margin-right: 0;
        margin-top: 30px;
        > button {
          .img-wrap {
            height: auto;
          }
          .event-title {
            margin-top: 14px;
            font-size: 16px;
          }
          .event-date {
            margin-top: 8px;
            font-size: 14px;
          }
        }
      }
    }
  }
`;
