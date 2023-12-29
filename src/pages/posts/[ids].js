import { getSortedPostsData, getPostData } from '../../lib/posts';
import { useRouter } from 'next/router';
import Head from 'next/head';

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const allPostsData = getSortedPostsData();

  // Get the paths we want to pre-render based on posts
  const paths = allPostsData.map((post) => ({
    params: { ids: post.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.ids); // Ensure params.ids is the correct variable
  return {
    props: {
      postData,
    },
  };
}

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export default function Post({ postData }) {
  return (
    <div className="flex flex-col min-h-screen pt-10">
      <Head>
        <title>{postData.title}</title>
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
        <article>
          <h1 className="text-4xl font-bold mb-6 my-4">{postData.title}</h1>
          <div className="mb-4 text-gray-500">
            <p>Created: {formatDate(postData.date)}</p>
          </div>
          <div
            className="prose lg:prose-xl max-w-none"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </article>
      </main>
      
      <footer className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-sm">
        <p>📅 last updated on 12.25.2023</p>
        <p>🔨 made from scratch with Next.js, Tailwind, and Cloudflare Pages</p>
      </footer>
    </div>
  );
}
