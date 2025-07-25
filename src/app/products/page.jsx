import Link from 'next/link';
import styles from './products.module.css';

export default function ProductsPage() {
  return (
    <div className={styles.container}>
      {/* Gum Rosin Section */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className="container">
          <div className={styles.contentBlock}>
            <div className={styles.productImageWrapper}>
              <img
                src="/assets/rosin.png"
                alt="Gum Rosin"
                className={styles.productImage}
                loading="lazy"
              />
            </div>
            <div className={styles.textContent}>
              <h2>Global Resin's Gum Rosin</h2>
              <p>
                At Global Resin, we pride ourselves on delivering a superior product—our Gum Rosin. Derived through meticulous live tapping of Pine trees, our Gum Rosin is a premium, 100% natural offering. To ensure unparalleled quality and consistency, it undergoes a rigorous purification, filtration, and grading process.
                <br /><br />
                Available in the highly sought-after WW grade, our Gum Rosin possesses remarkable properties that make it the perfect choice for various industries. With excellent adhesion, heat stability, and solubility, it shines in applications such as adhesives, inks, rubber, and plastics.
                <br /><br />
                When you choose Global Resin's Gum Rosin, you can trust in our commitment to unwavering quality standards. We guarantee that our product stands out among the competition, delivering exceptional performance and unwavering reliability.
                <br /><br />
                Experience the pinnacle of Gum Rosin excellence with Global Resin. Elevate your products and applications with our premium-grade offering. Trust in our dedication to superior quality, performance, and customer satisfaction.
              </p>
              <div className={styles.buttonGroup}>
                <a
                  href="/MSDS_ROSIN.pdf"
                  className={styles.button}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MSDS
                </a>
                <a
                  href="/TDS_GSP_ROSIN.pdf"
                  className={styles.button}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TDS
                </a>
                <a
                  href="/COA_GSP_ROSIN_WW.pdf"
                  className={styles.button}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  COA
                </a>
                <Link href="/products/gum-rosin" className={styles.button}>
                  Gum Rosin Page
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Turpentine Section */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className="container">
          <div className={styles.contentBlockReverse}>
            <div className={styles.productImageWrapper}>
              <img
                src="/assets/turpentine.png"
                alt="Gum Turpentine"
                className={styles.productImage}
                loading="lazy"
              />
            </div>
            <div className={styles.textContent}>
              <h2>Global Pine Resin's Turpentine</h2>
              <p>
                Global Resin takes pride in presenting our exceptional Gum Turpentine, a natural product derived from the resin of pine trees. This clear, colorless liquid boasts a distinctive odor and high flammability.
                <br /><br />
                Our Gum Turpentine is a versatile solution, perfect for a wide range of applications. It excels in thinning oil-based paints, varnishes, and enamels, allowing for effortless application and smooth finishes. It also serves as a key ingredient in select soaps, inks, and insecticides, adding value and efficacy to these products.
                <br /><br />
                With Global Pine Resin's Gum Turpentine, you can be confident in its superior quality. We guarantee that our product surpasses expectations, delivering the highest standards of excellence for your specific needs.
              </p>
              <div className={styles.buttonGroup}>
                <a
                  href="/MSDS_GSP_TURPENTINE.pdf"
                  className={styles.button}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MSDS
                </a>
                <a
                  href="/COA_TURPENTINE.pdf"
                  className={styles.button}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  COA
                </a>
                <Link href="/products/gum-turpentine" className={styles.button}>
                  Gum Turpentine Page
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}


