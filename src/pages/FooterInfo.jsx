import React from "react";
import { styled } from "styled-components";
import SubHeader from "../layout/Header/SubHeader";
import { useLocation } from "react-router-dom";
import PageTitle from "../components/Content/PageTitle";
import Layout from "../layout";
import InnerBox from "../components/Content/InnerBox";
import TermsOfUser from "../layout/Footer/Info/TermsOfUse";
import PrivacyPolicy from "../layout/Footer/Info/PrivacyPolicy";

const FooterInfo = () => {
  const data = [
    {
      id: 1,
      title: '이용약관',
      value: 'termsOfUse'
    },
    {
      id: 1,
      title: '개인정보처리방침',
      value: 'privacyPolicy'
    }
  ];

  const location = useLocation();
  const divide =  location.pathname.split('/')[2];

  return (
    <Layout>
      <SubHeader data={data} />
      <Content>
        {data.filter((path) => path.value === divide).map((dt) => (
          <PageTitle title={dt.title} id={dt.id} className={dt.id === 4 ? 'none' : ''} />
        ))}
        <InnerBox>
          {location.pathname === `/layout/termsOfUse` ? (
            <TermsOfUser />
          ) : location.pathname === `/layout/privacyPolicy` && (
            <PrivacyPolicy />
          )}
        </InnerBox>
      </Content>
      
    </Layout>
  )
}
export default FooterInfo;

const Content = styled.div`
  padding-top: 20px;
  * {
    color: #212529;
  }
`;
