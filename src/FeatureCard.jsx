import styles from "./FeatureCard.module.css";
export default function FeatureCard({
  img = "https://images-platform.99static.com//jCKcmJlZ0vmeFqVT9MGEU5gv3nI=/174x157:794x777/fit-in/500x500/99designs-contests-attachments/112/112509/attachment_112509682",
  text = "Yoga Girl",
}) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.featureImage} src={img} alt={text} />
      <h3 className={styles.featureText}>{text}</h3>
    </div>
  );
}
