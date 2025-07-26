'use client';
import Head from 'next/head';
import styles from './gumTurpentine.module.css';


export default function GumTurpentinePage() {
    return (
        <>
            <Head>
                <title>Gum Turpentine Manufacturer Indonesia | Global Resin</title>
                <meta
                    name="description"
                    content="Global Resin is a trusted gum turpentine supplier from Indonesia. We manufacture and export premium-quality gum turpentine for industrial use worldwide."
                />
                <meta property="og:title" content="Gum Turpentine Manufacturer Indonesia | Global Resin" />
                <meta
                    property="og:description"
                    content="Natural gum turpentine from pine resin, manufactured in Indonesia and exported globally."
                />
            </Head>


            <section className={styles.heroSection}>
                <div className={styles.container}>
                    <h2>Gum Turpentine Manufacturer in Indonesia</h2>
                    <br></br>
                    <p>
                        Global Resin proudly offers premium-grade <strong>Gum Turpentine</strong> extracted
                        from naturally tapped pine trees in Indonesia. Our gum turpentine is clear,
                        colorless, and widely used in a variety of industrial and chemical applications.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <div className={styles.productImageWrapper}>
                        <img
                            src="/assets/turpentine.png"
                            alt="Gum Turpentine"
                            className={styles.productImage}
                            loading="lazy"
                        />
                    </div>

                    <div className={styles.contentDescription}>
                        <h2>Applications of Gum Turpentine</h2>
                        <p>
                            Gum Turpentine is a powerful, natural solvent commonly used in:
                        </p>
                        <ul>
                            <li>Paint thinners and varnish removers</li>
                            <li>Adhesives and industrial cleaners</li>
                            <li>Soaps, perfumes, and cosmetic ingredients</li>
                            <li>Inks and insecticides</li>
                        </ul>


                        <h2>Why Choose Global Resin?</h2>
                        <ul className="customList">
                            <li>Experienced gum turpentine exporter from Indonesia</li>
                            <li>Monthly production capacity of 125 tons</li>
                            <li>Export-ready with TDS, MSDS, and COA documents</li>
                            <li>Sustainably sourced pine resin</li>
                        </ul>


                        <p>
                            With rigorous quality control and an international client base, Global Resin is your
                            trusted partner for <strong>bulk gum turpentine supply</strong>. Contact us today
                            for documentation or price inquiries.
                        </p>

                        <div className={styles.buttonGroup}>
                            <a href="/MSDS_GSP_TURPENTINE.pdf" target="_blank" className={styles.button}>
                                MSDS
                            </a>
                            <a href="/COA_TURPENTINE.pdf" target="_blank" className={styles.button}>
                                COA
                            </a>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}
