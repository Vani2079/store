import styles from "./CartItem.module.css";
import { IoIosStar } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { useCartContext } from "./context/cart/context";
import actionsTypes from "./context/cart/actionTypes";
export default function CartItem({ item }) {
  // const card = {
  //   itemId: 1,
  //   brand: "NIKE",
  //   category: " Yoga pant",
  //   mrp: 125,
  //   inStock: true,
  //   discount: 15,
  //   gender: "M",
  //   imageURL:
  //     "https://cdn.thewirecutter.com/wp-content/media/2023/09/leggings-2048px-lululemon-wunder-train-tight.webp",
  //   description: "Ankel length cotton Yoga pant",
  //   reviews: 4,
  //   rating: 4.1,
  //   title: "Yoga Pant",
  //   quantity: 1,
  //   price: 111,
  // };
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
    quantity,
  } = item;

  const price = mrp - mrp * (discount / 100);
  const { cartState, cartDispatch } = useCartContext();

  function handleCartItemInc() {
    cartDispatch({
      type: actionsTypes.CHANGE_QTY,
      payload: { itemId: itemId, isIncrement: true },
    });
  }

  function handleCartItemDec() {
    cartDispatch({
      type: actionsTypes.CHANGE_QTY,
      payload: { itemId: itemId, isIncrement: false },
    });
  }

  function handleDeleteCartItem() {
    cartDispatch({
      type: actionsTypes.REMOVE_FROM_CART,
      payload: { itemId },
    });
  }

  function moveToWishlistBtn() {
    cartDispatch({
      type: actionsTypes.MOVE_TO_WISHLIST,
      payload: { item },
    });
  }

  const isInWishlist = cartState.wishList.find(function (wishlistItem) {
    if (item.id === wishlistItem.id) {
      return true;
    }
    return false;
  });

  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={imageURL} alt="cartItem" />
      <div className={styles.textWrapper}>
        <h2>{category}</h2>
        <h3 className={styles.description}>{description}</h3>
        <h5 className={styles.brand}>By {brand}</h5>
        <div className={styles.iconWrapper}>
          <span>{rating}</span>
          <IoIosStar className={styles.starIcon} />
        </div>
        <div className={styles.buttonWrapper}>
          <h5>{discount}% off</h5>
        </div>
        <h3 className={styles.price}>₹ {price}</h3>

        <span className={styles.mrp}>M.R.P ₹{mrp}</span>
      </div>
      <div className={styles.actionWrapper}>
        <button
          className={styles.wishlistBtn}
          onClick={moveToWishlistBtn}
          disabled={isInWishlist}
        >
          {isInWishlist ? "Move to wishlist" : "Wishlisted"}
        </button>

        <div className={styles.quantityWrapper}>
          <button
            className={styles.decrementBtn}
            disabled={quantity === 1}
            onClick={handleCartItemDec}
          >
            -
          </button>
          <span className={styles.quantity}>{quantity}</span>
          <button className={styles.incrementBtn} onClick={handleCartItemInc}>
            +
          </button>
          <button className={styles.delButton} onClick={handleDeleteCartItem}>
            <MdDeleteOutline className={styles.delIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}
