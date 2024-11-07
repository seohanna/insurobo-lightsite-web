import React from "react";
import { styled } from "styled-components";
import { faqList } from "../../../api/data";
import Accordion from "../../Accordion";
import MoreButton from "../../Button/MoreButton";

const FaqList = () => {
  return (
    <FaqListWrap>
      {faqList.map((dt) => (
        <Accordion key={dt.BASE_IDX} title={dt.TITIE} contents={dt.CONTENT} />
      ))}
      <MoreButton />
    </FaqListWrap>
  )
}
export default FaqList;


const FaqListWrap = styled.ul`
  > li {
    width: 100%;
    height: auto;
    padding: 2rem;
    border-radius: 1.2rem;
    background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
  }
`;

