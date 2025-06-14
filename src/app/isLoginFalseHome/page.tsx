"use client";

import { Box, Card, CardContent } from "@mui/material";
import Image from "next/image";
import secondSection from "../../../public/isLoginFalseHome/second-section.png";
import { ColorTheme } from "@/app/style/ColorTheme";

export default function isLoginFalseHome() {
  return (
    <>
      <div>
        <div>All that is gold does not glitter</div>
        <div>Not all thoes who wander are lost</div>
        <div>The old that is strong does not wither</div>
        <div>Deep roots are not reached by the frost</div>
        <div>From the ashes a fire shall be woken</div>
        <div>A light from the shadows shall be woken</div>
        <div>Renewed shall be blade that was broken</div>
        <div>The crownless again shall be king</div>
      </div>
      <Card>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
            justifyContent: "space-around",
            height: "620px",
            backgroundColor: ColorTheme.background.homeGrey,
            padding: "60px 20px",
          }}
        >
          <Box>
            <Box
              sx={{
                fontSize: "36px",
                lineHeight: "53px",
                color: ColorTheme.text.homeDark,
                fontWeight: "bold",
              }}
            >
              <Box>오늘 하루를 알차게 보내고 싶은가요?</Box>
              <Box>결심은 하지만</Box>
              <Box>꾸준히 지키기 어려운가요?</Box>
            </Box>
            <Box
              sx={{
                fontSize: "20px",
                color: ColorTheme.text.homeGray,
                margin: "50px 0",
              }}
            >
              <Box>마이루틴으로 생산적인 생활 패턴을 만들어보세요!</Box>
            </Box>
          </Box>
          <Image src={secondSection} alt="second-section" width={343} height={343} />
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            justifyContent: "space-around",
            width: "1280px",
            backgroundColor: ColorTheme.background.homeGrey,
            padding: "60px 0",
          }}
        >
          <CardContent>
            <Box>ww</Box>
            <Box>ww</Box>
            <Box>ww</Box>
          </CardContent>
        </CardContent>
      </Card>
    </>
  );
}
