import Logo from "@/app/_components/Logo";
import Nav from "./_components/Nav";

export const metadata = {
  title: "the-wild-oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
