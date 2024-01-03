import styles from "./PriceDetails.module.css";
import { useCartContext } from "./context/cart/context";
export default function PriceDetails() {
  const { cartState } = useCartContext();
  const totalPrice = cartState.items.reduce(function (price, item) {
    price = price + item.mrp * item.quantity;
    return price;
  }, 0);

  // const discount = totalPrice * (cartState.item.discount / 100);

  return (
    <div className={styles.priceWrapper}>
      <h3 className={styles.priceTitle}>Price Details</h3>
      <hr />
      <div className={styles.flexWrapper}>
        <h4>Price :</h4>
        <span>₹{totalPrice}</span>
      </div>
      <div className={styles.flexWrapper}>
        <h4>Discount :</h4>
        <span className={styles.discount}>-₹50</span>
      </div>
      <hr />
      <div className={styles.flexWrapper}>
        <h4>Total Amount :</h4>
        <span>₹{}</span>
      </div>
      <hr />
    </div>
  );
}
