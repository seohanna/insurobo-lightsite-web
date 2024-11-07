import React, { useState } from "react";
import InnerBox from "../../InnerBox";
import { styled } from "styled-components";
import { years } from "../../../../api/data";
import TopText from "./TopText";

const History = () => {
  const [openTab, setOpenTab] = useState(1);
  
  return (
    <InnerBox>
      <TopText text='작은 변화를 모아 혁신을 이루어내기 위한 인슈로보의 여정' />
      <TabContentWrap>
        <TabMenu>
          {years.map((dt) => (
            <li className={openTab === dt.id ? 'selected': ''} key={dt.id}>
              <button onClick={() => setOpenTab(dt.id)}>{dt.year}</button>
            </li>
          ))}
        </TabMenu>
        <div dangerouslySetInnerHTML={{__html: years.filter((dt) => dt.id === openTab).map((result) => result.content)}} />
      </TabContentWrap>
    </InnerBox>
  );
}
export default History;



const TabContentWrap = styled.div`
  > div {
    width: 700px;
    margin: 40px auto 0;
    .list-history:not(:first-child) {
      margin-top: 27px;
    }
    .list-history {
      position: relative;
      padding-left: 70px;
      padding-top: 7px;
      > dt {
        font-size: 30px;
        font-weight: bold;
        line-height: 1.2;
        color: #2ea5ff;
        position: absolute;
        top: 0;
        left: 0;
      }
      > dd {
        .list-dot {
          > li {
            position: relative;
            padding-left: 14px;
            line-height: 1.38;
            color: #495057;
            &::before {
              content: '';
              position: absolute;
              left: 0;
              top: 9px;
              width: 4px;
              height: 4px;
              border-radius: 50%;
              background-color: #212529;
            }
          }
        }
      }
    }
  }

  ${(props) => props.theme.window.mobile} {
    > div {
      width: 100%;
      margin: 30px 0;
      .list-history:not(:first-child) {
        margin-top: 20px;
      }
      .list-history {
        padding-left: 50px;
        padding-top: 5px;
        > dt {
          font-size: 24px;
        }
        > dd {
          .list-dot {
            > li {
              font-size: 14px;
              &::before {
                top: 6px;
              }
            }
          }
        }
      }
    }
  }
`;

const TabMenu = styled.ul`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  height: 24px;
  > li {
    margin-left: 20px;
    padding-left: 20px;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 1px;
      height: 10px;
      margin-top: -5px;
      background-color:#ced4da;
    }
    > button {
      font-size: 18px;
      line-height: 1.33;
      color: #868e96;
    }
    &.selected {
      > button {
        color: #212529;
        font-weight: 700;
      }
    }
    &:first-child {
      margin-left: 0;
      padding-left: 0;
      &::after {
        content: none;
      }
    }
  }
  ${(props) => props.theme.window.mobile} {
    > li {
      margin-left: 16px;
      padding-left: 16px;
      > button {
        font-size: 16px;
      }
    }
  }
`;




