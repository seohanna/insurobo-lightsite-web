import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

const Input = ({
  name,
  type,
  required,
  validate,
  pattern,
  onBlur,
  placeholder,
  maxLength,
  readOnly
}) => {
  const { register } = useFormContext();

  return (
    <BasicInput
      type={type}
      placeholder={placeholder}
      readOnly={readOnly}
      {...register(name, {
        required: required,
        validate: validate,
        pattern: pattern,
        maxLength: maxLength,
        onBlur: onBlur
      })}
    />
  )
}


export default Input;

const BasicInput = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  padding: 15px 16px 13px;
  border-radius: 8px;
  border: solid 1px #dee2e6;
  color: #212529;
  font-size: 16px;
  &::placeholder {
    color: #adb5bd;
    font-size: 16px;
    font-family: "Pretendard Variable";
  }
  ${(props) => props.theme.window.mobile} {
    font-size: 14px;
    padding: 13px 16px 13px;
    &::placeholder {
      font-size: 14px;
    }
  }
`;

