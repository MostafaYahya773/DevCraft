import type { Metadata } from 'next';

import './globals.css';

import { Montserrat, Roboto } from 'next/font/google';

// use it for titles
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
});
// use it for body
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'DevCraft',
  description:
    'We are a software company specializing in web and app development, providing complete solutions including frontend design, backend development, and website maintenance to ensure performance, security, and growth.',
  keywords: [
    'Frontend',
    'Backend',
    'Web Development',
    'Website Maintenance',
    'UI/UX',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
