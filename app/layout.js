import { Geist, Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import Copyright from "@/components/Common/Copyright";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["sans"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "E-commerce Shop",
  description: "This is an e-commerce shop.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppinsSans.variable} font-sans bg-primary-white min-h-[100dvh]  text-text-color-black *:px-center grid grid-rows-[auto_1fr_auto_auto] max-w-full`}
      >
        <Navbar />
        <hr  className="text-line"  />
        <main className="min-h-[calc(100vh-10rem)] ">
          {children}
        </main>
        <Footer />
        <hr className="text-line" />
        <Copyright />
      </body>
    </html>
  );
}
