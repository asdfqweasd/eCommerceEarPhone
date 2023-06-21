import { Product } from "../../../store/product/products";
import {
  FeaturesWrapper,
  Feature,
  FeatureTitle,
  FeatureInfo,
  InTheBox,
  InTheBoxTitle,
  InTheBoxDescWrapper,
  InTheBoxDesc,
  IntheBoxNum,
} from "./ProductMain.style";

const Features = ({ data }: { data: Product }) => {
  return (
    <FeaturesWrapper>
      <Feature>
        <FeatureTitle>feature</FeatureTitle>
        <FeatureInfo>
          {data.featureDesc1}
          <br />
          <br />
          {data.featureDesc2}
        </FeatureInfo>
      </Feature>
      <InTheBox>
        <InTheBoxTitle>in the box</InTheBoxTitle>
        <InTheBoxDescWrapper>
          {data.inTheBox.map((item, index) => {
            return (
              <InTheBoxDesc key={index}>
                <IntheBoxNum>{item[0]}</IntheBoxNum>
                {item[1]}
              </InTheBoxDesc>
            );
          })}
        </InTheBoxDescWrapper>
      </InTheBox>
    </FeaturesWrapper>
  );
};

export default Features;
