import Head from 'next/head';
import Link from 'next/link';
// import other necessary components and data

export default function Blog() {
  // Dummy data for blog posts - replace with your actual blog data
  const blogPosts = [
    { id: 1, title: 'Post Title 1', summary: 'Summary of the first post...', slug: 'post-1', date: '2023-01-01', tags: ['Engineering', 'Biomed'] },
    { id: 2, title: 'Post Title 2', summary: 'Summary of the first post...', slug: 'post-1', date: '2023-01-01', tags: ['Engineering', 'Biomed'] },
    { id: 3, title: 'Post Title 3', summary: 'Summary of the first post...', slug: 'post-1', date: '2023-01-01', tags: ['Engineering', 'Biomed'] },
    // ... more posts
  ];

  // Format date (you can adjust the format as per your preference)
  const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Anni Wang</title>
        <link rel="icon" href="/profile_favcon.jpeg" />
      </Head>
      <header className="flex w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 justify-between items-center py-6">
        <div className="logo text-5xl">🧸</div>
        <nav className="nav space-x-4">
          <a className="nav-item" href="/" title="info">info</a>
          <a className="nav-item" href="/writing" title="writing">writing</a>
        </nav>
      </header>
      <main className="flex-grow w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-6">🖍️ random brain dumps</h1>
        <div className="divide-y divide-gray-200">
          {blogPosts.map((post) => (
            <div key={post.id} className="py-4">
              <Link href={`/writing/${post.slug}`} passHref>
                <h2 className="text-2xl font-semibold text-blue-600 hover:text-blue-800 hover:underline cursor-pointer">{post.title}</h2>
              </Link>
              <p className="text-sm text-gray-500">{formatDate(post.date)}</p>
              <p className="mt-1 text-gray-600">{post.summary}</p>
              <div className="mt-2">
                {post.tags.map((tag, index) => (
                  <span key={index} className="mr-2 text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-sm">
        <p>📅 last updated on 12.25.2023</p>
        <p>🔨 made from scratch with Next.js, Tailwind, and Cloudflare Pages</p>
      </footer>
    </div>
  );
}
