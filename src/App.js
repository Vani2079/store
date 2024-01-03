import "./App.css";
import FeatureCard from "./FeatureCard";
import ItemCard from "./ItemCard";
import Header from "./Header";
import CartItem from "./CartItem";
import PriceDetails from "./PriceDetails";
import HomePage from "./pages/HomePage";
import Filters from "./Filters";
import ProductListingPage from "./pages/ProductListingPage";
import CartPage from "./pages/CartPage";
import WishListPage from "./pages/WishListPage";
import CheckoutPage from "./pages/CheckoutPage";
import { Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useItemContext } from "./context/item/context";
import actionsTypes from "./context/item/actionTypes";
import { useCartContext } from "./context/cart/context";
import axios from "axios";

function App() {
  const { itemState, itemDispatch } = useItemContext();
  const { cartState, cartDispatch } = useCartContext();

  const fetchItems = async () => {
    const response = await axios("https://learnnode.hntejas.repl.co/items");
    itemDispatch({
      type: actionsTypes.ADD_ITEMS,
      payload: { items: response.data },
    });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route index element={<HomePage />} /> */}
        <Route path="/shop" element={<ProductListingPage />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
/**header
 * page -home page
 * {
 * hero banner,
 * Feature card,
 * brand card
 * }
 *
 * Listing page{
 * filters,
 * item card,
 * }
 *
 * Wishlist page{
 * Wishlist card
 * }
 *
 * cart{
 * cart item,
 * price details
 * }
 *
 * place order{
 * Address form,
 * payment form,
 * price details
 * }
 *
 *
 *
 *
 */

const data = {
  items: [],
  brands: [],
  categories: [],
  user: {
    name: "Vani",
    id: "1234",
    address: {
      addr1: "asdasd",
      addr2: "asdas",
    },
    payment: {
      cardNum: "123123123",
      exp: "12/12",
    },
  },
  cart: {
    items: [
      {
        id: "123",
        quantity: 1,
        isInWishlist: true,
      },
    ],
    total: 1234,
  },
  wishlist: [],
};
