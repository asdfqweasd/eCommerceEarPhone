import {
  ProductWrapper,
  ProductImgWrapper,
  ProductImg,
  PorudctDetails,
  ProductFeature,
  ProductTitle,
  ProductInfo,
  ProductPrice,
} from "./ProductMain.style";
import AddCart from "./AddToCart";
import { Product } from "../../../store/product/products";

const ProductInfor = ({ data }: { data: Product }) => {
  const price = data.price.toLocaleString();
  return (
    <ProductWrapper>
      <ProductImgWrapper>
        <ProductImg
          width="540"
          height="560"
          src={require(`../../../assets/${data.productIMG}`)}
          alt="headphones"
        />
      </ProductImgWrapper>
      <PorudctDetails>
        <ProductFeature>{data.feature}</ProductFeature>
        <ProductTitle>{data.id}</ProductTitle>
        <ProductInfo>{data.info}</ProductInfo>
        <ProductPrice>$ {price}</ProductPrice>
        <AddCart data={data} />
      </PorudctDetails>
    </ProductWrapper>
  );
};

export default ProductInfor;
