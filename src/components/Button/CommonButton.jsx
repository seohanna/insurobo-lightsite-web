import React from "react";
import { styled } from "styled-components";

const CommonButton = ({ title, onClick, className }) => {
  return (
    <ButtonStyle onClick={onClick} className={className}>
      {title}
    </ButtonStyle>
  )   
}
export default CommonButton;

const ButtonStyle = styled.button`
  min-width: 260px;
  height: 56px;
  border-radius: 8px;
  margin-top: 30px;
  font-size: 20px;
  color: #FFFFFF;
  background-color: #2ea5ff;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  &.gray {
    background-color: #f1f3f5;
    color: #212529;
  }
  ${props => props.theme.window.mobile} {
    min-width: 100%;
    height: 48px;
    font-size: 16px;
    margin-top: 16px;
  }
`;

