import { SPEAKERS } from "../../data/CategoryData";
import OtherProducts from "../../components/MainProduct/OtherProduct/otherProducts";
import Banner from "../../components/Banner/Banner";
import ProductNav from "../../components/ProductNav/ProductNav";
import CategoryMain from "../../components/Main/CategoryMain/CategoryMain";
const Speakers = () => {
  return (
    <main>
      <OtherProducts pageTitle="speakers" />
      <CategoryMain data={SPEAKERS} />
      <ProductNav />
      <Banner />
    </main>
  );
};

export default Speakers;
