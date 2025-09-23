import './globals.css';
import Navbar from './_Components/Nav';
import Footer from './_Components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DevCraft Portfolio',
  description: 'My portfolio website built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="bg-darkTheme">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
