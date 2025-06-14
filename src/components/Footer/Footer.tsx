"use client";

import Link from "next/link";
import styled from "styled-components";
import KakaotalkIcon from "../../../public/kakao_icon.svg";
import { ColorTheme } from "@/app/style/ColorTheme";

const FooterWrapper = styled.div`
  background-color: ${ColorTheme.background.paper};
  font-size: 14px;
  color: ${ColorTheme.text.light};
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 80px 0;
  vertical-align: baseline;
  line-height: 25px;

  a {
    all: unset;
    cursor: pointer;
  }

  .margin-top-13 {
    margin-top: 13px;
  }

  .customer-center {
    h3 {
      color: ${ColorTheme.text.primary};
      font-weight: 800;
      font-size: 16px;
    }
    .kakaotalk-icon {
      display: inline-flex;
      align-items: center;
      background-color: ${ColorTheme.background.default};
      border-radius: 20px;
      padding: 4px 10px;
    }
    .kakaotalk-text {
      font-weight: 500;
    }
    img {
      width: 19px;
      height: 19px;
      margin-top: 3px;
      margin-right: 3px;
    }
  }

  .company-info {
    h3 {
      font-size: 16px;
      font-weight: 800;
    }
    span:nth-child(1) {
      margin-right: 25px;
    }
  }

  .copy-right {
    display: flex;
    justify-content: flex-end;
    margin-top: 67px;
    font-size: 16px;
  }

  .language-selector {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="customer-center">
        <h3>고객센터</h3>
        <div className="margin-top-13">
          <p>전화 : 02-6351-4200</p>
          <p>카카오톡 : @마이루틴</p>
        </div>
        <div className="margin-top-13">
          <a
            className="kakaotalk-icon"
            href="https://pf.kakao.com/_QqWxnxb"
            target="_blank"
            rel="noreferrer"
          >
            <img src={KakaotalkIcon.src} alt="kakaotalk-icon" />
            <span className="kakaotalk-text">톡문의</span>
          </a>
        </div>
      </div>
      <div className="company-info">
        <h3>(주)마인딩</h3>
        <div className="margin-top-13">
          <p>사업자등록번호 467-86-00890 | 대표 옥민송</p>
          <p>
            서울특별시 중구 을지로 50 19층 스파크플러스 을지로점 1909, 1910호 | 통신판매업
            2022-서울중구-0771호
          </p>
        </div>
        <div className="margin-top-13">
          <a
            href="https://mindingteam.notion.site/84b3256ce96041eb9a8510e0d6ed7258"
            target="_blank"
            rel="noreferrer"
          >
            <span>서비스 이용약관</span>
          </a>
          <a
            href="https://mindingteam.notion.site/d18d4c72c938480494f894b2b7c81b5b"
            target="_blank"
            rel="noreferrer"
          >
            <span>개인정보 처리방침</span>
          </a>
        </div>
        <p className="copy-right">© Minding. co., Ltd</p>
        <div className="language-selector">
          <Link href="/en">English</Link>
          <Link href="/ja">日本語</Link>
          <Link href="/ko">한국어</Link>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
