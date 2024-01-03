import styles from "./ItemCard.module.css";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { useCartContext } from "./context/cart/context";
import actionsTypes from "./context/cart/actionTypes";
import { useNavigate } from "react-router-dom";

export default function ItemCard({ item }) {
  const { cartState, cartDispatch } = useCartContext();
  const navigate = useNavigate();
  const {
    itemId,
    brand,
    category,
    mrp,
    inStock,
    discount,
    gender,
    imageURL,
    description,
    reviews,
    rating,
    title,
  } = item;

  const { items: cartItems, wishList } = cartState;
  const isInCart = cartItems.find(function (cartItem) {
    if (cartItem.itemId === itemId) {
      return true;
    }
    return false;
  });

  const isInWishlist = wishList.find(function (wishListItem) {
    if (wishListItem.itemId === itemId) {
      return true;
    }
    return false;
  });

  function handleAddToCart() {
    if (isInCart) {
      navigate("/cart");
    } else {
      cartDispatch({
        type: actionsTypes.ADD_TO_CART,
        payload: { item },
      });
    }
  }

  function handleWishlistBtn() {
    cartDispatch({
      type: isInWishlist
        ? actionsTypes.REMOVE_FROM_WISHLIST
        : actionsTypes.ADD_TO_WISHLIST,
      payload: { item },
    });
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.imageWrapper}>
          <div onClick={handleWishlistBtn}>
            {isInWishlist ? (
              <IoHeartSharp className={styles.wishlistBtn} />
            ) : (
              <IoHeartOutline className={styles.wishlistBtn} />
            )}
          </div>
          <img className={styles.itemImage} src={imageURL} alt="ItemCard" />
          <div className={styles.ratingReview}>
            <span className={styles.rating}>{rating}</span>
            <FaRegStar fill="yellow" className={styles.ratingStar} />
            {/* <span className={styles.reviews}>{reviews}</span> */}
          </div>
        </div>
        <div className={styles.itemDetails}>
          <h4 className={styles.brandText}>{brand}</h4>
          <h3 className={styles.titleText}>{title}</h3>
          <div className={styles.flexRow}>
            <div className={styles.flexRow}>
              <span className={styles.price}>&#x20b9;{mrp}</span>
              <span className={styles.discount}>({discount}% off)</span>
            </div>
            <button className={styles.cartButton} onClick={handleAddToCart}>
              {isInCart ? "Go to Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
