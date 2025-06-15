"use client";

import { Box, Card, CardContent } from "@mui/material";
import { ColorTheme } from "@/app/style/ColorTheme";
import Image from "next/image";
import secondSection from "../../../public/isLoginFalseHome/second-section.png";
import thirdSection from "../../../public/isLoginFalseHome/third-section.png";
import fourthSection from "../../../public/isLoginFalseHome/fourth-section.png";
import fifthSection from "../../../public/isLoginFalseHome/fifth-section.png";
import sixthSection from "../../../public/isLoginFalseHome/sixth-section.png";

const descMainSxProps = {
  fontSize: "36px",
  lineHeight: "53px",
  color: ColorTheme.text.homeDark,
  fontWeight: "bold",
};
const descSubSxProps = {
  fontSize: "20px",
  color: ColorTheme.text.homeGray,
  margin: "50px 0",
};
const secondSectionBoxSxprops = {
  display: "flex",
  flexDirection: "row",
  gap: 2,
  alignItems: "center",
  justifyContent: "space-around",
  width: "1240px",
  height: "620px",
  padding: "60px 0",
};

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
            margin: "0 auto",
          }}
        >
          <Box>
            <Box sx={descMainSxProps}>
              <Box>오늘 하루를 알차게 보내고 싶은가요?</Box>
              <Box>결심은 하지만</Box>
              <Box>꾸준히 지키기 어려운가요?</Box>
            </Box>
            <Box sx={descSubSxProps}>
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
            padding: "60px 0",
            margin: "0 auto",
          }}
        >
          <CardContent>
            <CardContent sx={secondSectionBoxSxprops}>
              <Box sx={{ width: "50%" }}>
                <Box sx={descMainSxProps}>
                  <Box>💫</Box>
                  <Box>
                    <Box>체계적인 마이루틴</Box>
                    <Box>템플릿</Box>
                  </Box>
                </Box>

                <Box sx={descSubSxProps}>
                  <Box>템플릿으로 쉽게 루틴을 만들고 체계적으로</Box>
                  <Box>관리해봐요!</Box>
                </Box>
              </Box>
              <Image src={thirdSection} alt="third-section" width={580} height={580} />
            </CardContent>
            <CardContent sx={secondSectionBoxSxprops}>
              <Image src={fourthSection} alt="fourth-section" width={580} height={580} />
              <Box sx={{ width: "50%", paddingLeft: "100px" }}>
                <Box sx={descMainSxProps}>
                  <Box>🚥</Box>
                  <Box>
                    <Box>하루/한 주가 한 눈에</Box>
                    <Box>보이는 루틴 신호등</Box>
                  </Box>
                </Box>
                <Box sx={descSubSxProps}>
                  <Box>루틴 달성률을 신호등으로 확인해봐요!</Box>
                  <Box>한 주간 초록불이 가득하면 뿌듯함은 2배 :)</Box>
                </Box>
              </Box>
            </CardContent>
            <CardContent sx={secondSectionBoxSxprops}>
              <Box sx={{ width: "50%" }}>
                <Box sx={descMainSxProps}>
                  <Box>💪🏻</Box>
                  <Box>
                    <Box>실천 동기를 자극하는</Box>
                    <Box>다른 사람 둘러보기</Box>
                  </Box>
                </Box>
                <Box sx={descSubSxProps}>
                  <Box>다른 루티너들의 루틴과 회고를 보며</Box>
                  <Box>긍정적인 자극을 받아요</Box>
                </Box>
              </Box>
              <Image src={fifthSection} alt="fifth-section" width={580} height={580} />
            </CardContent>
            <CardContent sx={secondSectionBoxSxprops}>
              <Image src={sixthSection} alt="sixth-section" width={580} height={580} />
              <Box sx={{ width: "50%", paddingLeft: "100px" }}>
                <Box sx={descMainSxProps}>
                  <Box>💻</Box>
                  <Box>
                    <Box>다양한 디바이스에서</Box>
                    <Box>사용</Box>
                  </Box>
                </Box>
                <Box sx={descSubSxProps}>
                  <Box>위젯, 아이패드, 애플워치 등 다양한 기기를</Box>
                  <Box>지원합니다</Box>
                </Box>
              </Box>
            </CardContent>
          </CardContent>
        </CardContent>
      </Card>
    </>
  );
}
