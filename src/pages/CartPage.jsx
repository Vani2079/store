import { Link, useNavigate } from "react-router-dom";
import CartItem from "../CartItem";
import PriceDetails from "../PriceDetails";
import styles from "./CartPage.module.css";
import { useCartContext } from "../context/cart/context";
import Empty from "../Empty";

export default function CartPage() {
  const navigate = useNavigate();
  function handleEmptyClick() {
    navigate("/shop");
  }

  const { cartState } = useCartContext();
  if (cartState.items.length === 0) {
    return (
      <div className={styles.cartWrapper}>
        <Empty
          text="Your Cart is Empty!"
          btnText="Shop Now"
          onBtnClick={handleEmptyClick}
        />
      </div>
    );
  }

  return (
    <div className={styles.cartWrapper}>
      <h1 className={styles.cartTitle}> Your Cart</h1>
      <div className={styles.flexWrapper}>
        <div>
          {cartState.items.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
        <div className={styles.rightWrapper}>
          <PriceDetails />
          <Link className={styles.link} to="/checkout">
            <button className={styles.buyBtn}>Proceed to buy</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
