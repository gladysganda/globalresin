import styles from './gumRosin.module.css';

export default function GumRosinPage() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <img
          src="/assets/resin.jpg"
          alt="Gum Rosin"
          className={styles.productImage}
        />
        <h1>Gum Rosin</h1>
        <p>
          Our Gum Rosin is a 100% natural, high-quality resin derived from pine tree sap via live tapping. It’s purified, filtered, and graded to meet industry standards.
          <br /><br />
          Gum Rosin is used widely in adhesives, rubber, inks, coatings, and more due to its excellent adhesive properties, thermal stability, and solubility.
          <br /><br />
          We provide WW grade Gum Rosin that complies with international requirements for industrial applications.
        </p>

        <div className={styles.buttonGroup}>
          <a href="#" className={styles.button}>MSDS</a>
          <a href="#" className={styles.button}>TDS</a>
          <a href="#" className={styles.button}>COA</a>
        </div>
      </section>
    </div>
  );
}
