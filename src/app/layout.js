import "./globals.css";
import Header from "@/components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
import { Figtree, Inter, Lexend, Montserrat, Poppins } from "next/font/google";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const lexend = Lexend({
  weight: ["800"],
  subsets: ["latin"],
  variable: "--font-lexend",
});


const montserrat = Montserrat({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const figtree = Figtree({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-figtree",
});



export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${inter.className} ${montserrat.variable} ${poppins.variable} ${lexend.variable} ${figtree.variable} overflow-hidden antialiased`}
      >
        <NextTopLoader
          color="black"
          easing="ease"
          speed={200}
          showSpinner={false}
        />
        <Header />
        {/* <main className="md:pt-[124px] pt-[60px]"> */}
          {children}
        {/* </main> */}
        <Footer />
      </body>
    </html>
  );
}
