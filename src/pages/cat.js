import Head from 'next/head'

export default function Cat() {
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
        
      </main>
      <footer className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-sm">
        <p>📅 last updated on 12.25.2023</p>
        <p>🔨 made from scratch with Next.js, Tailwind, and Cloudflare Pages</p>
      </footer>
    </div>
  )
}
