import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles["titleWrapper"]}>
        <Link className={styles.link} to="/">
          <h2 className={styles["title"]}>YogaStore</h2>
        </Link>
        <img
          className={styles.logoImage}
          src="./images/Logo.png"
          alt="not found"
        />
      </div>
      <div className={styles["rightHeader"]}>
        <Link className={styles.link} to="/shop">
          <h3 className={styles["headerItem"]}>Shop</h3>
        </Link>
        <Link className={styles.link} to="/wishlist">
          <h3 className={styles["headerItem"]}>Wishlist</h3>
        </Link>
        <Link className={styles.link} to="/cart">
          <h3 className={styles["headerItem"]}>Cart</h3>
        </Link>
      </div>
    </div>
  );
}
