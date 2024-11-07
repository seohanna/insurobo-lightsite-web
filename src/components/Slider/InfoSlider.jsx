import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useWindowSize from "../../hooks/useWindowSize";
import { getBizSupportList } from "../../api/benefits";
import { dateFomat } from "../dateFomat";
import Slider from ".";
import { useNavigate } from "react-router-dom";

const InfoSlider = () => {
  const [data, setData] = useState([]);
  const today = dateFomat(new Date());
  useEffect(() => {
    getBizSupportList(1,10).then((res) => {
      console.log(res)
      setData(res.data.items)
    })
  }, []);
  const navigate = useNavigate();
  const goDetail = (link) => {
    navigate(link)
  }

  const { width } = useWindowSize();
  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 3000,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 767.98,
        settings: {
          vertical: true,
          verticalSwiping: true,
          autoplay: false,
          speed: 500,
          autoplaySpeed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
  }

  return (
    <>
      <Slider
        width={width > 768 ? '1920px' : '100%'}
        height={width > 768 ? '264px' : '308px'}
        settings={settings}
        noneStyle
        more={width > 768 ? false : true}
      >
        {data.filter((fd) => new Date(fd.PBLANCENDDT) >= new Date(today)).map((dt) => (
          <Card key={dt.PBLANCSEQ} onClick={() => goDetail(`/benefits/smallbizSupportDetail?pblancseq=${dt.PBLANCSEQ}`)}>
            <TitleWrap>
              <h2>{dt.PBLANCNM}</h2>
            </TitleWrap>
            <ContentWrap>
              <div dangerouslySetInnerHTML={{__html: dt.POLICYCNTS}}></div>
            </ContentWrap>
          </Card>
        ))}
      </Slider>
    </>
  )
}

export default InfoSlider;

const Card = styled.div`
  width: 383px;
  height: 194px;
  padding: 20px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 4px 6px 10px 0px rgba(0, 0, 0, 0.10);
  background-color: #FFFFFF;
  margin-right: 20px;
  ${(props) => props.theme.window.mobile} {
    box-shadow: none;
    border: 1px solid #B4B4B4;
    height: 149px;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  > h2 {
    width: 250px;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 18px;
    font-weight: 400;
  }
  ${(props) => props.theme.window.mobile} {
    > h2 {
      font-size: 14px;
      width: 73.7%;
    }
  }
`;
// const Label = styled.div`
//   width: 49px;
//   height: 27px;
//   border-radius: 5px;
//   font-weight: 700;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   line-height: 23px;
//   color:  ${props => props.label === 'HOT' ? ` #FF4117` : `#0061FF`};
//   background-color: ${props => props.label === 'HOT' ? ` rgba(255, 65, 23, 0.28)` : `rgba(0, 97, 255, 0.20)`};
//   ${(props) => props.theme.window.mobile} {
//     width: 40px;
//     height: 22px;
//     font-size: 12px;
//     line-height: 22px;
//   }
// `;

const ContentWrap = styled.div`
  width: 343px;
  margin-top: 20px;
  > div {
    color: #ADADAD;
    font-size: 16px;
    width: 320px;
    height: 70px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  ${(props) => props.theme.window.mobile} {
    > div {
      width: 79%;
      font-size: 12px;
      height: 52px;
    }
  }
`;

