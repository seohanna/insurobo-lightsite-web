import React from "react";
import InnerBox from "../../InnerBox";
import TopText from "./TopText";

import bnk from '../../../../assets/img/content/partner/logo-bnk.png';
import shinhangroup from '../../../../assets/img/content/partner/logo-shinhangroup.png';
import kt from '../../../../assets/img/content/partner/logo-kt.png';
import bccard from '../../../../assets/img/content/partner/logo-bccard.png';
import kyobo from '../../../../assets/img/content/partner/logo-kyobo.png';
import sangsang from '../../../../assets/img/content/partner/logo-sangsang.png';
import sk from '../../../../assets/img/content/partner/logo-sk.png';
import starventures from '../../../../assets/img/content/partner/logo-starventures.png';
import meritz from '../../../../assets/img/content/partner/logo-meritz.png';
import hd from '../../../../assets/img/content/partner/logo-hd.png';
import db from '../../../../assets/img/content/partner/logo-db.png';
import mg from '../../../../assets/img/content/partner/logo-mg.png';
import lotte from '../../../../assets/img/content/partner/logo-lotte.png';
import nh from '../../../../assets/img/content/partner/logo-nh.png';
import bnp from '../../../../assets/img/content/partner/logo-bnp.png';
import lina from '../../../../assets/img/content/partner/logo-lina.png';
import samsung from '../../../../assets/img/content/partner/logo-samsung.png';
import tmax from '../../../../assets/img/content/partner/logo-tmax.png';
import hdbsc from '../../../../assets/img/content/partner/logo-hdbsc.png';
import ddokddok from '../../../../assets/img/content/partner/logo-ddokddok.png';
import yanolja from '../../../../assets/img/content/partner/logo-ya.png';
import kbank from '../../../../assets/img/content/partner/logo-kbank.png';
import wemac from '../../../../assets/img/content/partner/logo-wemac.png';
import hnfincore from '../../../../assets/img/content/partner/logo-hn.png';
import frip from '../../../../assets/img/content/partner/logo-frip.png';
import lottecard from '../../../../assets/img/content/partner/logo-lottecard.png';
import shinhanez from '../../../../assets/img/content/partner/logo-shinhanez.png';
import deliveryservice from '../../../../assets/img/content/partner/logo-deliveryservice.png';
import luvmom from '../../../../assets/img/content/partner/logo-luvmom.png';
import paxnet from '../../../../assets/img/content/partner/logo-paxnet.png';
import incar from '../../../../assets/img/content/partner/logo-incar.png';
import snplab from '../../../../assets/img/content/partner/logo-snplab.png';
import bs from '../../../../assets/img/content/partner/logo-bs.png';
import mois from '../../../../assets/img/content/partner/logo-mois.png';
import fin from '../../../../assets/img/content/partner/logo-fin.png';
import kisa from '../../../../assets/img/content/partner/logo-kisa.png';
import kodit from '../../../../assets/img/content/partner/logo-kodit.png';
import gg from '../../../../assets/img/content/partner/logo-gg.png';
import { styled } from "styled-components";

