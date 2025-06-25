"use client";

import { Box, Card, CardContent } from "@mui/material";
import { ColorTheme } from "@/app/style/ColorTheme";
import { descMainSxProps, descSubSxProps, secondSectionBoxSxprops, tabSxProps } from "./style";
import Image from "next/image";
import secondSection from "../../../public/isLoginFalseHome/second-section.png";
import thirdSection from "../../../public/isLoginFalseHome/third-section.png";
import fourthSection from "../../../public/isLoginFalseHome/fourth-section.png";
import fifthSection from "../../../public/isLoginFalseHome/fifth-section.png";
import sixthSection from "../../../public/isLoginFalseHome/sixth-section.png";
import checkIcon from "../../../public/isLoginFalseHome/check-icon.svg";
import xIcon from "../../../public/isLoginFalseHome/x-icon.svg";
import greenCheckIcon from "../../../public/isLoginFalseHome/green-check-icon.svg";
import { StaticImageData } from "next/image";
import { Tabs, Tab } from "@mui/material";
import { useState } from "react";

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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, display: "flex", flexDirection: "row", gap: 2 }}>{children}</Box>
      )}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// Constants for subscription features
const FREE_VERSION_FEATURES = [
  { text: "습관 추가 10개", available: true },
  { text: "일기 3건", available: true },
  { text: "짧은 메모 주 14개", available: true },
  { text: "긴 메모 주 7개", available: true },
  { text: "반복 주기 설정 매주만", available: true },
  { text: "형광펜 2개", available: true },
  { text: "습관 통계 주간만", available: true },
  { text: "투두 관리", available: false },
  { text: "광고 제거", available: false },
];

const PREMIUM_FEATURES = [
  { text: "습관 추가", highlight: "무제한" },
  { text: "일기", highlight: "무제한" },
  { text: "짧은 메모", highlight: "무제한" },
  { text: "긴 메모", highlight: "무제한" },
  { text: "반복 주기 설정", highlight: "무제한" },
  { text: "형광펜", highlight: "무제한" },
  { text: "습관 통계", highlight: "주간/월간" },
  { text: "투두", highlight: "무제한" },
];

// Subscription configuration
const SUBSCRIPTION_CONFIGS: Record<string, SubscriptionConfig> = {
  yearly: {
    originalPrice: "39,600원",
    currentPrice: "33,000원",
    showPopular: true,
  },
  monthly: {
    originalPrice: null,
    currentPrice: "3,900원",
    showPopular: false,
  },
  lifetime: {
    originalPrice: "468,600원",
    currentPrice: "89,000원",
    showPopular: false,
  },
};

// Types
interface Feature {
  text: string;
  available: boolean;
}

interface PremiumFeature {
  text: string;
  highlight: string;
}

interface SubscriptionConfig {
  originalPrice: string | null;
  currentPrice: string;
  showPopular: boolean;
}

