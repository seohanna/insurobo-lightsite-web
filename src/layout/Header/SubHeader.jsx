import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import ContentInner from "../ContentInner";
import home from "../../assets/icon/common/icon-subHeader_home.png";
import arrow from "../../assets/icon/common/icon-subHeader_arrow.png";

const SubHeader = ({ data, selected }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const url = location.pathname;
  const name =  url.split('/')[1];
  
  const goPage = (e) => {
    navigate(e.target.value)
  }
  return (
    <Wrap>
      <ContentInner>
        <ul>
          <li><img src={home} alt="home" /></li>
          <li>
            { 
              name === 'finance' ? '금융' :
              name === 'benefits' ? '혜택' :
              name === 'support' ? '고객지원' :
              name === 'company' ? '회사소개' :
              name === 'layout' && 'Footer'
            }
          </li>
          <li>
            <SubMenu
              onChange={(e) => goPage(e)}
            >
              {data.map((dt) => (
                <option key={dt.id} value={dt.value} selected={selected ? selected : dt.value === url.split('/')[2]}>
                  {dt.title}
                </option>
              ))}
            </SubMenu>
          </li>
        </ul>
      </ContentInner>
    </Wrap>
  )
}
export default SubHeader;

const Wrap = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  background-color: #2EA5FF;
  ul {
    display: flex;
    align-items: center;
    
    > li {
      position: relative;
      padding-right: 30px;
      margin-right: 10px;
      font-size: 14px;
      color: #FFFFFF;
      font-weight: 400;
      height: 44px;
      display: flex;
      align-items: center;
      > img {
        width: 26px;
      }
 
    }
    > li::after {
      content: '';
      position: absolute;
      right: 0;
      top: 12px;
      width: 20px;
      height: 20px;
      background-image: url(${arrow});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
    > li:last-child {
      padding-right: 0;
      margin-right: 0;
    }
    > li:last-child::after {
      content: none;

    }
  }
  ${props => props.theme.window.mobile} {
    height: 1px;
    > div {
      display: none;
    }
  }
`;


const SubMenu = styled.select`
  width: 213px;
  font-weight: 400;
  background: none;

  option {
    color: #000;
  }
`;

