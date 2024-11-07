import React from "react";
import styled from "styled-components";
import SearchInput from "../../Input/SearchInput";
import { noticeData } from "../../../api/data";
import MoreButton from "../../Button/MoreButton";
import Board from "../../Borad";

const NoticeList = () => {
  return (
    <>
      <SearchWrap>
        <SearchInput name='notice_searchWord' />
      </SearchWrap>
      <Board>
        {noticeData.map((dt) => (
          <li key={dt.BASE_IDX}>
            <button>
              <div>
                <span className={dt.NOTICE_YN && dt.NOTICE_YN === 'Y' ? 'type notice' : 'type'}>
                  {dt.NOTICE_YN && dt.NOTICE_YN === 'Y' ? '공지' : dt.BASE_IDX}
                </span>
                <span className="title">
                  {dt.TITIE}
                  {dt.NEW_MARK_YN === 'Y' && (
                    <span className="new">N</span>
                  )}
                </span>
              </div>
              <span className="date">{dt.NOTICE_DATE}</span>
            </button>
          </li>
        ))}
      </Board>
      <MoreButton />
    </>
  )
}
export default NoticeList;

const SearchWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #f1f3f5;
  > div {
    width: 265px;
  }
  ${(props) => props.theme.window.mobile} {
    > div {
      width: 100%;
    }
  }
`;


