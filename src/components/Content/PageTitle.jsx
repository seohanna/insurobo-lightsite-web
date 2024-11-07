import React from "react";
import { styled } from "styled-components";

const PageTitle = ({ title, id, className }) => {
  return (
    <Wrap id={id} className={className}>
      {title}
    </Wrap>
  )
}

export default PageTitle;

const Wrap = styled.div`
  font-size: 38px;
  font-weight: 700;
  text-align: center;
  color: #212529;
  line-height: 1.21;
  padding: 60px 0;
  font-family: "Pretendard Variable";
  &.none {
    display: none;
  }
  ${props => props.theme.window.mobile} {
    font-size: 22px;
    padding: 20px 0;
    line-height: 1.36;
    &.none + div {
      display: none;
    }
  }
`;