// Feature List Component
const FeatureList = ({
  features,
  isPremium = false,
}: {
  features: Feature[] | PremiumFeature[];
  isPremium?: boolean;
}) => {
  const isFeature = (feature: Feature | PremiumFeature): feature is Feature => {
    return "available" in feature;
  };

  return (
    <Box>
      {features.map((feature, index) => {
        const isAvailable = isFeature(feature) ? feature.available : true;

        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: "19px",
              marginBottom: "12px",
              color: !isPremium && !isAvailable ? ColorTheme.text.lightGray : "inherit",
            }}
          >
            <Image
              src={!isPremium && !isAvailable ? xIcon : isPremium ? greenCheckIcon : checkIcon}
              alt={isAvailable ? "check-icon" : "x-icon"}
              width={28}
              height={28}
            />
            {isPremium && !isFeature(feature) ? (
              <Box sx={{ display: "flex", gap: 1, fontSize: "19px" }}>
                <Box>{feature.text}</Box>
                <Box sx={{ fontWeight: 800 }}>{feature.highlight}</Box>
              </Box>
            ) : (
              <Box>{feature.text}</Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

// Pricing Card Component
const PricingCard = ({
  title,
  price,
  originalPrice = null,
  description,
  features,
  isPremium = false,
  showPopular = false,
}: {
  title: string;
  price: string;
  originalPrice?: string | null;
  description: string;
  features: any[];
  isPremium?: boolean;
  showPopular?: boolean;
}) => (
  <Box
    sx={{
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      backgroundColor: isPremium ? ColorTheme.black : ColorTheme.background.homeGrey,
      color: isPremium ? ColorTheme.white : "inherit",
      borderRadius: "12px",
      padding: isPremium ? "40px 30px" : "40px",
      width: "610px",
      height: "629px",
    }}
  >
    {showPopular && (
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          right: "-12px",
          backgroundColor: ColorTheme.green,
          color: ColorTheme.white,
          padding: "6px 12px",
          fontSize: "16px",
          fontWeight: "bold",
          transform: "rotate(45deg) translate(21px, -15px)",
          width: "150px",
          textAlign: "center",
        }}
      >
        POPULAR
      </Box>
    )}
    <Box sx={{ width: "100%", height: "133px", marginBottom: "20px" }}>
      <Box
        sx={{
          margin: "0px 0px 12px",
          fontSize: "24px",
          fontWeight: 800,
          color: isPremium ? ColorTheme.green : "inherit",
        }}
      >
        {title}
      </Box>
      <Box>
        {originalPrice && (
          <Box
            sx={{
              fontSize: "20px",
              color: ColorTheme.text.lightGray,
              textDecoration: "line-through",
              marginTop: "-15px",
              marginBottom: "-15px",
            }}
          >
            {originalPrice}
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            alignContent: "flex-start",
          }}
        >
          <Box sx={{ fontSize: "40px", fontWeight: 700 }}>{price}</Box>
          <Box sx={{ fontSize: "18px", color: ColorTheme.text.lightGray }}>
            {isPremium ? "/ 한 번 결제" : ""}
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: "18px",
            color: isPremium ? ColorTheme.text.lightGray : ColorTheme.text.homeGray,
          }}
        >
          {description}
        </Box>
      </Box>
    </Box>
    <FeatureList features={features} isPremium={isPremium} />
  </Box>
);

const LandingPageSection: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderPricingCards = (config: SubscriptionConfig) => (
    <>
      <PricingCard
        title="무료 버전"
        price="0원"
        description="무료로 사용할 수 있어요"
        features={FREE_VERSION_FEATURES}
      />
      <PricingCard
        title="프리미엄"
        price={config.currentPrice}
        originalPrice={config.originalPrice}
        description="마이루틴 기능을 무제한으로 사용해보세요"
        features={PREMIUM_FEATURES}
        isPremium={true}
        showPopular={config.showPopular}
      />
    </>
  );

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
          width: "1240px",
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
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          justifyContent: "space-around",
          width: "1280px",
          padding: "60px 0",
          margin: "0 auto",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{ "& .MuiTabs-indicator": { display: "none" } }}
        >
          <Tab label="연 구독" {...a11yProps(0)} sx={tabSxProps} />
          <Tab label="월 구독" {...a11yProps(1)} sx={tabSxProps} />
          <Tab label="평생 구독" {...a11yProps(2)} sx={tabSxProps} />
        </Tabs>

        {/* Dynamic Tab Panels */}
        {Object.entries(SUBSCRIPTION_CONFIGS).map(([key, config], index) => (
          <CustomTabPanel key={key} value={value} index={index}>
            {renderPricingCards(config)}
          </CustomTabPanel>
        ))}
      </CardContent>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          justifyContent: "space-around",
          width: "1280px",
          padding: "60px 0",
          margin: "0 auto",
        }}
      >
        <Box>이미 많은 사람들이 마이루틴으로 만족스러운 하루를 만들어가고 있어요 👏</Box>
      </CardContent>
    </Card>
  );
};

export default LandingPageSection;
