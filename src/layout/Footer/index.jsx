import React from "react";
import styled from "styled-components";
import ContentInner from "../ContentInner";
import logo from "../../assets/img/common/mainLogo.jpg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <ContentInner>
        <Fnb>
          <li onClick={() => navigate('/company/introduction')}>회사소개</li> 
          <li onClick={() => navigate('/layout/privacyPolicy')}>개인정보처리방침</li>
          <li onClick={() => navigate('/layout/termsOfUse')}>이용약관</li>
        </Fnb>
        <ul>
          <li>(주)인슈로보 서울특별시 강남구 논현로 75길 10, 영창빌딩 4층</li>
          <li>사업자등록번호 690-87-01268</li>
          <li>대표자:서 민 대표번호: 070-4126-3333</li>
          <li>메일:info@insurobo.com</li>
        </ul>
        <CopyRight>
          <Logo />
          <p>⒞ INSUROBO All Rights Reserved.</p>
        </CopyRight>
      </ContentInner>
    </Wrap>
  )
}
export default Footer;

const Wrap =  styled.div`
  padding: 30px 0;
  border-top: 1px solid #F0F0F0;
  font-family: 'Noto Sans KR', sans-serif;
  div, li {
    font-size: 12px;
    font-weight: 400;
    color: #2D2D2D;
  }

  ${props => props.theme.window.mobile} {
    padding: 20px 0 40px;
    
  }
`;

const Fnb = styled.ul`
  display: flex;
  padding-bottom: 20px;
  > li {
    font-size: 14px;
    font-weight: 700;
    margin-right: 30px;
    cursor: pointer;
  }
  > li:last-child {
      margin-right: 0;
  }
`;

const Logo = styled.div`
  width: 170px;
  height: 35px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  ${props => props.theme.window.mobile} {
    width: 99.27px;
    height: 20.87px;
  }
`;

const CopyRight = styled.div`
  display: flex;
  align-items: center;
  padding-top: 30px;
  > div {
    margin-right: 20px;
  }
  > p {
    font-size: 14px;
    font-weight: 400;
    color: #2D2D2D;
  }
  ${props => props.theme.window.mobile} {
    padding-top: 20px;
    > div {
      margin-right: 9px;
    }
    > p {
      font-size: 12px;
    }
  }
`;