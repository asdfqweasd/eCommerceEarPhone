import { GlobalBtnBrown } from "../../../GlobalBtn";

import {
  CategoryMainContainer,
  CategoryMainWrapper,
  CategoryMainProduct,
  ProductImgWrapper,
  ProductImg,
  ProductInfo,
  ProductFeature,
  ProductTitle,
  ProductDetail,
} from "./CategoryMain.style";

type productProps = {
  product: string;
  feature: string;
  detail: string;
  label: string;
  alt: string;
  src: string;
  price: string;
  link: string;
};

type receiveProps = {
  data: productProps[];
};

const CategoryMain: React.FC<receiveProps> = ({ data }) => {
  return (
    <CategoryMainContainer>
      <CategoryMainWrapper>
        {data.map((item, index) => {
          // console.log("item.src:", item.src);
          // console.log(require(`../../../assets/${item.src}`).default);
          let isEvenNum = index % 2 ? true : false;
          return (
            <CategoryMainProduct data-reversed={isEvenNum} key={index}>
              <ProductImgWrapper>
                <ProductImg
                  width="540"
                  height="560"
                  data-aos="fade"
                  data-aos-duration="800"
                  src={require(`../../../assets/${item.src}`)}
                  alt={item.alt}
                />
              </ProductImgWrapper>
              <ProductInfo>
                <ProductFeature>{item.feature}</ProductFeature>
                <ProductTitle>{item.product}</ProductTitle>
                <ProductDetail>{item.detail}</ProductDetail>
                <GlobalBtnBrown
                  data-text="see product"
                  aria-label={item.label}
                  to={item.link}
                />
              </ProductInfo>
            </CategoryMainProduct>
          );
        })}
      </CategoryMainWrapper>
    </CategoryMainContainer>
  );
};

export default CategoryMain;
