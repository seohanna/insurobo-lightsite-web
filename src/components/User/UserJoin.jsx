import React from "react";
import styled from "styled-components";
import Input from "../Input";
import SubTitle from "./SubTitle";
import CheckInput from "../Input/CheckInut";
import { interest } from "../../api/data";
import CommonButton from "../Button/CommonButton";
import RadioInput from "../Input/RadioInput";
import questionMark from "../../assets/icon/common/icon-date-info.png";

const UserJoin = () => {
  const expiration = [
    {
      id: 'expire001',
      value: '001',
      label: '회원탈퇴시'
    },
    {
      id: 'expire002',
      value: '002',
      label: '1년'
    },
    {
      id: 'expire003',
      value: '003',
      label: '3년'
    },
  ]
  return (
    <Wrap>
      <SubTitle title='회원정보를 입력해 주세요.' />
      <form>
        <Table>
          <tr>
            <th>아이디</th>
            <td>
              <Input 
                type='text' 
                name='userId' 
                placeholder='아이디(이메일)을 입력해 주세요.' 
              />
            </td>
          </tr>
          <tr>
            <th>비밀번호</th>
            <td>
              <Input 
                type='password' 
                name='pwd' 
                placeholder='영문 숫자, 특수문자를 조합해 8자리 이상 16자리 이하로 입력해주세요.' 
              />
            </td>
          </tr>
          <tr>
            <th>비밀번호 확인</th>
            <td>
              <Input 
                type='text' 
                name='pwdCheck' 
                placeholder='비밀번호를 다시 한번 입력해 주세요.' 
              />
            </td>
          </tr>
          <tr>
            <th>이름</th>
            <td>
              <Input 
                type='text' 
                name='userName' 
                placeholder='이름을 입력해 주세요.' 
              />
            </td>
          </tr>
          <tr>
            <th>휴대폰 번호</th>
            <td>
              <Input 
                type='text' 
                name='telephone' 
                placeholder='휴대폰 번호를 입력해 주세요.(숫자만 입력)' 
              />
              <button>인증번호</button>
            </td>
          </tr>
          <tr>
            <th>추천인</th>
            <td>
              <Input
                type='text' 
                name='referenceCode' 
                placeholder='추천인 코드를 입력하세요.' 
              />
            </td>
          </tr>
        </Table>
        <SubTitle title='관심정보를 선택해 주세요.' />
        <InterestWrap>
          {interest.map((dt, index) => (
            <CheckInput
              value={dt.cdId}
              label={dt.cdNm} 
              name={`interest${index}`} 
              interest0 key={dt.cdId}
              className='user'
            />
          ))}
        </InterestWrap>
        <PersonalInfoWrap>
          <CheckInput label='모두 확인하였으며 동의합니다.' name='chkAll' />
          <ul>
            <li>
              <p>
                전체 동의에는 필수 및 선택 정보에 대한 동의가 포함되어 있으며, 개별적으로 동의를 선택 하실 수 있습니다.
                <br />
                선택 항목에 대한 동의를 거부하시는 경우에도 서비스 이용이 가능합니다.
              </p>
            </li>
            <li>
              <CheckInput name='consentInsurb' label='[필수] 인슈로보플러스 이용약관 동의' className='user' />
            </li>
            <li>
              <CheckInput name='consentCollect' label='[필수] 개인정보 수집 및 이용 동의' className='user'/>
            </li>
            <li>
              <CheckInput name='consentThirdparty' label='[필수] 개인정보 제3자 제공 동의' className='user' />
            </li>
            <li>
              <CheckInput name='consentMarketing' label='[선택] 마케팅 목적의 개인정보 수집 및 이용 동의' className='user' />
            </li>
            <li>
              <CheckInput name='consentReceipt' label='[선택] 광고성 정보 수신 동의' className='user' />
              <ul>
                <li>
                  <CheckInput name='receiptEmail' label='[선택] 이메일 수신 동의' className='no-line user' />
                </li>
                <li>
                  <CheckInput name='receiptSms' label='[선택] SMS 수신 동의' className='no-line user' />
                </li>
                <li>
                  <CheckInput name='receiptPush' label='[선택] 앱 푸시 수신 동의' className='no-line user' />
                </li>
              </ul>
            </li>
          </ul>
        </PersonalInfoWrap>
        <RadioInputWrap>
          <p>개인정보 유효기간</p>
          <RadioInput name='rdoExpire' data={expiration} />
          <div>
            <span>* 회원탈퇴시 - 탈퇴 전까지 <b>휴면 전환 걱정 NO</b> 인슈로보 평생회원이 되어보세요!</span> 
          </div>
        </RadioInputWrap>
        <ButtonWrap>
          <CommonButton title='가입하기' />
        </ButtonWrap>
      </form>
    </Wrap>
  )
}
export default UserJoin;

const Wrap = styled.div`

`;

const Table = styled.table`
  width: 100%;
  
  th {
    width: 140px;
    padding: 15px 20px 15px 0;
    text-align: left;
  }
  td {
    padding: 10px;
    display: flex;

    > button {
      display: block;
      min-width: 120px;
      max-width: 120px;
      padding: 10px;
      margin-left: 10px;
      background-color: #ced4da;
      color: #FFFFFF;
      font-size: 16px;
      border-radius: 8px;
    }
  }
  ${(props) => props.theme.window.mobile} {
    tr > * {
      display: block;
    }
  }
`;

const InterestWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  > div {
    margin: 10px 0 0 30px;
    &:first-child {
      margin-left: 0;
    }
  }
`;

const PersonalInfoWrap = styled.div`
  padding-top: 30px;
  margin-top: 60px;
  border-top: 1px solid #f1f3f5;
  label {
    font-size: 14px;
  }
 
  > ul {
    padding: 12px 0 0 34px;
    > li {
      margin-top: 14px;
      > p {
        color: #212529;
        font-weight: 400;
      }
      > ul {
        padding: 16px 0 0 34px;
        > li {
          margin-top: 14px;
          &:first-child {
            margin-top: 0;
          }
          
        }
      }
    }
  }
`;

const RadioInputWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 30px;
  > p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
    height: 68px;
    padding: 15px 20px 15px 0;
    width: 180px;
    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 24px;
      background-image: url(${questionMark});
      background-size: contain;
      margin-left: 10px;
    }
  }
  > div {
    padding: 10px;
    height: 68px;
    line-height: 48px;
    > span {
      font-weight: 400;
      > b {
        font-weight: 700;
      }
    }
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;