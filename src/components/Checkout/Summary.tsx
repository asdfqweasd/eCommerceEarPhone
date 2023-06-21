import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  SummaryWrapper,
  SummaryTitle,
  ItemsWrapper,
  Item,
  ItemImg,
  ItemInfo,
  ItemPrice,
  ItemAmount,
  PriceWrapper,
  Price,
  PriceDesc,
  PriceCost,
  ContinueBtn,
} from "./CheckoutStyle";
import { RootState } from "../../store/store";
import { Product } from "../../store/product/products";

//COST CALCULATION FORMAT
type SummaryProp = {
  updateTotal: (total: number) => void;
};

const Summary = (props: SummaryProp) => {
  const products = useSelector((state: RootState) => state.products.cartItems);
  const navigate = useNavigate();

  const TOTAL = products.reduce((sum, cur) => sum + cur.price * cur.qty, 0);
  const SHIPPING = 50;
  const VAT = Math.round(TOTAL * 0.2);
  const GRANDTOTAL = TOTAL + VAT + SHIPPING;
  const { updateTotal } = props;

  const displayItems = (item: Product, index: number) => {
    return (
      <Item key={index}>
        <ItemImg
          width="64"
          height="64"
          src={require(`../../assets/${item.cartImg}`)}
          alt={item.cartImg}
        />
        <ItemInfo>
          {item.short}
          <br />
          <ItemPrice>$ {item.price.toLocaleString()}</ItemPrice>
        </ItemInfo>
        <ItemAmount>x{item.qty}</ItemAmount>
      </Item>
    );
  };

  //Didn't use ternary operator here. If no product returns code right below.
  if (products.length < 1)
    return (
      <SummaryWrapper style={{ alignItems: "center" }}>
        <iframe
          title="random gif"
          src="https://giphy.com/embed/nKERd2uhn8hhe"
          width="240"
          height="180"
          style={{ pointerEvents: "none", border: "0" }}
        />
        <ContinueBtn
          data-text="back to purchase"
          onClick={() => navigate(-1)}
          aria-label="back to previous page"
        />
      </SummaryWrapper>
    );

  return (
    <SummaryWrapper>
      <SummaryTitle></SummaryTitle>
      <ItemsWrapper>{products.map(displayItems)}</ItemsWrapper>
      <PriceWrapper>
        <Price>
          <PriceDesc>TOTAL</PriceDesc>
          <PriceCost>$ {TOTAL.toLocaleString()}</PriceCost>
        </Price>
        <Price>
          <PriceDesc>SHIPPING</PriceDesc>
          <PriceCost>$ {SHIPPING.toLocaleString()}</PriceCost>
        </Price>
        <Price>
          <PriceDesc>VAT (INCLUDED)</PriceDesc>
          <PriceCost>$ {VAT.toLocaleString()}</PriceCost>
        </Price>
        <Price data-total>
          <PriceDesc>GRAND TOTAL</PriceDesc>
          <PriceCost data-total>$ {GRANDTOTAL.toLocaleString()}</PriceCost>
        </Price>
      </PriceWrapper>
      <ContinueBtn
        data-text="continue"
        onClick={() => updateTotal(GRANDTOTAL)}
        form="checkout-form"
        content="Submit"
        value="Submit"
        aria-label="continue payment"
      />
    </SummaryWrapper>
  );
};

export default Summary;
