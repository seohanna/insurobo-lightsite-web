import React from "react";
import { styled } from "styled-components";
import nodata from "../../assets/img/common/nodata.png";

const NoData = () => {
  return (
    <Wrap>
      검색된 결과가 없습니다.
    </Wrap>
  )
}
export default NoData;

const Wrap = styled.div`
  width: 100%;
  margin: 210px 0;
  background-image: url(${nodata});
  background-repeat: no-repeat;
  font-size: 18px;
  line-height: 1.33;
  padding-top: 100px;
  color: #868e96;
  background-size: 80px auto;
  background-position: center top;
  text-align: center;
`;
