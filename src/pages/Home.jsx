import React from "react";
import useWindowSize from "../hooks/useWindowSize";
import Layout from "../layout";
import ContentInner from "../layout/ContentInner";
import MainBanner from "../components/Main/MainBanner";
import ProductMiniSlider from "../components/Main/ProductMiniSlider";
import ButtonBanner from "../components/Main/ButtonBanner";

import speaker from "../assets/icon/main/icon-mainButton_speaker.png";
import ProductBanner from "../components/Main/ProductBanner";
import InfoPlace from "../components/Main/InfoPlace";


const Home = () => {
  const { width } = useWindowSize();
  return (
    <Layout>
      <MainBanner />
      <ContentInner>
        <ProductMiniSlider />
        <ButtonBanner
          title='풍수해보험 간편조회 보험료 알아보기'
          text={width > 768 ? `이름과 사업자등록번호 확인 후 납입 보험료를 바로 알아보세요.` : `이름, 사업자등록번호만으로 보험료 확인!`}
          label='HOT!'
          bgImg={speaker}
          link='https://insurobo.com/dmgSF/contractor'
        />
       <ProductBanner />
      </ContentInner>
      <InfoPlace />
      {/* <ContentInner>
        <MainInfo />
      </ContentInner> */}
    </Layout>
  )
}

export default Home;


