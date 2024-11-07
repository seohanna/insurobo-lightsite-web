import React from "react";
import { useLocation } from "react-router-dom";
import InnerBox from "../components/Content/InnerBox";
import Layout from "../layout";
import Login from "../components/User/Login";
import UserJoin from "../components/User/UserJoin";
import styled from "styled-components";

const User = () => {
  const location = useLocation();
  return (
    <Layout>
      <Content>
        <InnerBox small>
          {location.pathname === '/user/login' ? (
            <>
              <Login />
            </>

          ) : location.pathname === '/user/userJoin' && (
            <>
              <UserJoin />
            </>
          )}
        </InnerBox>
      </Content>
    </Layout>
  )
}

export default User;

const Content = styled.div`
  padding-bottom: 140px;
`;


