import React from "react";
import styled from "styled-components";
import Layout from "../layout";
import SubHeader from "../layout/Header/SubHeader";
import { useLocation } from "react-router-dom";
import PageTitle from "../components/Content/PageTitle";
import InnerBox from "../components/Content/InnerBox";
import NoticeList from "../components/Content/Support/NoticeList";
import FaqList from "../components/Content/Support/FaqList";
import MobileGuide from "../components/Content/Support/MobileGuide";
import CounselingRequestForm from "../components/Content/Support/CounselingRequestForm";
const Support = () => {
  const data = [
    {
      id: 1,
      title: '공지사항',
      value: 'noticeList'
    },
    // {
    //   id: 2,
    //   title: '자주 묻는 질문',
    //   value: 'faqList'
    // },
    // {
    //   id: 3,
    //   title: '상담신청',
    //   value: 'counselingRequestForm'
    // },
    // {
    //   id: 4,
    //   title: '모바일 서비스 안내',
    //   value: 'mobileGuide'
    // },
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
          {location.pathname === `/support/noticeList` ? (
            <NoticeList />
          ) : location.pathname === `/support/faqList` ? (
            <FaqList />
          ) : location.pathname === `/support/counselingRequestForm` && (
            <CounselingRequestForm />
          )}
        </InnerBox>
        {location.pathname === `/support/mobileGuide` && (
          <MobileGuide />
        )}
      </Content>
    </Layout>
  )
}
export default Support;

const Content = styled.div`
  padding-bottom: 140px;
  ${(props) => props.theme.window.mobile} {
    padding-bottom: 0;
  }

`;
