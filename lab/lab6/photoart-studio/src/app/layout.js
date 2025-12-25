import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Фотостудия "ФотоАрт"',
  description: 'Профессиональные фотосъёмки, аренда студии и оборудования',
};

import Header from './Header';

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <footer className="footer">
          <p>© 2025 Фотостудия "ФотоАрт". Все права защищены.</p>
        </footer>
      </body>
    </html>
  );
}
