import './globals.css';
import Head from 'next/head';

import Header from './components/Header';
import Footer from './components/Footer';
import { Arvo, Poppins } from 'next/font/google';

const arvo = Arvo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--heading-font',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--body-font',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${arvo.variable} ${poppins.variable}`}>
      <Head>
        {/* Basic Meta */}
        <title>Global Resin | Gum Rosin & Turpentine Indonesia</title>
        <meta name="description" content="Leading supplier of gum rosin and gum turpentine from Indonesia. Export-ready, certified, and sustainable." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph (Facebook, LinkedIn, etc) */}
        <meta property="og:title" content="Global Resin | Gum Rosin & Turpentine Indonesia" />
        <meta property="og:description" content="We supply high-quality gum rosin and gum turpentine from Indonesia. Export-ready, sustainable, and certified." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://globalresin.vercel.app" />
        <meta property="og:image" content="/og-image.jpg" /> {/* Optional: Upload to /public */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Global Resin | Gum Rosin & Turpentine Indonesia" />
        <meta name="twitter:description" content="High-quality Indonesian gum rosin and turpentine exports." />
        <meta name="twitter:image" content="/og-image.jpg" />
      </Head>

      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
