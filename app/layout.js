import Logo from "@/app/_components/Logo";
import Nav from "./_components/Nav";
import "@/app/_styles/globals.css";

export const metadata = {
  // title: "the-wild-oasis",

  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  discription:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 min-h-screen text-primary-50">
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
