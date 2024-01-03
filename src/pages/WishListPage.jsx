import { useNavigate } from "react-router-dom";
import Empty from "../Empty";
import ItemCard from "../ItemCard";
import { useCartContext } from "../context/cart/context";
import styles from "./WishListPage.module.css";

export default function WishListPage() {
  const navitage = useNavigate();
  function handleBtnClick() {
    navitage("/shop");
  }

  const { cartState } = useCartContext();
  if (cartState.wishList.length === 0) {
    return (
      <Empty
        text="Your Wishlist is Empty !"
        btnText="Shop Now"
        onBtnClick={handleBtnClick}
      />
    );
  }

  return (
    <div className={styles.WishListWrapper}>
      <h1 className={styles.WishListTitle}>Your Wishlist</h1>
      <div className={styles.wishItemWrapper}>
        {cartState.wishList.map((wishlistItem) => (
          <ItemCard item={wishlistItem} />
        ))}
      </div>
    </div>
  );
}
