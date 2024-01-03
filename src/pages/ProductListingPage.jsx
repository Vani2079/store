import styles from "./ProductListingPage.module.css";
import Filters from "../Filters";
import ItemCard from "../ItemCard";
import { useItemContext } from "../context/item/context";

//const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export default function ProductListingPage() {
  const { itemState } = useItemContext();

  return (
    <div className={styles.listingPageWrapper}>
      <Filters />
      <div className={styles.flexWrapper}>
        {itemState.items.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </div>
  );
}
