import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}


export default function Blog({ allPostsData }) {
  // Format date (you can adjust the format as per your preference)
  const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex flex-col min-h-screen pt-10">
      <Head>
        <title>Anni Wang</title>
        <link rel="icon" href="/profile_favcon.jpeg" />
      </Head>
      <header className="flex w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 justify-between items-center py-6">
        <div className="logo text-5xl">🧸</div>
        <nav className="nav space-x-4">
          <a className="nav-item" href="/" title="info">info</a>
          <a className="nav-item" href="/writing" title="writing">writing</a>
          <a className="nav-item" href="/cat" title="cat">cat</a>
        </nav>
      </header>
      <main className="flex-grow w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6 my-4">🖍️ random brain dumps 📄</h1>
        <div className="divide-y divide-gray-200">
          {allPostsData.map(({ id, date, title, summary, tags }) => (
            <div key={id} className="py-4">
              <Link href={`/posts/${id}`} passHref>
                <h2 className="text-2xl font-semibold text-gray-700 hover:text-blue-800 hover:underline cursor-pointer">{title}</h2>
              </Link>
              <p className="text-sm text-gray-500">{formatDate(date)}</p>
              <p className="mt-1 text-gray-500">{summary}</p>
            </div>
          ))}
        </div>
        <div class="bounce-link-container">
          <a href="/cat" class="bounce-link">Look at my cat 🐱</a>
        </div>
      </main>
      <footer className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-sm">
        <p>📅 last updated on 12.25.2023</p>
        <p>🔨 made from scratch with Next.js, Tailwind, and Cloudflare Pages</p>
      </footer>
    </div>
  );
}
