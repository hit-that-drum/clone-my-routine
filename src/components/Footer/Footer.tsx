"use client";

import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";

interface FooterProps {
  companyName?: string;
}

const StyledFooter = styled.footer`
  background-color: #ffffff;
  border-top: 1px solid #eaeaea;
  padding: 4rem 0 2rem;
  margin-top: auto;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin: 0;
`;

const Description = styled.p`
  color: #666;
  line-height: 1.6;
  margin: 0;
`;

const Subtitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const Links = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const StyledLink = styled(Link)`
  color: #666;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #0070f3;
  }
`;

const Bottom = styled.div`
  padding-top: 2rem;
  border-top: 1px solid #eaeaea;
  text-align: center;
`;

const Copyright = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin: 0;
`;

const Footer: FC<FooterProps> = ({ companyName = "Clone MY ROUTINE" }) => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <Container>
        <Content>
          <Section>
            <Title>{companyName}</Title>
            <Description>
              Build better habits and achieve your goals with our routine
              management platform.
            </Description>
          </Section>

          <Section>
            <Subtitle>Quick Links</Subtitle>
            <Links>
              <StyledLink href="/dashboard">Dashboard</StyledLink>
              <StyledLink href="/routines">Routines</StyledLink>
              <StyledLink href="/profile">Profile</StyledLink>
            </Links>
          </Section>

          <Section>
            <Subtitle>Legal</Subtitle>
            <Links>
              <StyledLink href="/privacy">Privacy Policy</StyledLink>
              <StyledLink href="/terms">Terms of Service</StyledLink>
            </Links>
          </Section>
        </Content>

        <Bottom>
          <Copyright>
            © {currentYear} {companyName}. All rights reserved.
          </Copyright>
        </Bottom>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
