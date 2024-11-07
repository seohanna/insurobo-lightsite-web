import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { recruitList } from "../../../api/data";
import InnerBox from "../InnerBox";
import SearchInput from "../../Input/SearchInput";
import Board from "../../Borad";


const RecruitList = () => {
  const navigate = useNavigate();
  const goDetail = (link) => {
    navigate(link)
  }
  return (
    <InnerBox>
      <SearchWrap>
        <SearchInput name='recruit_searchWord' />
      </SearchWrap>
      <Board>
        {recruitList.map((data) => (
          <li key={data.BASE_IDX} onClick={() => goDetail(`/company/recruitDetail?recruitIdx=${data.BASE_IDX}`)}>
            <button>
              <div>
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
                <span className="title">
                  {data.TITIE}
                </span>
              </div>
              <span className="date">
                {data.START_YMD} ~ {data.END_YMD}
              </span>
            </button>
          </li>
        ))}
      </Board>
    </InnerBox>
  )
}
export default RecruitList;

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
