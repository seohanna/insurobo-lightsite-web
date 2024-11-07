import React from "react";
import { styled } from "styled-components";

const TopText = ({ text }) => {
  return (
    <Text>{text}</Text>
  )
}
export default TopText;

const Text = styled.p`
  margin: 40px 0 60px;
  font-size: 24px;
  color: #212529;
  line-height: 1.33;
  text-align: center;
  font-weight: 400;

  ${(props) => props.theme.window.mobile} {
    margin: 20px 0;
    font-size: 18px;
  }
`;