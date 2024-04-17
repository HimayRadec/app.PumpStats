import type { Metadata } from "next";
import { AuthProvider } from "./Providers";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// const roboto_init = Roboto({
//   subsets: ["latin"],
//   weight: ['300', '400', '500'],
//   variable: '--font-roboto',
// })

export const metadata: Metadata = {
  title: {
    template: '%s | Pump Stats',
    default: 'Pump Stats',
  },
  description: 'Pump Stats Workout Tracker. Coming Soon.',
  metadataBase: new URL('https://pumpstats.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

