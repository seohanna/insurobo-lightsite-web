import React from "react";
import { styled } from "styled-components";
import arrow from "../../assets/icon/main/icon-mainTitle_arrow.png";

const MainTitle = ({ title, text, label, icon }) => {
  return (
    <Wrap>
      <h2>
        {title}
        {label && <Label>{label}</Label>}
        {icon && <ArrowIcon />}
      </h2>
      <p>{text}</p>
    </Wrap>
  )
}
export default MainTitle;

const Wrap = styled.div`
  > h2 {
    font-size: 24px;
    color: #393939;
    display: flex;
    align-items: center;
    padding-bottom: 6px;
  }
  > p {
    font-size: 18px;
  }

  ${(props) => props.theme.window.mobile} {
    > h2 {
      font-size: 16px;
      padding-bottom: 3px;
    }
    > p {
    font-size: 14px;
    white-space: pre-wrap;
    }
  }
`;

const Label = styled.div`
  width: 40px;
  height: 27px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 5px;
  text-align: center;
  line-height: 27px;
  background-color: #176FFF;
  color: #FFFFFF;
  margin-left: 10px;
  ${(props) => props.theme.window.mobile} {
    width: 36px;
    height: 24px;
    font-size: 14px;
    line-height: 24px;
  }
`;

const ArrowIcon = styled.div`
  width: 16px;
  height: 16px;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: center;
  margin-left: 10px;
  ${(props) => props.theme.window.mobile} {
    margin-left: 6px;
  }
`;



