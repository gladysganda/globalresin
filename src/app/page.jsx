'use client';
import styles from './page.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section
        className={styles.hero}
        style={{ backgroundImage: "url('/assets/hero.jpg')" }}
      >
        <div className={styles.overlay} />
        <div className={`${styles.heroContent} ${styles.sectionContent}`}>
          <h1 className={styles.heroHeading}>
            Global Resin: Indonesian Gum Rosin & Turpentine Manufacturer
          </h1>
          <p className={styles.heroText}>
            Discover the exceptional quality and reliability of Global Resin, Indonesian Gum Rosin and Turpentine leading supplier. We take immense pride in offering premium-grade Gum Rosin and Turpentine sourced directly from Indonesia.
          </p>
          <a href="/products" className={styles.heroLink}>
            Our Products
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className={styles.aboutSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionHeading}>About Us</h2>
          <div className={styles.sectionUnderline}></div>
          <p className={styles.sectionText}>
            Global Resin is a leading Indonesian manufacturer of gum rosin and turpentine, committed to excellence from extraction to export. Our advanced facilities produce over 500 tons of high-quality gum rosin and 125 tons of turpentine monthly, ensuring consistent supply for global industries.
          </p>
          <p className={styles.sectionText}>
            With a deep commitment to sustainability and precision, we refine every batch to exceed industry expectations. Our products stand out for their purity, performance, and dependability—trusted by clients around the world.
          </p>
          <a href="/products" className={styles.primaryButton}>
            View Our Products
          </a>
        </div>
      </section>


      {/* PRODUCTS SECTION */}
      <motion.section
        className={styles.products}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >

        <div className={styles.productsContent}>
          <h2 className={styles.sectionHeading}>Our Products</h2>
          <div className={styles.sectionUnderline}></div>
          <div
            style={{
              display: 'grid',
              gap: '2rem',
              gridTemplateColumns: 'repeat(2, 1fr)',
              justifyItems: 'center',
            }}
          >
            {[
              {
                name: 'Gum Rosin',
                image: '/assets/rosin.png',
                link: '/products/gum-rosin',

              },
              {
                name: "Gum Turpentine",
                image: '/assets/turpentine.png',
                link: '/products/gum-turpentine',
              },
            ].map((p, idx) => (
              <Link href={p.link} key={idx} className={styles.productLink}>
              <motion.div className={styles.productCard}>
                <div className={styles.imageWrapper}>
                  <img
                    src={p.image}
                    alt={`Product image of ${p.name}`}
                    className={styles.productImage}
                  />
                  <div className={styles.overlay}>
                    <p className={styles.overlayText}>{p.name}</p>
                  </div>
                </div>
              </motion.div>
                      </Link>
            ))}
          </div>
        </div>
      </motion.section>
      

      {/* CONTACT SECTION */}
      <section id="contact" className={styles.contact}>
        <div className={styles.sectionContent}>
          <h2 className={styles.contactHeading}>Global Resin - Contact Us</h2>
          <p className={styles.contactText}>
            Contact Global Resin, a gum rosin and turpentine manufacturer for the pine resin business. Our team is ready to answer your questions and supply your needs.
          </p>
          <form className={styles.form}>
            <label className={styles.formLabel}>Name</label>
            <input
              type="text"
              className={styles.formInput}
              placeholder="Your name"
            />
            <label className={styles.formLabel}>E-mail</label>
            <input
              type="email"
              className={styles.formInput}
              placeholder="Your email"
            />
            <label className={styles.formLabel}>Message</label>
            <textarea
              className={styles.formTextarea}
              placeholder="Your message"
            ></textarea>
            <button type="submit" className={styles.formButton}>
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
