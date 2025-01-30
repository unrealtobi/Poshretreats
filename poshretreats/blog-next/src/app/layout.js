import { Roboto, Pacifico, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
});
export const metadata = {
  icons: {
    icon: "/Logo.svg", // Path to your favicon in the `public` directory
    apple: "/Logo.svg", // Optional: Apple touch icon
    shortcut: "/Logo.svg", // Optional: Shortcut icon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${pacifico.variable} ${raleway.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
