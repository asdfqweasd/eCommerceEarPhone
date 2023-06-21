import { useState } from "react";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { toggleSuccess } from "../../actions";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Form,
  FormTitle,
  FormGroupTitle,
  FormGroup,
  FormLabel,
  FormSpan,
  FormInput,
  Error,
  RadioGroupWrapper,
  RadioGroup,
  RadioLabel,
  Radio,
  RadioSpan,
  CashInfo,
  CashP,
} from "./CheckoutStyle";
import { GiTakeMyMoney } from "react-icons/gi";

// type InputData = {
//   name: string;
//   email: string;
//   phoneNumber: string;
//   address: string;
//   zipCode: number;
//   city: string;
//   country: string;
//   eMoneyNum?: number | undefined;
//   eMoneyPin?: number | undefined;
//   payment?: string;
// };
// yup version 0.32.9

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const Inputs = () => {
  const [payment, setPayment] = useState<string>("e-money");
  const errorBorder = { border: "2px solid #CD2C2C" };
  const errorColor = { color: "#CD2C2C" };
  const dispatch = useDispatch();

  // schema checks input errors
  const schema = yup.object().shape({
    name: yup.string().required("anonymous?"),
    email: yup
      .string()
      .email("example@example.com")
      .required("provide email address"),
    phoneNumber: yup
      .string()
      .required("provide phone number")
      .matches(phoneRegExp, "+45 1234-5678"),
    address: yup.string().required("provide address"),
    zipCode: yup
      .number()
      .typeError("Must be a number")
      .required("provide zip code")
      .test("len", "Must be less than 11 characters", (val) =>
        val ? val.toString().length < 11 : false
      ),
    city: yup.string().required("provide city"),
    country: yup.string().required("provide country"),
    eMoneyNum: yup.number().when("payment", (payment, schema) => {
      if (payment === "e-money") {
        return yup
          .number()
          .typeError("Must be a number")
          .test("len", "Must be 9 characters", (val) =>
            val ? val.toString().length === 9 : false
          );
      }
      return schema;
    }),
    eMoneyPin: yup.number().when("payment", (payment, schema) => {
      if (payment === "e-money") {
        return yup
          .number()
          .typeError("Must be a number")
          .test("len", "Must be 4 characters", (val) =>
            val ? val.toString().length === 4 : false
          );
      }
      return schema;
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  type SchemaData = {
    name: yup.StringSchema;
    email: yup.StringSchema;
    phoneNumber: yup.StringSchema;
    address: yup.StringSchema;
    zipCode: yup.NumberSchema;
    city: yup.StringSchema;
    country: yup.StringSchema;
    eMoneyNum?: yup.NumberSchema | undefined;
    eMoneyPin?: yup.NumberSchema | undefined;
    payment?: yup.StringSchema | undefined;
  };

  const onSubmit: SubmitHandler<SchemaData> = (data) => {
    dispatch(toggleSuccess());
    setTimeout(
      () =>
        alert(
          `just to make sure everything is collected correctly \n${JSON.stringify(
            data
          )}`
        ),
      1200
    );
  };

  return (
    <Form id="checkout-form" onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>checkout</FormTitle>

      <FormGroupTitle>billing details</FormGroupTitle>
      <FormGroup>
        <FormLabel>
          <FormSpan style={errors.name ? errorColor : {}}>Name</FormSpan>
          <FormInput
            {...register("name")}
            style={errors.name ? errorBorder : {}}
            placeholder="Alex"
          />
          <Error>{errors.name?.message}</Error>
        </FormLabel>
        <FormLabel>
          <FormSpan style={errors.email ? errorColor : {}}>
            Email Address
          </FormSpan>
          <FormInput
            {...register("email")}
            style={errors.email ? errorBorder : {}}
            placeholder="example@example.com"
          />
          <Error>{errors.email?.message}</Error>
        </FormLabel>
        <FormLabel>
          <FormSpan style={errors.phoneNumber ? errorColor : {}}>
            Phone Number
          </FormSpan>
          <FormInput
            {...register("phoneNumber")}
            style={errors.phoneNumber ? errorBorder : {}}
            placeholder="+45 555-0136"
          />
          <Error>{errors.phoneNumber?.message}</Error>
        </FormLabel>
      </FormGroup>

      <FormGroupTitle>Shipping info</FormGroupTitle>
      <FormGroup>
        <FormLabel data-address>
          <FormSpan style={errors.address ? errorColor : {}}>Address</FormSpan>
          <FormInput
            {...register("address")}
            style={errors.address ? errorBorder : {}}
            placeholder="1137 Williams Avenue"
          />
          <Error>{errors.address?.message}</Error>
        </FormLabel>
        <FormLabel>
          <FormSpan style={errors.zipCode ? errorColor : {}}>
            Post Code
          </FormSpan>
          <FormInput
            {...register("zipCode")}
            style={errors.zipCode ? errorBorder : {}}
            placeholder="4067"
          />
          <Error>{errors.zipCode?.message}</Error>
        </FormLabel>
        <FormLabel>
          <FormSpan style={errors.city ? errorColor : {}}>City</FormSpan>
          <FormInput
            {...register("city")}
            style={errors.city ? errorBorder : {}}
            placeholder="BNE"
          />
          <Error>{errors.city?.message}</Error>
        </FormLabel>
        <FormLabel>
          <FormSpan style={errors.country ? errorColor : {}}>Country</FormSpan>
          <FormInput
            {...register("country")}
            style={errors.country ? errorBorder : {}}
            placeholder="Australia"
          />
          <Error>{errors.country?.message}</Error>
        </FormLabel>
      </FormGroup>

      <FormGroupTitle>payment details</FormGroupTitle>
      <RadioGroupWrapper>
        <FormSpan>Payment method</FormSpan>
        <RadioGroup>
          <RadioLabel htmlFor="e-money" data-checked={payment === "e-money"}>
            <Radio
              id="e-money"
              checked={payment === "e-money"}
              onClick={(e) => setPayment((e.target as HTMLInputElement).value)}
              {...register("payment", { required: true })}
              name="PAYMENT_METHOD"
              type="radio"
              value="e-money"
            />
            <RadioSpan>e-Money</RadioSpan>
          </RadioLabel>
          <RadioLabel htmlFor="cash" data-checked={payment === "cash"}>
            <Radio
              id="cash"
              checked={payment === "cash"}
              onClick={(e) => setPayment((e.target as HTMLInputElement).value)}
              {...register("payment", { required: true })}
              name="PAYMENT_METHOD"
              type="radio"
              value="cash"
            />
            <RadioSpan>Cash on Delivery</RadioSpan>
          </RadioLabel>
        </RadioGroup>
      </RadioGroupWrapper>
      {payment === "e-money" ? (
        <FormGroup data-aos="fade" data-aos-duration="500" data-aos-once="true">
          <FormLabel>
            <FormSpan style={errors.eMoneyNum ? errorColor : {}}>
              e-Money Number
            </FormSpan>
            <FormInput
              {...register("eMoneyNum")}
              style={errors.eMoneyNum ? errorBorder : {}}
              placeholder="238521993"
            />
            <Error>{errors.eMoneyNum?.message}</Error>
          </FormLabel>
          <FormLabel>
            <FormSpan style={errors.eMoneyPin ? errorColor : {}}>
              e-Money Pin
            </FormSpan>
            <FormInput
              {...register("eMoneyPin")}
              style={errors.eMoneyPin ? errorBorder : {}}
              placeholder="6891"
            />
            <Error>{errors.eMoneyPin?.message}</Error>
          </FormLabel>
        </FormGroup>
      ) : (
        <CashInfo data-aos="fade" data-aos-duration="500" data-aos-once="true">
          <GiTakeMyMoney
            size={48}
            style={{ minWidth: "48px" }}
            color={"#D87D4A"}
          />
          <CashP>
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </CashP>
        </CashInfo>
      )}
    </Form>
  );
};

export default Inputs;
