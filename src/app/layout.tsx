import './globals.css'
import Navbar from "./Components/Nav";
import Footer from "./Components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DevCraft Portfolio',
  description: 'My portfolio website built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}