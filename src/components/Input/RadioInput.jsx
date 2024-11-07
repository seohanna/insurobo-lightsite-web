import React from "react";
import styled from "styled-components";
import { Controller, useFormContext } from "react-hook-form";
import radioBtn from "../../assets/icon/common/icon-radio_default.png";
import radioCheckBtn from "../../assets/icon/common/icon-radio-checked.png";

const RadioInput = ({ name, data }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <RadioInputWrap {...field}>
            {data.map((item) => {
              return (
                <div>
                  <FormCheck
                    key={item.id}
                    type="radio"
                    id={item.id}
                    name={field.name}
                    value={item.value}
                    checked={field.value === item.value}
                    onChange={(e) => {
                      field.onChange(e.target.value);
                    }}
                  />
                  <label htmlFor={item.id}>
                    {item.label}
                  </label>
                </div>
              )
            })}
          </RadioInputWrap>
        )
      }}
    >
    </Controller>
  )
}

export default RadioInput;

const RadioInputWrap = styled.div`
  display: flex;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    &:not(:first-child) {
      margin-left: 30px;
    }
    > label {
      margin-left: 12px;
      color: #212529;
      font-weight: 500;
    }
  }
  ${props => props.theme.window.mobile} {
    > div {
      &:not(:first-child) {
        margin-left: 0;
      }
      > label {
        margin-left: 6px;
        font-size: 14px;
      }
    }
  }
`;

const FormCheck = styled.input`
  width: 24px;
  height: 24px;
  background-image: url(${radioBtn});
  background-size: 100% auto;
  border: none;
  appearance:none;
  -webkit-appearance: none;
  -moz-appearance:none;
  &:checked {
    background-image: url(${radioCheckBtn});
  }
  
`;
