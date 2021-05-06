export const initialState = {
  products: [],
};

export const getProductsTotal = (products) =>
  products.reduce((amount, item) => item.total + amount, 0);

export default (state, action) => {
  switch (action.type) {
    case "ADD_TO_PRODUCTS":
      return { ...state, products: [...state.products, action.item] };

    default:
      return state;
  }
};
