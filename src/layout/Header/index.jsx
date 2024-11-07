import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import useWindowSize from "../../hooks/useWindowSize";
import ContentInner from "../ContentInner";
import logo from "../../assets/img/common/mainLogo.jpg";
import toggle from "../../assets/icon/common/icon-header_toggle.png";
import home from "../../assets/icon/common/icon-header_home.png";
import close from "../../assets/icon/common/icon-header_close.png";

const Header = () => {
  const { width } = useWindowSize();
  const [open, setOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    setOpen(false)
  }, [location.pathname]);

  function goPage(link) {
    if (width < 768) {
      setOpen(false);
    } 
    navigate(link);
  }

  return (
    <Wrap>
      <ContentInner>
        <Logo onClick={() => goPage('/')} open={open} />
        <Gnb open={open}>
          {!open ? (
            <ToggleButton onClick={() => setOpen(true)} />
          ) : (
           <CloseButton onClick={() => setOpen(false)} />
          )
          }
          <div className="toggle-menu">
            <Menu className={width > 768 ? 'hover-style' : ''}>
              <li onClick={() => setCurrentTab(1)} className={currentTab === 1 ? 'active' : ''}>
                금융
                <ul>
                  <li onClick={() => window.open('https://insuroboplus.com/home')}>인슈로보 보험 전체보기</li>
                  <li onClick={() => goPage('/finance/smallbizLoan')}>소상공인 전용대출</li>
                  <li onClick={() => goPage('/finance/smallbizCard')}>소상공인 전용카드</li>
                  <li onClick={() => goPage('/finance/stealthBankbook')}>광주은행 WA뱅크 스텔스통장</li>
                </ul>
              </li>
              <li onClick={() => setCurrentTab(2)} className={currentTab === 2 ? 'active' : ''}>
                혜택
                <ul>
                  <li onClick={() => goPage('/benefits/smallbizSupportList')}>소상공인 지원사업</li>
                  <li onClick={() => goPage('/benefits/smallbizTaxRebate')}>소상공인 세금환급</li>
                  <li onClick={() => goPage('/benefits/civilSafety')}>시민안전보험</li>
                  <li onClick={() => goPage('/benefits/eventList')}>이벤트</li>
                </ul>
              </li>
              {/* <li onClick={() => setCurrentTab(3)} className={currentTab === 3 ? 'active' : ''}>
                고객지원
                <ul>
                  <li onClick={() => goPage('/support/noticeList')}>공지사항</li>
                  <li onClick={() => goPage('/support/faqList')}>자주묻는질문</li>
                  <li onClick={() => goPage('/support/counselingRequestForm')}>상담신청</li>
                  <li onClick={() => goPage('/support/mobileGuide')}>모바일 서비스안내</li>
                </ul>
              </li> */}
              <li onClick={() => setCurrentTab(4)} className={currentTab === 4 ? 'active' : ''}>
                회사소개
                <ul>
                  <li onClick={() => goPage('/company/introduction')}>소개</li>
                  <li onClick={() => goPage('/company/rightPeople')}>인재상</li>
                  <li onClick={() => goPage('/company/recruitSystem')}>인사제도</li>
                  <li onClick={() => goPage('/company/recruitList')}>채용공고</li>
                </ul>
              </li>
            </Menu>
            {/* <User>
              <li onClick={() => goPage('/user/login')}>
                로그인
              </li>
              <li onClick={() => goPage('/user/userJoin')}>
                회원가입
              </li>
            </User> */}
          </div>
        </Gnb>
      </ContentInner>
    </Wrap>
  )
}

export default Header;

const Wrap = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  border-bottom: 1px solid #F0F0F0;
  div, ul {
    cursor: pointer;
  }
  > div {
    display: flex;
  }

  ${(props) => props.theme.window.mobile} {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 9999;
    background-color: #FFFFFF;
    padding: 15px 0;
    > div {
      justify-content: space-between;
    }
  }
`;

const Logo = styled.div`
  width: 209px;
  height: 46px;
  background-image: url(${logo});
  background-size: 170px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  align-self: center;

  ${(props) => props.theme.window.mobile} {
    width: 106px;
    height: 23px;
    background-size: contain;

    ${props => props.open && css`
      width: 24px;
      height: 24px;
      background-image: url(${home});
    `}
  }
`;

const Gnb = styled.div`
  width: 81.63793103448276%;
  .toggle-menu {
    display: flex;
    justify-content: space-between;
    > ul {
      display: flex;
      > li {
        display: flex;
        align-items: center;
        color: #2D2D2D;
        height: 94px;
        padding: 0 33px;
        box-sizing: border-box;
      }
    }
  }
  ${(props) => props.theme.window.mobile} {
    width: auto;
    .toggle-menu {
      display: none;
    }
    ${props => props.open && css`
      position: relative;
      .toggle-menu {
        background-color: #FCFCFC;
        display: block;
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 998;
        top: 55px;
        left: 0;
        > ul {
          display: block;
          .active {
            font-weight: 700;
          }
          > li {
            height: 47px;
            padding-left: 24px;
            color: #393939;
            font-weight: 400;
            > ul {
              width: 67.7%;
              
              > li {
                height: 47px;
                font-size: 14px;
                font-weight: 700;
                padding: 13px 0 14px 24px;
                color: #393939;
              }
            }
          }
        }
      }
    `}
    
  }
`;

const ToggleButton = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${toggle});
  background-repeat: no-repeat;
  background-position: center;
  display: none;
  ${(props) => props.theme.window.mobile} {
    display: block;
  }
`;

const CloseButton = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${close});
  background-repeat: no-repeat;
  background-position: center;
  display: none;
  ${(props) => props.theme.window.mobile} {
    display: block;
  }
`;

const Menu = styled.ul`
  &.hover-style {
    > li {
      > ul {
        display: none;
      }
    }
    > li:hover {
      font-weight: 700;
      color: #58A7E3;
      border-bottom: 1px solid #58A7E3;
      > ul {
        display: block;
        z-index: 999;
        > li:hover {
          background-color: #58A7E3;
          color: #FFFFFF;
        }
      }
    }
  }
  > li {
    position: relative;
    > ul {
      width: 162px;
      position: absolute; 
      top: 96px;
      transform: translateX(-33px);
      background-color: #FFFFFF;
      border-radius: 10px;
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.07);
      flex-direction: column;
      z-index: 999;
      overflow: hidden;
      > li {
        width: 100%;
        font-weight: 400;
        color: #545454;
        padding: 8px 0 8px 20px;
        font-size: 16px;
      }
    }
  }
  > li:first-child > ul {
    width: 233px;
    box-sizing: border-box;
  }
  > li:last-child > ul {
    width: 127px;
  }
  ${(props) => props.theme.window.mobile} {
    > li {
      > ul {
        display: none;
      }
    }
    > li:last-child > ul {
      width: 65%;
    }
    .active {
      background-color: #FFFFFF;
      font-weight: 700;
      > ul {
        position: fixed;
        display: block;
        border-radius: 0;
        transform: translateX(0);
        top: 55px;  
        right: 0;
        height: 100%;
        box-shadow: none;
      }
    }
  }

`;

// const User = styled.ul`

// `;

