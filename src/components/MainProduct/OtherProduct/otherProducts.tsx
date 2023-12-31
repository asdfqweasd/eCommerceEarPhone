import React from "react";
import {
  CategoryHeroContainer,
  CategoryHeroWrapper,
  CategoryHeroH1,
} from "./otherProducts.style";
type pageTitleType = {
  pageTitle: string;
};

const OtherProducts: React.FC<pageTitleType> = ({ pageTitle }) => {
  return (
    <CategoryHeroContainer
      data-aos="slide-up"
      data-aos-once="true"
      data-aos-duration="600"
    >
      <CategoryHeroWrapper
        data-aos="zoom-in"
        data-aos-once="true"
        data-aos-duration="500"
        data-aos-delay="300"
      >
        <CategoryHeroH1>{pageTitle}</CategoryHeroH1>
      </CategoryHeroWrapper>
    </CategoryHeroContainer>
  );
};

export default OtherProducts;
