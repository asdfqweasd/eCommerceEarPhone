import { Product } from "../../../store/product/products";
import { GlobalBtnBrown } from "../../../GlobalBtn";
import {
  PreferenceWrapper,
  PreferenceTitle,
  PreferenceProductWrapper,
  PreferenceProduct,
  PreferenceItem,
  PreferenceItemName,
} from "./ProductMain.style";

const Preference = ({ data }: { data: Product }) => {
  return (
    <PreferenceWrapper>
      <PreferenceTitle>you may also like</PreferenceTitle>
      <PreferenceProductWrapper>
        {data.preference.map((item, index) => {
          return (
            <PreferenceProduct key={index}>
              <PreferenceItem
                width="350"
                height="318"
                src={require(`../../../assets/${item.url}`)}
              />
              <PreferenceItemName>{item.product}</PreferenceItemName>
              <GlobalBtnBrown data-text="see product" to={item.link} />
            </PreferenceProduct>
          );
        })}
      </PreferenceProductWrapper>
    </PreferenceWrapper>
  );
};

export default Preference;
