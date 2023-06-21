import { EARPHONES } from "../../data/CategoryData";
import OtherProducts from "../../components/MainProduct/OtherProduct/otherProducts";
import Banner from "../../components/Banner/Banner";
import ProductNav from "../../components/ProductNav/ProductNav";
import CategoryMain from "../../components/Main/CategoryMain/CategoryMain";

const Earphones = () => {
  return (
    <main>
      <OtherProducts pageTitle="Earphones" />
      <CategoryMain data={EARPHONES} />
      <ProductNav />
      <Banner />
    </main>
  );
};

export default Earphones;
