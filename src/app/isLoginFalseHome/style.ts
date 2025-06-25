import { ColorTheme } from "@/app/style/ColorTheme";

export const descMainSxProps = {
  fontSize: "36px",
  lineHeight: "53px",
  color: ColorTheme.text.homeDark,
  fontWeight: "bold",
};

export const descSubSxProps = {
  fontSize: "20px",
  color: ColorTheme.text.homeGray,
  margin: "50px 0",
};

export const secondSectionBoxSxprops = {
  display: "flex",
  flexDirection: "row",
  gap: 2,
  alignItems: "center",
  justifyContent: "space-around",
  width: "1240px",
  height: "620px",
  padding: "60px 0",
};

export const tabSxProps = {
  margin: "0 10px",
  padding: "16px 40px",
  borderRadius: "40px",
  border: "none",
  background: ColorTheme.background.paper,
  fontSize: "18px",
  color: ColorTheme.text.homeDark,
  cursor: "pointer",
  transition: "0.3s",
  boxShadow: `0px 2px 3px ${ColorTheme.text.secondary}`,
  "&.Mui-selected": {
    background: ColorTheme.green,
    color: ColorTheme.white,
  },
};
