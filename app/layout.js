import Logo from "@/app/_components/Logo";
import Nav from "./_components/Nav";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  discription:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites surrounded by beautiful mountains and dark forests",
};
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 min-h-screen text-primary-50`}
      >
        <header>
          <Logo />
          <Nav />
        </header>
        <main>{children}</main>
        <footer>copyright&copy;</footer>
      </body>
    </html>
  );
}
