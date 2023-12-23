import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>About us</h2>
      <ul>
        <li>
          <Link href={"/about/contacts"}>Contacts</Link>
          <Link href={"/about/team"}>team</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
