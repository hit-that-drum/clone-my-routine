"use client";

import { Box, Card, CardContent } from "@mui/material";
import { ColorTheme } from "@/app/style/ColorTheme";
import Image from "next/image";
import secondSection from "../../../public/isLoginFalseHome/second-section.png";
import thirdSection from "../../../public/isLoginFalseHome/third-section.png";
import fourthSection from "../../../public/isLoginFalseHome/fourth-section.png";
import fifthSection from "../../../public/isLoginFalseHome/fifth-section.png";
import sixthSection from "../../../public/isLoginFalseHome/sixth-section.png";
import { StaticImageData } from "next/image";

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

interface FeatureCardProps {
  emoji: string;
  title: string[];
  description: string[];
  image: StaticImageData;
  imageAlt: string;
  isReversed?: boolean;
}

const features = [
  {
    emoji: "💫",
    title: ["체계적인 마이루틴", "템플릿"],
    description: ["템플릿으로 쉽게 루틴을 만들고 체계적으로", "관리해봐요!"],
    image: thirdSection,
    imageAlt: "third-section",
  },
  {
    emoji: "🚥",
    title: ["하루/한 주가 한 눈에", "보이는 루틴 신호등"],
    description: [
      "루틴 달성률을 신호등으로 확인해봐요!",
      "한 주간 초록불이 가득하면 뿌듯함은 2배 :)",
    ],
    image: fourthSection,
    imageAlt: "fourth-section",
    isReversed: true,
  },
  {
    emoji: "💪🏻",
    title: ["실천 동기를 자극하는", "다른 사람 둘러보기"],
    description: ["다른 루티너들의 루틴과 회고를 보며", "긍정적인 자극을 받아요"],
    image: fifthSection,
    imageAlt: "fifth-section",
  },
  {
    emoji: "💻",
    title: ["다양한 디바이스에서", "사용"],
    description: ["위젯, 아이패드, 애플워치 등 다양한 기기를", "지원합니다"],
    image: sixthSection,
    imageAlt: "sixth-section",
    isReversed: true,
  },
];

const FeatureCard: React.FC<FeatureCardProps> = ({
  emoji,
  title,
  description,
  image,
  imageAlt,
  isReversed = false,
}) => {
  const textContent = (
    <Box sx={{ width: "50%", paddingLeft: isReversed ? "100px" : "0px" }}>
      <Box sx={descMainSxProps}>
        <Box>{emoji}</Box>
        <Box>
          {title.map((line, index) => (
            <Box key={index}>{line}</Box>
          ))}
        </Box>
      </Box>
      <Box sx={descSubSxProps}>
        {description.map((line, index) => (
          <Box key={index}>{line}</Box>
        ))}
      </Box>
    </Box>
  );

  const imageContent = <Image src={image} alt={imageAlt} width={580} height={580} />;

  return (
    <CardContent sx={secondSectionBoxSxprops}>
      {isReversed ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {imageContent}
        </>
      )}
    </CardContent>
  );
};

const LandingPageSection: React.FC = () => {
  return (
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
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default LandingPageSection;
