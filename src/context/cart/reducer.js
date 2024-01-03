import actionsTypes from "./actionTypes";

export const cartInitialState = {
  items: [],
  wishList: [],
};

export default function cartReducer(cartState, { type, payload }) {
  switch (type) {
    case actionsTypes.ADD_TO_CART: {
      return addToCart(cartState, payload);
    }
    case actionsTypes.ADD_TO_WISHLIST: {
      return addToWishlist(cartState, payload);
    }
    case actionsTypes.REMOVE_FROM_CART: {
      return removeFromCart(cartState, payload);
    }
    case actionsTypes.CHANGE_QTY: {
      return changeItemQty(cartState, payload);
    }
    case actionsTypes.REMOVE_FROM_WISHLIST: {
      return removeFromWishlist(cartState, payload);
    }
    case actionsTypes.MOVE_TO_WISHLIST: {
      return moveToWishlist(cartState, payload);
    }
    default:
      return cartState;
  }
}
function addToCart(cartState, payload) {
  const { item } = payload;
  const copyState = {
    ...cartState,
    items: [...cartState.items, { ...item, quantity: 1 }],
  };
  return copyState;
}
function addToWishlist(cartState, payload) {
  const { item } = payload;
  const updatedState = {
    ...cartState,
    wishList: [...cartState.wishList, item],
  };
  return updatedState;
}

function removeFromCart(cartState, payload) {
  const { itemId } = payload;

  const filteredItems = cartState.items.filter(function (item) {
    if (item.itemId === itemId) {
      return false;
    }
    return true;
  });
  const updatedState = {
    ...cartState,
    items: filteredItems,
  };
  return updatedState;
}

function changeItemQty(cartState, payload) {
  const { itemId, isIncrement } = payload;

  const updatedItems = cartState.items.map(function (item) {
    if (itemId === item.itemId) {
      const updatedItem = {
        ...item,
        quantity: isIncrement ? item.quantity + 1 : item.quantity - 1,
      };
      return updatedItem;
    }
    return item;
  });
  return { ...cartState, items: updatedItems };
}

function removeFromWishlist(cartState, payload) {
  const { item } = payload;
  const updatedItems = cartState.wishList.filter(function (wishlistItem) {
    if (wishlistItem.itemId === item.itemId) {
      return false;
    }
    return true;
  });
  return { ...cartState, wishList: updatedItems };
}

function moveToWishlist(cartState, payload) {
  const { item } = payload;
  const addedWishlist = addToWishlist(cartState, payload);
  const updatedCart = removeFromCart(addedWishlist, { itemId: item.itemId });
  return updatedCart;
}

// //  {
//   quantity: ,
//   item_id: 0,
// }

// //{
//   item_id: 0,
//   isOutOfStock: false,
// },
