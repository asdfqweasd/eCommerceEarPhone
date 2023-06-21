import OtherProducts from "../../components/MainProduct/OtherProduct/otherProducts";
import Banner from "../../components/Banner/Banner";
import ProductNav from "../../components/ProductNav/ProductNav";
import { HEADPHONES } from "../../data/CategoryData";
import CategoryMain from "../../components/Main/CategoryMain/CategoryMain";

const Headphones = () => {
  return (
    <main>
      <OtherProducts pageTitle="headphones" />
      <CategoryMain data={HEADPHONES} />
      <ProductNav />
      <Banner />
    </main>
  );
};

export default Headphones;
