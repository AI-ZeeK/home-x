import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "./globals.scss";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Providers} from "@/redux/provider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Homez Apartments",
  description: "Get your holiday apartments",
  icons: [{rel: "icon", url: "/homez-logo-light.ico"}],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <footer>
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
