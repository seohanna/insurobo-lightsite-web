import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import select from '../../assets/icon/common/icon-input_select.png';

const SelectInput = ({name, defaultValue, placeholder, required, validate, children, ...rest}) => {
  const { register } = useFormContext();
  return (
    <>
      <SelectBase
        name={name}
        defaultValue={defaultValue}
        {...register(name, {
					required: required,
          validate: validate,
				})}
        {...rest}
      >
        {placeholder && (
          <option value="">
            {placeholder}
          </option>
        )}
        <>{children}</>
      </SelectBase>
    </>
  );
}

export default SelectInput;


const SelectBase = styled.select`
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  background-image: url(${select});
  background-size: 36px auto;
  background-position: right 8px center;
  background-repeat: no-repeat;
  color: #212529;
  padding: 14px 52px 14px 16px;
  font-family: "Pretendard Variable";
  font-size: 16px;
  &:not([data-empty="false"]) {
    color: #adb5bd;
  }
  > option[value=""] {
    color: #adb5bd;
  }
  > option {
    color: #212529;
  }

  ${(props) => props.theme.window.mobile} {
    font-size: 14px;
    padding: 13px 52px 13px 16px;
  }
`;

