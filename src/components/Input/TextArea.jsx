import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

const TextArea = ({ name, placeholder }) => {
  const { register } = useFormContext();
  return (
    <TextAreaWrap
      placeholder={placeholder}
      {...register(name)}
    />
  )
}

export default TextArea;

const TextAreaWrap = styled.textarea`
  display: block;
  width: 100%;
  height: 148px;
  padding: 13px 16px;
  border-radius: 8px;
  border: solid 1px #dee2e6;
  background-color: #fff;
  color: #212529;
  &::placeholder {
    color: #adb5bd;
    font-size: 13px;
    font-family: "Pretendard Variable";
  }

  ${props => props.theme.window.mobile} {
    height: 124px;

  }
`;

