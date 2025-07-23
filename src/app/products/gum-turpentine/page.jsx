import styles from './gumTurpentine.module.css';

export default function GumTurpentinePage() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <img
          src="/assets/turpentine.png"
          alt="Gum Turpentine"
          className={styles.productImage}
        />
        <h1>Gum Turpentine</h1>
        <p>
          Global Resin’s Gum Turpentine is a clear, colorless, naturally derived solvent extracted from pine resin. Known for its distinctive scent and high flammability, it's an essential ingredient in industrial and chemical applications.
          <br /><br />
          It is widely used to thin oil-based paints and varnishes, clean brushes, and as a raw material in the production of inks, fragrances, and insecticides.
          <br /><br />
          Our turpentine is refined to meet stringent purity standards, ensuring optimal performance across various applications.
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
