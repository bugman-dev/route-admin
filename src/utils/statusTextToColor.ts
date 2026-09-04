import appColors from "@ra/assets/colors/appColors";
import { appTexts } from "@ra/constants/apptexts";

export default function statusTextToColor(text: string): {
  primaryColor: string;
  secondaryColor: string;
} {
  switch (text) {
    case appTexts.statusTexts.healthy:
      return {
        primaryColor: appColors.primaryGreen,
        secondaryColor: appColors.secondaryGreen,
      };
    case appTexts.statusTexts.unknown:
      return {
        primaryColor: appColors.textGrey,
        secondaryColor: appColors.pageBackground,
      };
    case appTexts.statusTexts.error:
      return {
        primaryColor: appColors.primaryRed,
        secondaryColor: appColors.secondaryRed,
      };
    case appTexts.statusTexts.warning:
      return {
        primaryColor: appColors.primaryOrange,
        secondaryColor: appColors.secondaryOrange,
      };
    case appTexts.statusTexts.info:
      return {
        primaryColor: appColors.primary,
        secondaryColor: appColors.primaryBackground,
      };
    case appTexts.statusTexts.critical:
      return {
        primaryColor: appColors.primaryRed,
        secondaryColor: appColors.secondaryRed,
      };
    default:
      return {
        primaryColor: appColors.primary,
        secondaryColor: appColors.primaryBackground,
      };
  }
}
