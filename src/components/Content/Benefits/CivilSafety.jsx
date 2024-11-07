import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SelectInput from "../../Input/SelectInput";
import Input from "../../Input";
import MoreButton from "../../Button/MoreButton";
import { useFormContext } from "react-hook-form";
import { getCivilSafetyList } from "../../../api/benefits";
import NoData from "../../Borad/NoData";

const CivilSafety = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const { watch } = useFormContext();

  useEffect(() => {
    searchList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const searchList = () => {
    setData([]);
    setPage(1);
    getCivilSafetyList(1,10,watch('searchDvsnCity'), watch('searchStrCity')).then((res) => {
      setData(res.data.items)
      console.log(res)
      setCount(res.data.total_count);
    })
  }
  const moreList = () => {
    getCivilSafetyList(page ,10, watch('searchDvsnCity'), watch('searchStrCity')).then((res) => {
      setData(data.concat(res.data.items));
    });
  }

  const goLink = (link) => {
    window.open(link)
  }
  return (
    <>
      <SearchWrap>
        <p>검색구분</p>
        <div>
          <SelectInput name='searchDvsnCity' placeholder='전체' defaultValue=''>
            <option value='sido'>시도</option>
            <option value='sigun'>시군구</option>
          </SelectInput>
          <Input name='searchStrCity' placeholder='검색어를 입력해주세요.' />
        </div>
        <SearchButton onClick={() => searchList()}>검색</SearchButton>
      </SearchWrap>
      {count > 0 ? (
        <>
          <ListWrap>
            <ListTable>
              <tr>
                <th>시도<br />(시군구)</th>
                <th>가입년도<br />(가입기간)</th>
                <th>보장항목</th>
                <th>보험·공제사명<br />(전화번호)</th>
                <th>담당부서<br />(전화번호)</th>
                <th>홈페이지<br />(상제정보 조회)</th>
              </tr>
              {data.map((dt) => (
                <tr key={dt.BASE_IDX}>
                  <td>{dt.CTRD_NM} <br />{dt.SIGNGU_NM === null ? '본청' : dt.SIGNGU_NM}</td>
                  <td>{dt.SBSCRB_YEAR} <br />({dt.SBSCRB_BGNDE}~{dt.SBSCRB_ENDDE})</td>
                  <td>{dt.GRNT_IEM}</td>
                  <td>{dt.CMPNY_NM} <br />({dt.CMPNY_TELNO})</td>
                  <td>{dt.LOCGOV_CHARGER_DEPT_NM}<br />({dt.LOCGOV_CHARGE_OFFM_TELNO})</td>
                  <td><button onClick={() => goLink(dt.HMPG_URL)}>바로가기</button></td>
                </tr>
              ))}
            </ListTable>
          </ListWrap>
          {count > 10 && (
            <MoreButton onClick={() => {
              setPage(page + 1)
              moreList()
            }} />
          )}
        </>
      
        ) : (
          <NoData />
        )}
    </>
  )
}

export default CivilSafety;

const SearchWrap = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #f1f3f5;
  padding-bottom: 20px;
  display: flex;
  justify-content: flex-end;
  > p {
    font-weight: 700;
    font-size: 18px;
    line-height: 49px;
  }
  > div {
    display: flex;
    > select {
      width: 200px;
      margin: 0 10px;
    }
    > input {
      width: 200px;
    }
  }

  ${(props) => props.theme.window.mobile} {
    flex-direction: column;
    
    > p {
      font-size: 14px;
      margin-bottom: 10px;
      line-height: 48px;
    }
    > div {
      justify-content: space-between;
      > select {
        width: calc(50% - 5px);
        margin: 0;
      }
      > input {
        width: calc(50% - 5px);
      }
    }
  } 
`;

const SearchButton = styled.button`
  margin-left: 10px;
  width: 120px;
  height: 48px;
  color: #FFFFFF;
  background-color: #384cff;
  font-weight: 700;
  border-radius: 8px;
  font-size: 16px;
  ${(props) => props.theme.window.mobile} {
    width: 100%;
    margin: 10px 0 0 0;
    font-size: 14px;
  }
`;

const ListWrap = styled.div``;

const ListTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  th:last-child, td:last-child {
    border-right: 0;
  }
  th, td {
    padding: 15px 20px;
    vertical-align: middle;
    text-align: center;
    border: 1px solid #f1f3f5;
    border-left: 0;
  }
  td {
    font-size: 14px;
    font-weight: 400;
    color: #212529;
    > button {
      color: #384cff;
      font-size: 14px;
      text-decoration: underline;
      text-underline-position: under;
      line-height: 1.43;
    }
  }
  th {
    background-color: #f8f9fa;
    font-weight: bold;
    color: #495057;
    width: 140px;
  }
  th:first-child {
    width: 130px;
  }
  th:nth-child(2) {
    width: 220px;
  }
  th:nth-child(3) {
    width: 340px;
  }
  th:nth-child(4) {
    width: 210px;
  }

  ${(props) => props.theme.window.mobile} {
    width: 100%;
    border-top: 1px solid #f1f3f5;
    tr {
      display: flex;
      flex-direction: column;
      background-color: #f8f9fa;
      margin-bottom: 10px;
      border-radius: 8px;
      padding: 16px;
      &:first-child {
        display: none;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
    th, td {
      border: 0;
      text-align: start;
      padding: 0;
    }
    td {
      margin-top: 8px;
      &:first-child {
        margin-top: 0;
      }
      > br {
        display: none;
      }
      > button {
        font-weight: 700;
      }
    }
  }
`;