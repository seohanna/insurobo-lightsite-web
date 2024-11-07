import React from "react";
import styled from "styled-components";


const Board = ({ children }) => {
  return (
    <BoardWrap>
      <ul>
        {children}
      </ul>
    </BoardWrap>
  );
}

export default Board;

const BoardWrap = styled.div`
  > ul {
    > li {
      &:first-child {
        margin-top: 0;
      }
      margin-top: 10px;
      > button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: auto;
        padding: 20px;
        border-radius: 12px;
        background-color: #f8f9fa;
        border: 1px solid #f8f9fa;
        text-align: left;
        &:hover {
          border-color: #384cff;
        }
        > div {
          display: flex;
          align-items: center;
        }
        .recruit {
          display: flex;
          justify-content: space-between;
          width: 150px;
          &.single {
            justify-content: center;
          }
        }
        .recruit .type {
          width: 70px;
          padding: 0;
          background-color:#868e96;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 16px;
        }
        .type {
          display: flex;
          width: 100px;
          height: 34px;
          padding: 0 30px;
          line-height: 34px;
          text-align: center;
          align-items: center;
          justify-content: center;
          background-color:#e9ecef;
          color: #495057;
          border-radius: 6px;
        }
        .type.blue {
          background-color: #2ea5ff;
        }
        .type.notice {
          background-color: #384cff;
          color: #FFFFFF;
          font-weight: 700;
        }

        .title {
          margin-left: 20px;
          color: #212529;
          text-align: left;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          .new {
            display: inline-block;
            margin-left: 10px;
            margin-top: -1px;
            font-weight: bold;
            line-height: 1.38;
            color: #e50113;
          }
        }
        .date {
          margin-left: 20px;
          color: #adb5bd;
        }
       
      }
    }
  }

  ${(props) => props.theme.window.mobile} {
    ul {
      > li {
        > button {
          padding: 16px;
          border-radius: 8px;
          flex-direction: column;
          align-items: flex-start;
          > div {
            flex-direction: column;
            align-items: flex-start;
          }
          .recruit {
            width: 100px;
            &.single {
              width: auto;
            }
          }
          .recruit .type {
            width: 45px;
            font-size: 12px;
          }
          .type {
            width: auto;
            height: 26px;
            line-height: 26px;
            min-width: 0;
            padding: 0 12px;
          }
          .title {
            margin-left: 0;
            margin-top: 10px;
   
          }
          .date {
            margin-left: 0;
            align-self: flex-end;
            margin-top: 10px;
          }
        }
      }
    }
  }
`;
