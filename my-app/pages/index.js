import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Music Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">
          This is my first page{' '}
          <Link href="/registration">
            <a>click me</a>
          </Link>
        </h1>
      </main>
    </div>
  );
}
