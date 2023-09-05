import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "./globals.scss";
import type {Metadata} from "next";
import {Providers} from "@/redux/provider";

export const metadata: Metadata = {
  title: "Homez Apartments",
  description: "Get your holiday apartments",
  icons: [{rel: "icon", url: "/homez-logo-light.ico"}],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
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
