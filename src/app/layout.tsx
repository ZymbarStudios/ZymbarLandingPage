import "./globals.css";
import { Inter, Josefin_Sans } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '500', '700'],
  variable: '--font-inter',
})

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['200', '500', '700'],
  variable: '--font-josefin-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${inter.variable} ${josefinSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
