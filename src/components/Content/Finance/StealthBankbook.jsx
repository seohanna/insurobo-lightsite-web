import React from "react";
import { styled } from "styled-components";
import CommonButton from "../../Button/CommonButton";
import banner from '../../../assets/img/content/finance-bank_banner.png';
import info from '../../../assets/img/content/finance-bank_info.png';

const StealthBankbook = () => {
  return (
    <Wrap>
      <img src={banner} alt='스텔스 통장' />
      <CommonButton title='스텔스통장 가입하기' />
      <img src={info} alt='가입대상,예금종류,가입방법,제공서비스,적용금리,이자지급시기' />
    </Wrap>
  )
}
export default StealthBankbook;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 140px;
  > button {
    width: 24.6%;
    margin: 8px;
  }

  ${props => props.theme.window.tab} {
    padding: 0 20px 20px 20px;
    
  }
  ${props => props.theme.window.mobile} {
    > button {
      min-width: 50%;
      height: 35px;
      font-size: 14px;
      margin: 4px;
    }
  }
`;
