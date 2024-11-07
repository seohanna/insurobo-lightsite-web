import React from "react";
import styled from "styled-components";
import Input from "../../Input";
import RadioInput from "../../Input/RadioInput";
import SelectInput from "../../Input/SelectInput";
import TextArea from "../../Input/TextArea";
import CheckInput from "../../Input/CheckInut";
import CommonButton from "../../Button/CommonButton";

const CounselingRequestForm = () => {
  const gender = [
    {
      id: 'gender-m',
      value: '1',
      label: '남'
    },
    {
      id: 'gender-w',
      value: '2',
      label: '여'
    },
  ]
  return (
    <FormWrap>
      <form id='formCounselling' method="post">
        <Table>
          <tr>
            <th>이름<span>*</span></th>
            <td><Input type='text' name='userName' placeholder='이름을 입력해 주세요.'/></td>
            <th>성별<span>*</span></th>
            <td><RadioInput data={gender} name='userGender' /></td>
          </tr>
          <tr>
            <th>휴대폰번호<span>*</span></th>
            <td><Input type='number' name='telephone' placeholder='‘-’ 없이 번호만 입력해 주세요.'/></td>
            <th>생년월일<span>*</span></th>
            <td><Input type='number' name='userBirthday' placeholder='예)19990101'/></td>
          </tr>
          <tr>
            <th>이메일주소<span>*</span></th>
            <td><Input type='email' name='userEmail' placeholder='답변을 위해 정확한 이메일주소를 입력해 주세요.'/></td>
            <th>상담 상품<span>*</span></th>
            <td>
              <SelectInput name='gdsCl' placeholder='선택'>
                <option value='INSU001'>보험상품</option>
                <option value='INSU002'>대출</option>
                <option value='INSU003'>기타</option>
              </SelectInput>
            </td>
          </tr>
          <tr>
            <th colSpan='1'>상담 내용<span>*</span></th>
            <td colSpan='3'>
              <TextArea
                name='content'
                placeholder='상담 내용을 정확히 입력해주시면 좀더 자세한 상담이 가능합니다.'
              />
              <p>0 / 2000자</p>
            </td>
          </tr>
        </Table>
        <PrivacyWrap>
          <CheckInput name='userPrivacy' label='개인정보 수집 및 이용에 동의합니다.' />
          <RoundBox>
            <p>소비자 권인보호에 관한 사항</p>
            <p>본 동의를 거부하시는 경우에는 보험계약 상담 등 관련 서비스가 일부 제한될 수 있고, 본 동의서에 의한 개인(신용)정보 조회는 귀하의 신용등급에 영향을 주지 않습니다.</p>
          </RoundBox>
          <ListWrap>
            <li>개인(신용)정보의 수집/이용 목적 : 온라인 문의사항 신청을 처리하기 위하여 신청내용 및 제공정보의 일부 또는 전부를 실무부서에 제공하거나 조회하기 위함</li>
            <li>수집하려는 개인정보 항목 : 이름, 성별, 연락처, 생년월일</li>
            <li>개인정보의 보유 및 이용기간 : <span>동의일로부터 3년</span></li>
            <li>귀하는 동의를 거부하실 수 있으나, 거부할 경우 처리결과 회신을 받지 못하실 수 있습니다.</li>
          </ListWrap>
        </PrivacyWrap>
        <ButtonWrap>
          <CommonButton title='신청하기' />
        </ButtonWrap>
      </form>
    </FormWrap>
  )
}
export default CounselingRequestForm;

const FormWrap = styled.div``;

const Table = styled.table`
  width: 100%;
  border-top: 1px solid #f1f3f5;
  border-collapse: collapse;
  th {
    text-align: left;
    width: 170px;
    height: 68px;
    background-color: #f8f9fa;
    padding: 15px 20px;
    color: #495057;
    border-bottom: 1px solid #f1f3f5;
    > span {
      font-weight: bold;
      line-height: 1.38;
      color: #e50113;
    }
  }
  td {
    padding: 10px;
    border-bottom: 1px solid #f1f3f5;
    > p {
      text-align: right;
      margin-top: 14px;
      line-height: 1.38;
      color: #adb5bd;
    }
  }

  ${props => props.theme.window.mobile} {
    border-top: none;
    display: flex;
    flex-direction: column;
    tr > * {
      display: flex;
      width: 100%;
      border-bottom: none;
      padding: 0;
    }
    th {
      background-color: #FFFFFF;
      height: auto;
    }
    td {
      margin: 10px 0 20px;
      flex-direction: column;
      > div {
        width: 100%;
        > div {
          width: 50%;
        }
      }
      > p {
        font-size: 14px;
      }
    }
  }
`;

const PrivacyWrap = styled.div`
  margin-top: 22px;
  ${props => props.theme.window.mobile} {
    margin-top: 0;
  }
`;

const RoundBox = styled.div`
  margin: 12px 2px;
  line-height: 1.43;
  padding: 20px;
  border-radius: 12px;
  background-color: #f8f9fa;
  > p {
    font-size: 14px;
    font-weight: 700;
    &:last-child {
      font-weight: 400;
      margin-top: 10px;
    }
  }
  ${props => props.theme.window.mobile} {
    margin: 12px 0 20px;
  }
`;

const ListWrap = styled.ul`
  font-size: 14px;
  > li {
    position: relative;
    padding-left: 14px;
    line-height: 1.38;
    color: #495057;
    margin-top: 6px;
    > span {
      font-weight: 700;
    }
    &:first-child {
      margin-top: 0;
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 7px;
      width: 4px;
      height: 4px;
      border-radius: 2px;
      background-color: #212529;
    }
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;
