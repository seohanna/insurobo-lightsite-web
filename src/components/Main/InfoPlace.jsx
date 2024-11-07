import React from 'react';
import styled from 'styled-components';
import MainTitle from './MainTitle';
import InfoSlider from '../Slider/InfoSlider';
import ContentInner from '../../layout/ContentInner';


function InfoPlace() {
  return (
    <Wrap>
      <ContentInner>
        <MainTitle
          title='알아두면 좋은 소상공인 정보마당'
          text={'혜택이 쏟아지는 모든 정보를 한 눈에, \n원하는 정보를 골라서!'}
          icon
        />
      </ContentInner>
      <InfoSlider />
    </Wrap>
  );
}

export default InfoPlace;

const Wrap = styled.div`
  padding-top: 40px;
  background-color: #FCFCFC;
  font-family: 'Noto Sans KR', sans-serif;
  .slick-slide {
    margin: 30px 10px;
  }

  ${props => props.theme.window.mobile} {
    padding: 20px 0;

    .slick-slide {
      margin: 0;
      padding: 0 24px;
    }
    .slick-vertical {
      margin: 20px 0;
      
    }
  }
`;