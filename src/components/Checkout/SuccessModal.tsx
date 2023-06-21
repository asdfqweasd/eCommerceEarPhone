import { useSelector, useDispatch } from "react-redux";
import { toggleSuccess } from "../../actions";
import { Product, resProduct } from "../../store/product/products";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import {
  ModalContainer,
  ModalWrapper,
  ModalIcon,
  ModalH3,
  ModalP,
  ModalInfo,
  ModalItemWrapper,
  ModalItem,
  ModalItemImg,
  ModalItemInfo,
  ModalItemPrice,
  ModalAmount,
  ModalTotal,
  ModalTotalLabel,
  ModalTotalCost,
  ModalButton,
} from "./CheckoutStyle";
import { RootState } from "../../store/store";

type ModalProps = {
  total: number;
};

const SuccessModal = (props: ModalProps) => {
  const products = useSelector((state: RootState) => state.products.cartItems);
  const success = useSelector((state: RootState) => state.successToggle);
  const dispatch = useDispatch();
  const { total } = props;
  success ? disableBodyScroll(document) : enableBodyScroll(document);

  const handleButton = () => {
    setTimeout(() => dispatch(resProduct()), 1000);
    dispatch(toggleSuccess());
  };

  const displayItems = (item: Product, index: number) => {
    return (
      <ModalItem key={index}>
        <ModalItemImg
          width="50"
          height="50"
          src={require(`../../assets/${item.cartImg}`)}
          alt={item.cartImg}
        />
        <ModalItemInfo>
          {item.short}
          <ModalItemPrice>$ {item.price.toLocaleString()}</ModalItemPrice>
        </ModalItemInfo>
        <ModalAmount>x{item.qty}</ModalAmount>
      </ModalItem>
    );
  };
  return (
    <ModalContainer data-display={success}>
      <ModalWrapper>
        <ModalIcon> &#10003;</ModalIcon>
        <ModalH3>
          THANK YOU <br />
          FOR YOUR ORDER
        </ModalH3>
        <ModalP>You will receive an email confirmation shortly.</ModalP>
        <ModalInfo>
          <ModalItemWrapper>{products.map(displayItems)}</ModalItemWrapper>
          <ModalTotal>
            <ModalTotalLabel>grand total</ModalTotalLabel>
            <ModalTotalCost>$ {total.toLocaleString()}</ModalTotalCost>
          </ModalTotal>
        </ModalInfo>
        <ModalButton
          data-text="back to home"
          onClick={handleButton}
          aria-label="linke to home page"
          to="/"
        />
      </ModalWrapper>
    </ModalContainer>
  );
};

export default SuccessModal;
