import styles from './gumRosin.module.css';
import Head from 'next/head';

export const metadata = {
  title: 'Gum Rosin WW Grade | Indonesian Supplier | Global Resin',
  description:
    'Premium Gum Rosin WW Grade manufacturer and exporter in Indonesia. Global Resin supplies high-purity rosin for adhesives, paints, inks, and more.',
  keywords: [
    'gum rosin',
    'gum rosin WW grade',
    'Indonesia rosin supplier',
    'pine resin exporter',
    'rosin manufacturer',
    'adhesive resin',
    'global resin Indonesia',
  ],
  openGraph: {
    title: 'Gum Rosin WW Grade | Global Resin Indonesia',
    description:
      'Leading supplier of WW Grade Gum Rosin from Indonesia. Used in adhesives, inks, and coatings. Consistent quality, global delivery.',
    url: 'https://globalresin.co.id/products/gum-rosin',
    images: [
      {
        url: '/assets/rosin.jpg',
        width: 1200,
        height: 630,
        alt: 'Gum Rosin by Global Resin',
      },
    ],
    type: 'website',
  },
  alternates: {
    canonical: 'https://globalresin.co.id/products/gum-rosin',
  },
};

export default function GumRosinPage() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <img
          src="/assets/resin.jpg"
          alt="Gum Rosin"
          className={styles.productImage}
        />
        <h1>Gum Rosin WW Grade Supplier – Global Resin Indonesia</h1>
        <p>
          Global Resin’s <strong>Gum Rosin WW Grade</strong> is a high-purity, semi-transparent resin sourced from sustainably tapped pine trees (<em>Pinus Merkusii</em>) across Sumatra, Indonesia. Known for its pale color and consistent softening point, our gum rosin is ideal for industrial applications requiring performance, stability, and natural adhesion.

          <br /><br />
          Through steam distillation of natural oleoresin, we extract and refine our gum rosin to meet international standards. It emits a mild pine scent and becomes tacky with heat, making it an essential ingredient in adhesives, varnishes, inks, paints, and paper sizing agents.

          <br /><br />
          As a trusted <strong>gum rosin exporter in Indonesia</strong>, we package our products in corrosion-resistant galvanized steel drums, available in 225 kg or 240 kg sizes, to ensure safe handling and long shelf life for global shipment.
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
        </div>
      </section>
    </div>
  );
}
