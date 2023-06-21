import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Home from "./pages/Home";
import GlobalStyle from "./GlobalStyle";
import Footer from "./components/Footer/Footer";
import Headphones from "./pages/Category/Headphones";
import AOS from "aos";
import "aos/dist/aos.css";
import Speakers from "./pages/Category/Speakers";
import Earphones from "./pages/Category/Earphones";
import CartModal from "./components/CartModal/CartModal";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./components/Checkout/Checkout";

const App = () => {
  AOS.init({
    once: true,
  });
  return (
    <>
      <GlobalStyle />
      <CartModal />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route path="/product_detail/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
