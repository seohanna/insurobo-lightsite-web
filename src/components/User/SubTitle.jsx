import React from "react";
import { styled } from "styled-components";

const SubTitle = ({title}) => {
  return (
    <Text>
      {title}
    </Text>
  )
}
export default SubTitle;

const Text = styled.p`
  margin: 40px 0 10px 0;
  font-weight: 400;
  font-size: 20px;
  color: #212529;
`;
