import React from "react";
import styled from "styled-components";
import Input from "../Input";
import CheckInput from "../Input/CheckInut";
import CommonButton from "../Button/CommonButton";
import { useNavigate } from "react-router-dom";
import naver from "../../assets/icon/common/icon-login_naver.png";
import kakao from "../../assets/icon/common/icon-login_kakao.png";
import SubTitle from "./SubTitle";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <SubTitle title='로그인정보를 입력해주세요.' />
      <form>
        <Table>
          <tr>
            <th>아이디</th>
            <td>
              <Input 
                placeholder='아이디(이메일)을 입력해 주세요.'
                type='text'
                name='loginId'
              />
            </td>
          </tr>
          <tr>
            <th>비밀번호</th>
            <td>
              <Input 
                placeholder='비밀번호를 입력해주세요.'
                type='text'
                name='pwd'
              />
              <CheckWrap>
                <CheckInput name='chkSaveID' label='아이디 저장' className='user' />
                <CheckInput name='chkAuto' label='자동 로그인' className='user' />
              </CheckWrap>
            </td>
          </tr>
        </Table>
      </form>
      <ButtonWrap>
        <CommonButton title='로그인'/>
      </ButtonWrap>
      <MenuWrap>
        <ul>
          <li>아이디 찾기</li>
          <li>비밀번호 찾기</li>
        </ul>
        <button onClick={() => navigate('/user/userJoin')}>회원가입</button>
      </MenuWrap>
      <SocialLoginWrap>
        <p>SNS 로그인</p>
        <div>
          <button className="naver">NAVER로 로그인</button>
          <button className="kakao">KAKAO로 로그인</button>
        </div>
      </SocialLoginWrap>
    </Wrap>
  )
}
export default Login;

const Wrap = styled.div`
  margin-top: 10px;
`;

const Table = styled.table`
  width: 100%;
  tr > * {
    
    text-align: left;
    color: #495057;
  }
  th {
    width: 140px;
    padding: 23px 20px 15px 0;
  }
  td {
    padding: 10px;
  }
`;

const CheckWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 302px;
`;

const ButtonWrap = styled.div`
  > button {
    width: 100%;
    margin: 20px 0;
  }
`;
const MenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  > ul {
    display: flex;
    > li {
      line-height: 48px;
      font-size: 14px;
      font-weight: 400;
      color: #495057;
      text-decoration: underline;
      text-underline-position: under;
      &:last-child {
        margin-left: 16px;
        padding-left: 16px;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          width: 1px;
          height: 10px;
          margin-top: -5px;
          background: #ced4da;
        }
      }
    }
  }
  > button {
    background-color: #f1f3f5;
    color: #212529;
    min-width: 120px;
    padding: 0 10px;
    height: 48px;
    line-height: 48px;
    font-size: 16px;
    border-radius: 8px;
    font-weight: bold;
  }
`;

const SocialLoginWrap = styled.div`
  margin-top: 40px;
  > p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #868e96;
    font-weight: 400;
    margin-bottom: 30px;
    &::before {
      content: '';
      width: 289px;
      height: 1px;
      background: #f1f3f5;
    }
    &::after {
      content: '';
      width: 289px;
      height: 1px;
      background: #f1f3f5;
    }
  }
  > div {
    display: flex;
    justify-content: center;
    > button {
      text-indent: -99900%;
      width: 60px;
      height: 60px;
      background-size: contain;
      margin: 0 15px;
      &.naver {
        background-image: url(${naver});
      }
      &.kakao {
        background-image: url(${kakao});
      }
    }
  }
`;
