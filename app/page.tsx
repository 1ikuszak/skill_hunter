import Link from 'next/link';

export default async function Home() {
  return (
    <>
      <main>
        <ul className="flex gap-3">
          <li>
            <Link href="/login">login</Link>
          </li>
          <li>
            <Link href="/register">signin</Link>
          </li>
          <li>
            <Link href="/add">add</Link>
          </li>
        </ul>
      </main>
    </>
  );
}
