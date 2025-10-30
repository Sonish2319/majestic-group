import "./globals.css";
import { Inter, Raleway } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-raleway",
});

export const metadata = {
  title: "Majestic Group - Homegrown Essentials",
  description:
    "A proudly Nepali company dedicated to redefining everyday living through homegrown essentials.",
  keywords:
    "Majestic Group, Nepal, Elba, Candy, Bambusa, Sukoon, NepaKids, Elica",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${raleway.variable}`}
    >
      <body className="font-inter">{children}</body>
    </html>
  );
}
