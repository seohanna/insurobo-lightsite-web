import React from "react";
import styled, { css } from "styled-components";

const ContentInner = ({ children, noneStyle }) => {
  return (
    <ContentInnerWrap noneStyle={noneStyle}>
      {children}
    </ContentInnerWrap>
  )
}

export default ContentInner;

const ContentInnerWrap = styled.div`
  width: 1154px;
  margin: 0 auto;
  ${(props) => props.theme.window.mobile} {
    width: 100%;
    padding: 0 24px;
    ${props => props.noneStyle && css`
      padding: 0;
    `}
  } 
`;