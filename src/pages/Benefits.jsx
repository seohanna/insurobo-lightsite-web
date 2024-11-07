import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../layout";
import SubHeader from "../layout/Header/SubHeader";
import SmallbizSupportList from "../components/Content/Benefits/SmallbizSupportList";
import SmallbizTaxRebate from "../components/Content/Benefits/SmallbizTaxRebate";
import CivilSafety from "../components/Content/Benefits/CivilSafety";
import EventList from "../components/Content/Benefits/EventList";
import { styled } from "styled-components";
import PageTitle from "../components/Content/PageTitle";
import InnerBox from "../components/Content/InnerBox";
import SmallbizSupportDetail from "../components/Content/Benefits/SmallbizSupportDetail";
import EventDetail from "../components/Content/Benefits/EventDetail";

const Benefits = () => {
  const data = [
    {
      id: 1,
      title: '소상공인 지원사업',
      value: 'smallbizSupportList'
    },
    {
      id: 2,
      title: '소상공인 세금환급',
      value: 'smallbizTaxRebate'
    },
    {
      id: 3,
      title: '시민안전보험',
      value: 'civilSafety'
    },
    {
      id: 4,
      title: '이벤트',
      value: 'eventList'
    },
  ];
  const location = useLocation();
  const divide =  location.pathname.split('/')[2];
  const detailPageTitle = location.pathname.split('/')[2] === 'smallbizSupportDetail' && '소상공인 지원사업'
  return (
    <Layout>
      <SubHeader data={data} />
      <Content>
        {location.pathname === '/benefits/smallbizSupportDetail' ? <PageTitle title={detailPageTitle} /> : <>
          {data.filter((path) => path.value === divide).map((dt) => (
            <PageTitle title={dt.title} key={dt.id} />
          ))}
        </>}
        <InnerBox>
          {location.pathname === `/benefits/smallbizSupportList` ? (
            <SmallbizSupportList /> ) : 
            location.pathname === `/benefits/smallbizSupportDetail` ? (
              <SmallbizSupportDetail /> ) : 
            location.pathname === `/benefits/smallbizTaxRebate` ? (
              <SmallbizTaxRebate /> ) :
            location.pathname === `/benefits/civilSafety` ? (
              <CivilSafety />) :
            location.pathname === `/benefits/eventList` ? (
              <EventList />) : 
            location.pathname === `/benefits/eventDetail` && (
              <EventDetail />
            )}
        </InnerBox>
      </Content>
    </Layout>
  )
}
export default Benefits;

const Content = styled.div`
  padding-bottom: 140px;

  ${(props) => props.theme.window.mobile} {
    padding-bottom: 20px;
  }
`;