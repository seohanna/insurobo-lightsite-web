import React, { useCallback, useRef } from "react";
import styled, { css } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import play from "../../assets/icon/main/icon-play.png";
import pause from "../../assets/icon/main/icon-pause.png";
import more from "../../assets/icon/main/icon-moreRefresh.png";

const SlickSlider = ({ 
  children, 
  settings, 
  player,
  totalSlides,
  currentSlide,
  mobileGuide,
  width, 
  height,
  noneStyle,
  border,
  more
}) => {
  const sliderRef = useRef(null);

  const pause = () => {
    sliderRef.current.slickPause();
  };
  const previous = useCallback(() => sliderRef.current.slickPrev(), []);
  const next = useCallback(() => sliderRef.current.slickNext(), []);
  
  return (
    <Wrap>
      <StyledSlider
        width={width}
        height={height}
        ref={sliderRef}
        noneStyle={noneStyle}
        mobileGuide={mobileGuide}
        border={border}
        {...settings}
      >
        {children}
      </StyledSlider>
      {player && (
        <SliderPlayerGroup> 
          <button className='prev' onClick={previous} />
          <Paging currentSlide={currentSlide} totalSlides={totalSlides} />
          <button className='next' onClick={next} />
          <button className='pause' onClick={pause} />
        </SliderPlayerGroup>
      )}
      {more && (
        <MoreButton className='next' onClick={next}>
          <span />다양한 정보 더보기
        </MoreButton>
      )}
    </Wrap>
  )
}
export default SlickSlider;

const Wrap = styled.div`
  position: relative;
  
`;

const StyledSlider = styled(Slider)`
  width: ${props => props.width};
  height: ${props => props.height};
  overflow: hidden;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.07);
  border-radius: 15px;
  
  ${props => props.noneStyle && css`
    box-shadow: none;
    border-radius: 0 !important;
  `}

  ${(props) => props.theme.window.mobile} {
    border-radius: 10px;
    .slick-dots {
      text-align: start;
      padding: 0 27px;
      bottom: 4vw;
      > li {
        width: 10px;
        height: 10px;
        margin: 0;
      }
      > li > button::before {
        width: 10px;
        height: 10px;
        font-size: 6px;
        padding: 0;
        color: #FFFFFF;
        opacity: 1;
      }
      > li.slick-active > button::before {
        color: #2EA5FF;
      }
    }

    ${props => props.border && css`
      border: 1px solid #69BEFF;
    `}

    ${props => props.mobileGuide && css`
      background-color: #f8f9fa;
      padding: 20px 0 70px 20px;
    `}
  }
`;

//재생버튼은 px로 고정해야함
const SliderPlayerGroup = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > button {
    display: block;
    width: 36px;
    height: 36px;
    background-color: rgba(0, 0, 0, 0.30);
    border-radius: 6px;
    margin-right: 12px;
    background-image: url(${play});
    background-repeat: no-repeat;
    background-position: calc(50% - 3px);
    &.next {
      transform: rotate(-180deg);
    }
    &.pause {
      background-image: url(${pause});
      background-position: center;
    }
  }
`;

const MoreButton = styled.div`
  max-width: 100%;
  margin: 0 24px;
  height: 46px;
  border-radius: 5px;
  border: 1.5px solid #2EA5FF;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2D2D2D;
  > span {
    width: 24px;
    height: 24px;
    background-image: url(${more});
    margin-right: 6px;
  }
`;



const Paging = ({ currentSlide, totalSlides }) => {
  return (
    <Page>{currentSlide + 1} / {totalSlides}</Page>
  )
}

const Page = styled.h2`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: #FFFFFF;
  font-family: 'SCoreDream';
  margin-right: 12px;
`;