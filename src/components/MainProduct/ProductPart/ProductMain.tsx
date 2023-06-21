import { ProductMainContainer, ProductMainWrapper } from "./ProductMain.style";
import { Product } from "../../../store/product/products";
import ProductInfor from "./ProductInfor";
import GoBackBtn from "../GoBackBtn";
import Features from "./Features";
import Gallery from "./Gallery";
import Preference from "./Preference";

type ProductMainProps = {
  data: Product | undefined;
};

const ProductMain = ({ data }: ProductMainProps) => {
  // console.log(data);
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <ProductMainContainer data-aos="fade" data-aos-duration="1000">
      <ProductMainWrapper>
        <GoBackBtn />
        {/* AddCart button included in Product component */}
        <ProductInfor data={data} />
        <Features data={data} />
        <Gallery data={data} />
        <Preference data={data} />
      </ProductMainWrapper>
    </ProductMainContainer>
  );
};

export default ProductMain;
