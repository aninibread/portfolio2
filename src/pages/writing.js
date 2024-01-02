import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}


export default function Blog({ allPostsData }) {
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
    // Split the date string into parts
    const [year, month, day] = dateString.split('-');
    // Create a new Date object with the local timezone
    const date = new Date(Date.UTC(year, month - 1, day));
    // Return the formatted date string
    return date.toLocaleDateString(undefined, options);
  }
  

  return (
    <div className="flex flex-col min-h-screen pt-10">
      <Head>
        <title>Anni Wang</title>
        <link rel="icon" href="/profile_favcon.jpeg" />
      </Head>
      <Navbar />
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
        <div className="bounce-link-container">
          <a href="/cat" className="bounce-link">look at my cat 🐱</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
