import React, { useRef, useCallback, useState } from "react";
import styled from "styled-components";
import open from "../../assets/icon/content/icon-accordion-open.png";
import close from "../../assets/icon/content/icon-accordion-close.png";

function Accordion(props) {
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const [isCollapse, setIsCollapse] = useState(false);

  const handleButtonClick = useCallback(
    (event) => {
      event.stopPropagation();
      if (childRef.current === null || childRef.current === null) {
        return;
      }
      if (childRef.current.clientHeight > 0) {
        childRef.current.style.height = "0";
        childRef.current.classList.remove('open');
        parentRef.current.classList.remove('open');
      } else {
        childRef.current.style.height = "auto";
        childRef.current.classList.add('open');
        parentRef.current.classList.add('open');
      }
      setIsCollapse(!isCollapse);
    },
    [isCollapse]
  );

  const childRefHeight = childRef.current?.style.height ?? "0px";
  const buttonImg = childRefHeight === "0px" ? close : open;

  return (
    <Container key={props.key} ref={parentRef}>
      <Header onClick={handleButtonClick}>
        <p><span>Q.</span>{props.title}</p>
        <Button style={{ backgroundImage: `url(${buttonImg})`}}/>
      </Header>
      <ContentsWrapper ref={childRef}>
        <Contents dangerouslySetInnerHTML={{__html: props.contents }}/>
      </ContentsWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  background-color: #f8f9fa;
  border-radius: 12px;
  margin-top: 10px;
  padding: 20px;
  border: 1px solid #f8f9fa;
  &:first-child {
    margin-top: 0;
  }
  &.open {
    border-color: #384cff;
    background-color: #FFFFFF;
  }
  ${(props) => props.theme.window.mobile} {
    padding: 16px;
    border-radius: 8px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  > p {
    color: #212529;
    > span {
      font-size: 24px;
      font-weight: bold;
      color: #212529;
      margin-right: 10px;
    }
  }
  ${(props) => props.theme.window.mobile} {
    position: relative;
    padding-right: 36px;
    
    > p {
      font-size: 14px;
      position: relative;
      padding-left: 47px;
      > span {
        font-size: 20px;
        position: absolute;
        left: 16px;
      }
    }
  }

`;

const Button = styled.div`
  width: 36px;
  height: 36px;
  background-size: contain;
  background-repeat: no-repeat;
  ${(props) => props.theme.window.mobile} {
    position: absolute;
    right: 0;
  }
`;

const ContentsWrapper = styled.div`
  height: 0;
  width: inherit;
  overflow: hidden;
  transition: height 0.35s ease, background 0.35s ease;
  &.open {
    border-top: 1px solid #f1f3f5;
    margin-top: 28px;
    padding: 24px 0 0 74px;
    position: relative;
    &::before {
      content: 'A.';
      font-size: 24px;
      line-height: 32px;
      font-weight: bold;
      color: #384cff;
      position: absolute;
      top: 19px;
      left: 40px;
    }
  }
  ${(props) => props.theme.window.mobile} {
    &.open {
      margin-top: 16px;
      padding: 16px 0 0 47px;
      &::before {
        font-size: 20px;
        top: 7px;
        bottom: 0;
        left: 15px;
        line-height: 32px;
      }
    }
  }
`;

const Contents = styled.div`
  > p {
    color: #495057;
    font-weight: 400;
  }
  ${(props) => props.theme.window.mobile} {
    > p {
      font-size: 14px;
    }
  }
`;

export default React.memo(Accordion);
