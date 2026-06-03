import React from "react";
import { useLocation } from "react-router-dom";
import CommonBenefits from "../../../Common/CommonBenefits";
import { GetBenefitsData } from "../../../Common/GetBenefitData";

const Benefits = () => {
  const { pathname } = useLocation();
  const { bannerImg, heading,logoImage, isCenter,isNotLine, highlightText, subHeading,subHeading2, benefits ,headingMobile, highlightTextMobile, subHeadingMobile, subHeading2Mobile, } =
    GetBenefitsData(pathname);

  return (
    <CommonBenefits
      bannerImg={bannerImg}
      heading={heading}
      logoImage={logoImage}
      highlightText={highlightText}
      subHeading={subHeading}
      subHeading2={subHeading2}
      benefits={benefits}
      headingMobile={headingMobile}
      highlightTextMobile={highlightTextMobile}
      subHeadingMobile={subHeadingMobile}
      subHeading2Mobile={subHeading2Mobile}
      isCenter={isCenter}
      isNotLine={isNotLine}
    />
  );
};

export default Benefits;
