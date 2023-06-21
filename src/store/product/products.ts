type InTheBoxItem = [string, string];
type GalleryItem = [string, string];
interface PreferenceItem {
  url: string;
  alt: string;
  product: string;
  link: string;
}

export type Product = {
  id: string;
  short: string;
  price: number;
  qty: number;
  productIMG: string;
  feature: string;
  info: string;
  featureDesc1: string;
  featureDesc2: string;
  cartImg: string;
  inTheBox: InTheBoxItem[];
  gallery: GalleryItem[];
  preference: PreferenceItem[];
};

export type ProductState = {
  cartItems: Product[];
};

export type ProductsReducerAction = {
  readonly type: string;
  payload: Product;
  unit?: number;
};

//product
export const resProduct = () => {
  return {
    type: "RES_PRODUCT",
  };
};
export const addProduct = (product: Product, unit: number) => {
  return {
    type: "ADD_PRODUCT",
    payload: product,
    unit: unit,
  };
};
export const deleteProduct = (product: Product) => {
  return {
    type: "DEL_PRODUCT",
    payload: product,
  };
};
const initialState: ProductState = {
  cartItems: [],
};

const onAdd = (currentItem: Product[], newItem: Product, unit: number) => {
  const exist = currentItem.find((item) => item.id === newItem.id);

  if (exist) {
    const result = currentItem.map((item) =>
      item.id === newItem.id ? { ...exist, qty: exist.qty + unit } : item
    );
    return result;
  } else {
    const addedNewItem = [...currentItem, { ...newItem, qty: unit }];
    return addedNewItem;
  }
};

const onRemove = (currentItem: Product[], delItem: Product): Product[] => {
  const exist = currentItem.find((item) => item.id === delItem.id);

  if (exist && exist.qty === 1) {
    const result = currentItem.filter((item) => item.id !== delItem.id);
    return result;
  } else {
    const decrementedItem = currentItem.map((item) =>
      item.id === delItem.id && exist
        ? { ...exist, qty: exist ? exist.qty - 1 : 0 }
        : item
    );
    return decrementedItem;
  }
};

const productsReducer = (
  state = initialState,
  action: ProductsReducerAction
): ProductState => {
  switch (action.type) {
    case "RES_PRODUCT":
      return initialState;
    case "ADD_PRODUCT":
      return {
        ...state,
        cartItems: onAdd(
          state.cartItems,
          action.payload,
          action.unit ? action.unit : 0
        ),
      };
    case "DEL_PRODUCT":
      return {
        ...state,
        cartItems: onRemove(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default productsReducer;
