import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../../actions";
import { addProduct, Product } from "../../../store/product/products";
import { RootState } from "../../../store/store";
import {
  AddCartWrapper,
  AddCartAmount,
  AddCartIncrease,
  AddCartDecrease,
  AddCartBtn,
} from "./ProductMain.style";

const AddCart = ({ data }: { data: Product }) => {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <AddCartWrapper>
      <AddCartAmount>
        <AddCartDecrease onClick={() => dispatch(decrement())}>
          -
        </AddCartDecrease>
        {counter}
        <AddCartIncrease onClick={() => dispatch(increment())}>
          +
        </AddCartIncrease>
      </AddCartAmount>
      <AddCartBtn
        data-text="add to cart"
        onClick={() => dispatch(addProduct(data, counter))}
      />
    </AddCartWrapper>
  );
};

export default AddCart;
