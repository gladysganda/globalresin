'use client';
import styles from './about.module.css';

export default function AboutUsPage() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.heading}>Global Resin: Quality Manufacturer of Gum Rosin and Turpentine</h1>

        <h3 className={styles.subheading}>Founded with Vision

</h3>
        <p className={styles.paragraph}>
        Global Resin is an industry leader in gum rosin and turpentine production from pine resin. Our dedication to quality and customer satisfaction has allowed us to become one of the top manufacturers in Indonesia. We strive to provide a wide variety of products that meet the highest standards for quality.        </p>

        <h3 className={styles.subheading}>A Commitment to Excellence</h3>
        <p className={styles.paragraph}>
        We always strive to be the best. We carefully clean, filter, and grade our Gum Rosin and Gum Turpentine to make sure they're even better than what's expected in the industry. This strong commitment makes our products stand out with exceptional quality.        </p>

        <h3 className={styles.subheading}>Production Capacity</h3>
        <p className={styles.paragraph}>
        Global Resin boasts an impressive production capacity of 500 tons of top-quality gum rosin each month, ensuring a consistent supply for various industries. Additionally, our state-of-the-art facilities enable us to manufacture 125 tons of premium gum turpentine per month. This robust production capability positions us as a reliable and leading provider of these essential resin products on a monthly basis.        </p>

        <p className={styles.paragraph}>
        <a href="/#contact" className={styles.link}>Contact us</a> today to find out how we can help you with your resin needs. We look forward to hearing from you.        </p>

      </section>
    </div>
  );
}
