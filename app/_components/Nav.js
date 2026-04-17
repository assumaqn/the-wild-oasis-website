import Link from "next/link";

function Nav() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/cabins">Cabin</Link>
      </li>
      <li>
        <Link href="/account">Account</Link>
      </li>
    </ul>
  );
}

export default Nav;
