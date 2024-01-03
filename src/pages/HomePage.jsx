import styles from "./HomePage.module.css";
import FeatureCard from "../FeatureCard";

const Categories = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dyr9wrzth/image/upload/v1702550923/yogamats_wnlysa.jpg",
    text: "Yoga Mat",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dyr9wrzth/image/upload/v1702550922/yogaTop_pwebnn.webp",
    text: "Tops",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dyr9wrzth/image/upload/v1702550922/yogaPant_rbj9wo.webp",
    text: "Pants",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dyr9wrzth/image/upload/v1702550922/accessaries_ddzcco.jpg",
    text: "Accesseries",
  },
];
const Brands = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dkavbodkk/image/upload/v1696529785/landing-page-images/landing%20page%20filter%20imgs/nqoencagrdw36jdqjwzr.png",
    text: "Nike",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dkavbodkk/image/upload/v1696529785/landing-page-images/landing%20page%20filter%20imgs/gabbb8b1d66a1iftkld4.png",
    text: "HRX",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dkavbodkk/image/upload/v1696529785/landing-page-images/landing%20page%20filter%20imgs/dpf7og8vcv687ragtdda.png",
    text: "Adidas",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dkavbodkk/image/upload/v1696529785/landing-page-images/landing%20page%20filter%20imgs/btpeypvgoaxx0m8xc2ic.png",
    text: "Puma",
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/dyr9wrzth/image/upload/v1702557699/clovia_lanx9a.png",
    text: "Clovia",
  },
];

export default function HomePage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.sectionWrapper}>
        <h2 className={styles.title}>Featured Categories </h2>
        <div className={styles.flexWrapper}>
          {Categories.map((category) => (
            <FeatureCard img={category.img} text={category.text} />
          ))}
        </div>
      </div>
      <div className={styles.sectionWrapper}>
        <h2 className={styles.title}>Best of Brands </h2>
        <div className={styles.flexWrapper}>
          {Brands.map((category) => (
            <FeatureCard img={category.img} text={category.text} />
          ))}
        </div>
      </div>
    </div>
  );
}
