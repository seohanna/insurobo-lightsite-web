import React from "react";
import styled from "styled-components";

const JehuTitle = ({ jehu, title }) => {
  return (
    <Wrap title={title}>INSUROBO X {jehu}</Wrap>
  )
}
export default JehuTitle;

const Wrap = styled.div`
  height: 45px;
  margin-bottom: 40px;
  font-size: 0;
  background-size: contain;
  background-position: center;
  background-image: url(${props => props.title});
  background-repeat: no-repeat;
  ${props => props.theme.window.tab} {
    height: 31px;
    margin-bottom: 20px;
  }
`;
