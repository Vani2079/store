import PriceDetails from "../PriceDetails";
import styles from "./CheckoutPage.module.css";

export default function CheckoutPage({ totalPrice = 100 }) {
  return (
    <div className={styles.checkoutWrapper}>
      <h1 className={styles.checkoutTitle}>Place Order</h1>
      <div className={styles.flexWrapper}>
        <div className={styles.leftWrapper}>
          <h3>Add Address</h3>
          <form className={styles.addressForm}>
            <input
              type="text"
              placeholder="Full Name"
              className={styles.inputStyle}
              required
            />
            <input
              type="phone"
              placeholder="Phone Number"
              className={styles.inputStyle}
              required
            />
            <input
              type="text"
              placeholder="Shipping Address"
              className={styles.inputStyle}
              required
            />
          </form>
          <h3 className={styles.paymentTitle}>Payment</h3>
          <form className={styles.addressForm}>
            <input
              type="text"
              placeholder="Enter Card Number"
              className={styles.inputStyle}
            />
            <input
              placeholder="Select Expiry Card Date"
              type="date"
              className={styles.inputStyle}
            />
            <input
              placeholder="CVV"
              type="number"
              className={styles.inputStyle}
              required
            />
          </form>
          <button className={styles.payBtn}>PAY ₹{totalPrice} </button>
        </div>
        <PriceDetails />
      </div>
    </div>
  );
}
