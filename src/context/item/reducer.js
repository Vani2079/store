import actionsTypes from "./actionTypes";

export const initialState = {
  items: [],
  brands: [],
  categories: [],
};

const itemReducer = (itemState, { type, payload }) => {
  switch (type) {
    case actionsTypes.ADD_ITEMS: {
      return addItems(itemState, payload);
    }
    case actionsTypes.ADD_BRANDS: {
      return addBrands(itemState, payload);
    }
    case actionsTypes.ADD_CATEGORIES: {
      return addCategories(itemState, payload);
    }
    default:
      return itemState;
  }
};

function addItems(itemState, payload) {
  const newItems = payload.items;
  return {
    ...itemState,
    items: newItems,
  };
}

function addBrands(itemState, payload) {
  const { brands } = payload;
  return {
    ...itemState,
    brands: brands,
  };
}

function addCategories(itemState, payload) {
  const { categories } = payload;
  return {
    ...itemState,
    categories,
  };
}

export default itemReducer;
