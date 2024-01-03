import styles from "./Filters.module.css";
export default function Filters() {
  return (
    <div className={styles.filtersWrapper}>
      <div className={styles.filterTitle}>
        <h2>Filters</h2>
        <h5 className={styles.reset}>Reset Filters</h5>
      </div>
      <hr />
      <div>
        <h3 className={styles.title}>Sort By</h3>
        <div className={styles.flex}>
          <input type="radio" id="pricedec" />
          <label for="pricedec">Price low to high</label>
        </div>
        <div className={styles.flex}>
          <input type="radio" id="priceInc" />
          <label for="priceInc">Price high to low</label>
        </div>
        <hr />
      </div>
      <div>
        <h3 className={styles.title}>Department</h3>
        <div className={styles.flex}>
          <input type="checkbox" id="women" />
          <label for="women">Women's</label>
        </div>
        <div className={styles.flex}>
          <input type="checkbox" id="men" />
          <label for="men">Men's</label>
        </div>
        <hr />
      </div>

      <div>
        <h3 className={styles.title}>Categories</h3>
        <div className={styles.flex}>
          <input type="checkbox" id="mats" />
          <label for="mats">Yoga Mats</label>
        </div>
        <div className={styles.flex}>
          <input type="checkbox" id="shirt" />
          <label for="shirt">T-Shirts</label>
        </div>
        <div className={styles.flex}>
          <input type="checkbox" id="pant" />
          <label for="pant">Yoga Pants</label>
        </div>
        <div className={styles.flex}>
          <input type="checkbox" id="accessories" />
          <label for="accessories">Accessories</label>
        </div>
      </div>

      <hr />
      <div>
        <h3 className={styles.title}>Brands</h3>
        <div className={styles.flex}>
          <input type="checkbox" id="nike" />
          <label for="nike">Nike</label>
        </div>
        <div className={styles.flex}>
          <input type="checkbox" id="puma" />
          <label for="puma">Puma</label>
        </div>
        <div className={styles.flex}>
          <input type="checkbox" id="adidas" />
          <label for="adidas">Adidas</label>
        </div>
        <div className={styles.flex}>
          <input type="checkbox" id="hrx" />
          <label for="hrx">HRX</label>
        </div>
        <div className={styles.flex}>
          <input type="checkbox" id="clovia" />
          <label for="clovia">Clovia</label>
        </div>
      </div>
      <hr />
      <div>
        <h3 className={styles.title}>Customer Ratings</h3>
        <div className={styles.flex}>
          <input type="checkbox" id="oneStar" />
          <label for="oneStar">1 Star & above</label>
        </div>
        <div className={styles.flex}>
          <input type="checkbox" id="twoStar" />
          <label for="twoStar">2 Star & above</label>
        </div>
        <div className={styles.flex}>
          <input type="checkbox" id="threeStar" />
          <label for="threeStar">3 Star & above</label>
        </div>
        <div className={styles.flex}>
          <input type="checkbox" id="fourStar" />
          <label for="fourStar">4 Star & above</label>
        </div>
        <div className={styles.flex}>
          <input type="checkbox" id="fiveStar" />
          <label for="fiveStar">5 Star</label>
        </div>
      </div>
      <hr />
      <div className={styles.title}>
        <div className={styles.flex}>
          <input type="checkbox" id="OutofStock" />
          <label for="OutofStock">Include out of stock</label>
        </div>
      </div>
      <hr />
    </div>
  );
}
