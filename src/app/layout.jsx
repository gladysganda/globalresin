// layout.jsx
import './globals.css';

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

export const metadata = {
  title: 'Global Resin',
  description: 'Professional Resin Manufacturer Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${arvo.variable} ${poppins.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}