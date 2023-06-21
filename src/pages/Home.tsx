import Banner from "../components/Banner/Banner";

import HomeMain from "../components/Main/HomeMain/HomeMain";
import HomeProducts from "../components/MainProduct/HomeProduct/homeProducts";
import ProductNav from "../components/ProductNav/ProductNav";

const Home = () => {
  return (
    <main>
      <HomeProducts />
      <ProductNav />
      <HomeMain />
      <Banner />
    </main>
  );
};

export default Home;
