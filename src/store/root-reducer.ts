import { combineReducers } from "redux";
import productsReducer from "./product/products";
import modalToggleReducer from "./modalToggle/ModalToggle";
import counterReducer from "./countProduct/CountProduct";
import successToggleReducer from "./successTog/successToggle";
export const rootReducer = combineReducers({
  products: productsReducer,
  modalToggle: modalToggleReducer,
  counter: counterReducer,
  successToggle: successToggleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
