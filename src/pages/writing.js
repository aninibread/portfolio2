import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="container">
      <Head>
        <title>Anni's Page</title>
      </Head>

      <header className="header">
        <div className="logo">🧸</div>
        <nav className="nav">
          <a className="nav-item" href="/" title="Home">Home</a>
          <a className="nav-item" href="/resume" title="Resume">Resume</a>
          <a className="nav-item" href="/" title="LifeStory">Life Story</a>
          <a className="nav-item" href="/" title="Brain">Brain</a>
        </nav>
      </header>


      <main className="main-content">
        <h1 className="intro-header">Hiyo, it's Anni(e)</h1>
        <p className="intro-description">
          resume
        </p>
      </main>
    </div>
      </div>
    </main>
  )
}
