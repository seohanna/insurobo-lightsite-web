import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import checkboxBtn from "../../assets/icon/common/icon-checkbox_default.png";
import checkboxChekedBtn from "../../assets/icon/common/icon-checkbox_checked.png";
import checkboxBtn2 from "../../assets/icon/common/icon-checkbox2_default.png";
import checkboxChekedBtn2 from "../../assets/icon/common/icon-checkbox2_checked.png";

const CheckInput = ({ label, name, required, value, className }) => {

  const { register } = useFormContext();
  return (
    <CheckInputWrap className={className}>
      <input
        type="checkbox"
        name={name}
        id={name}
        value={value}
        {...register(name, {
					required: required
				})}
      />
      <label htmlFor={name}>{label}</label>
    </CheckInputWrap>
  )
}

export default CheckInput;

const CheckInputWrap = styled.div`
  display: flex;
  align-items: center;
  > input {
    background-image: url(${checkboxBtn});
    background-repeat: no-repeat;
    background-size: 100% auto;
    width: 24px;
    height: 24px;
    appearance:none;
    -webkit-appearance: none;
    -moz-appearance:none;
    &:checked {
      background-image: url(${checkboxChekedBtn});
    }
  }
  > label {
    margin-left: 10px;
    font-weight: 700;
    color: #495057;
    
  }
  &.user {
    > label {
      font-weight: 400;
    }
  }
  &.no-line {
    > input {
      background-image: url(${checkboxBtn2});
      &:checked {
        background-image: url(${checkboxChekedBtn2});
      }
    }
  }

  ${props => props.theme.window.mobile} {
    > label {
      font-size: 14px;
    }
  }
`;
