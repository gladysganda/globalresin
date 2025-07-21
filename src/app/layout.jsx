// layout.jsx
import './globals.css';

import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Global Resin',
  description: 'Professional Resin Manufacturer Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
