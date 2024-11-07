import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Layout from "../layout";
import SubHeader from "../layout/Header/SubHeader";
import SmallbizLoan from "../components/Content/Finance/SmallbizLoan";
import SmallbizCard from "../components/Content/Finance/SmallbizCard";
import StealthBankbook from "../components/Content/Finance/StealthBankbook";
import PageTitle from "../components/Content/PageTitle";

const Finance = () => {
  const data = [
    {
      id: 1,
      title: '소상공인 전용대출',
      value: 'smallbizLoan'
    },
    {
      id: 2,
      title: '소상공인 신용카드',
      value: 'smallbizCard'
    },
    {
      id: 3,
      title: '광주은행 Wa뱅크 스텔스통장',
      value: 'stealthBankbook'
    },
  ];
  const location = useLocation();
  const divide =  location.pathname.split('/')[2];

  return (
    <Layout>
      <SubHeader data={data} />
      <Content>
        {data.filter((path) => path.value === divide).map((dt) => (
          <PageTitle title={dt.title} id={dt.id} />
        ))}
        {location.pathname === `/finance/smallbizLoan` ? (
          <SmallbizLoan /> 
        ) : location.pathname === `/finance/smallbizCard` ? (
          <SmallbizCard />
        ) : location.pathname === `/finance/stealthBankbook` && (
          <StealthBankbook />
        )}
      </Content>
    </Layout>
  )
}
export default Finance;

const Content = styled.div``;