import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import { connectToMongoDB } from "@/lib/mongodb";

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
  const connection = connectToMongoDB();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