const Partner = () => {
  const partner = [
    {
      id: 1,
      content: `
        <dt>전략적협력사</dt>
        <dd>
          <img src=${bnk} alt="BNK금융지주">
        </dd>
        <dd>
          <img src=${shinhangroup} alt="신한금융그룹">
        </dd>
        <dd>
          <img src=${kt} alt="KT텔레캅">
        </dd>
        <dd>
          <img src=${bccard} alt="비씨카드">
        </dd>
        <dd>
          <img src=${kyobo} alt="교보생명">
        </dd>
        <dd>
          <img src=${sangsang} alt="상상">
        </dd>
        <dd>
          <img src=${sk} alt="SK증권">
        </dd>
        <dd>
          <img src=${starventures} alt="스타벤쳐스">
        </dd>
      </dl>
      `
    },
    {
      id: 2,
      content: `
        <dt>보험사</dt>
        <dd>
          <img src=${meritz} alt="메리츠화재">
        </dd>
        <dd>
          <img src=${hd} alt="현대해상">
        </dd>
        <dd>
          <img src=${db} alt="DB손해보험">
        </dd>
        <dd>
          <img src=${mg} alt="MG손해보험">
        </dd>
        <dd>
          <img src=${lotte} alt="롯데손해보험">
        </dd>
        <dd>
          <img src=${nh} alt="NH농협손해보험">
        </dd>
        <dd>
          <img src=${bnp} alt="BNP파리바카디프생">
        </dd>
        <dd>
          <img src=${lina} alt="라이나생명">
        </dd>
        <dd>
          <img src=${samsung} alt="삼성생명">
        </dd>
      `
    },
    {
      id: 3,
      content: `
        <dt>기술협력사</dt>
        <dd>
          <img src=${tmax} alt="TmaxSoft">
        </dd>
        <dd>
          <img src=${hdbsc} alt="현대BS&amp;C">
        </dd>
        <dd>
          <img src=${ddokddok} alt="똑똑한개발자">
        </dd>
      `
    },
    {
      id: 4,
      content: `
        <dt>제휴마케팅</dt>
        <dd>
          <img src=${yanolja} alt="yanolja">
        </dd>
        <dd>
          <img src=${kt} alt="kt telecop">
        </dd>
        <dd>
          <img src=${kbank} alt="kbank">
        </dd>
        <dd>
          <img src=${wemac} alt="wemac">
        </dd>
        <dd>
          <img src=${hnfincore} alt="hnfincore">
        </dd>
        <dd>
          <img src=${frip} alt="frip">
        </dd>
        <dd>
          <img src=${lottecard} alt="롯데카드">
        </dd>
        <dd>
          <img src=${shinhanez} alt="신한EZ손해보험">
        </dd>
        <dd>
          <img src=${deliveryservice} alt="배달서비스공제조합">
        </dd>
        <dd>
          <img src=${luvmom} alt="LUV MOM">
        </dd>
        <dd>
          <img src=${paxnet} alt="PAXNet">
        </dd>
        <dd>
          <img src=${incar} alt="inCAR">
        </dd>
        <dd>
          <img src=${snplab} alt="SNPLAB">
        </dd>
      `
    },
    {
      id: 5,
      content: `
        <dt>공공기관</dt>
        <dd>
          <img src=${bs} alt="부산광역시">
        </dd>
        <dd>
          <img src=${mois} alt="행정안전부">
        </dd>
        <dd>
          <img src=${fin} alt="한국핀테크지원센터">
        </dd>
        <dd>
          <img src=${kisa} alt="KISA">
        </dd>
        <dd>
          <img src=${kodit} alt="신용보증기금">
        </dd>
        <dd>
          <img src=${gg} alt="경기창조경제혁신센터">
        </dd>
      `
    }
  ]
  return (
    <InnerBox>
      <TopText text='인슈로보와 함께하는 비즈니스 파트너입니다.' />
      {partner.map((dt) => (
        <PartnerWrap key={dt.id} dangerouslySetInnerHTML={{__html: dt.content}} />
      ))}
    </InnerBox>
  )
}
export default Partner;

const PartnerWrap = styled.dl`
  margin-bottom: 52px;
  font-size: 0;
  &:last-child {
    margin-bottom: 0;
  }
  > dt {
    font-size: 20px;
    font-weight: 700;
    color: #212529;
    margin-bottom: 8px;
    display: block;
  }
  > dd {
    display: inline-flex;
    width: 220px;
    height: 46px;
    border-radius: 12px;
    border: 1px solid #f1f3f5;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-top: 10px;
    margin-right: 20px;
    
    &:nth-child(5n + 1) {
      margin-right: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    
    > img {
      max-width: 100%;
    }
  }
  ${(props) => props.theme.window.mobile} {
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid #f1f3f5;
    &:last-child {
      border-bottom: 0;
      padding-bottom: 10px;
    }
    > dt {
      font-size: 16px;
      margin-bottom: 0;
    }
    > dd {
      width: calc(50% - 5px);
      margin-right: 10px;
      &:nth-child(5n + 1) {
        margin-right: 10px;
      }
      &:nth-child(2n + 1) {
        margin-right: 0;
      }
    }
  }
`;

