"use client";

import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ColorTheme } from "@/app/style/ColorTheme";
import { Button } from "@mui/material";
import Image from "next/image";
import myRoutineHeaderIcon from "../../../public/myroutine_header_icon.png";
import isLoginFalseLogo from "../../../public/isLoginFalseHome/isLoginFalse_logo.svg";

const StyledHeader = styled.header`
  background-color: ${ColorTheme.background.default};
  box-shadow: 0 2px 4px ${ColorTheme.shadow.light};
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .profile-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .profile-info {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .profile-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${ColorTheme.background.default};
    border: 1px solid ${ColorTheme.border.main};
  }

  .profile-name {
    margin-left: 3px;
    line-height: 22px;
    text-align: left;
    font-size: 16px;
    color: ${ColorTheme.text.primary};
  }

  .profile-icon {
    display: flex;
    margin: 0px 4px;
    border-radius: 12px;
    border: 1px solid ${ColorTheme.border.light};
    padding: 4px 6px;
    background: ${ColorTheme.background.default};
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Header = ({ isLogin }: { isLogin: boolean }) => {
  return (
    <StyledHeader>
      <Container>
        {isLogin ? (
          <Image src={myRoutineHeaderIcon} alt="My Routine" width={60} height={60} />
        ) : (
          <Image src={isLoginFalseLogo} alt="My Routine" width={60} height={60} />
        )}
        {isLogin ? (
          <div className="profile-container">
            <div className="profile-info">
              <Image
                src="https://hips.hearstapps.com/hmg-prod/images/types-of-cherries-morello-1615572999.jpg?crop=0.437xw:1.00xh;0.0680xw,0&resize=980:*"
                className="profile-image"
                alt="profile"
              />
              <div className="profile-name">야아아아아아</div>
              <div className="profile-icon">🍒 🌼 🧶</div>
            </div>
            <IconContainer>
              <FontAwesomeIcon icon={faBars} size="1x" color={ColorTheme.text.primary} />
            </IconContainer>
          </div>
        ) : (
          <>
            <Button
              variant="contained"
              sx={{
                backgroundColor: ColorTheme.black,
                color: ColorTheme.white,
                border: `1px solid ${ColorTheme.border.light}`,
                borderRadius: "8px",
                padding: "8px 12px",
                height: "40px",
                fontSize: "16px",
                fontWeight: "bold",
                boxShadow: "none",
                "&:hover": {
                  opacity: 0.7,
                },
              }}
              onClick={() => {
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdwizs-zindsiKlhTqL7eYvqrPsfafpnRNdetipMlUZIUxU7g/viewform",
                  "_blank"
                );
              }}
            >
              제휴 문의
            </Button>
          </>
        )}
      </Container>
    </StyledHeader>
  );
};

export default Header;
