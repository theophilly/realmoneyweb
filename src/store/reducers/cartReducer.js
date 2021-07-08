const initState = {
  products: [],
  totalPrice: 0,
  totalQuantities: 0,
};

const cartReducer = (state = initState, action) => {
  let findPro;
  let index;
  switch (action.type) {
    case 'ADD_TO_CART':
      const { product, quantity } = action.payload;
      const check = state.products.find((pr) => pr.id === product.id);
      if (check) {
        return state;
      } else {
        const Tprice = state.totalPrice + product.value;
        const Tquantities = state.totalQuantities++;
        // product.quantity = quantity;
        return {
          ...state,
          products: [...state.products, product],
          totalPrice: Tprice,
          totalQuantities: Tquantities,
        };
      }
    case 'INC': {
      let Tprice;
      findPro = state.products.find((product) => product.id === action.payload);
      index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      findPro.quantity += 1;
      state.products[index] = findPro;
      Tprice = state.totalPrice + findPro.value * findPro.quantity;
      return {
        ...state,
        totalPrice: Tprice,
        //  totalQuantities: state.totalQuantities + 1,
      };
    }
    case 'DEC': {
      let Tprice;
      findPro = state.products.find((product) => product.id === action.payload);
      index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (findPro.quantity > 1) {
        findPro.quantity -= 1;
        state.products[index] = findPro;
        return {
          ...state,
          totalPrice: state.totalPrice - findPro.discountPrice,
          totalQuantities: state.totalQuantities - 1,
        };
      } else {
        return state;
      }
    }
    case 'REMOVE':
      findPro = state.products.find((product) => product.id === action.payload);
      const filtered = state.products.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        products: filtered,
        totalPrice: state.totalPrice - findPro.value,
        totalQuantities: state.totalQuantities--,
      };
    default:
      return state;
  }
};
export default cartReducer;
