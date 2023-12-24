import { Inter } from 'next/font/google'
import Head from 'next/head'
import ProjectCard from '../components/project_cards';
import ResumeItem from '../components/resumeItem'
import {Projects} from '../data/card_preview';
import {workExperiences} from '../data/work_experience';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="container">
      <Head>
        <title>Anni Wang</title>
        <link rel="icon" href="/profile_favcon.jpeg" />
      </Head>
      <header className="header">
        <div className="logo">🧸</div>
        <nav className="nav">
          <a className="nav-item" href="/" title="Info">Info</a>
          <a className="nav-item" href="/resume" title="Writing">Writing</a>
        </nav>
      </header>

      <main className="main-content">
        <h1 className="intro-title">hiyo, it's anni (w/o the e)</h1>
        <p className="intro-description">
          uWaterloo biomed eng student trying to figure things out. what's on my mind: neuroscience, law, philosophy, and crafting.
        </p>
        <h2 className="intro-header">some projects</h2>
        <div className="cardsGrid">
          {Projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))
          }
        </div>
        <h2 className="intro-header">my experiences</h2>
        <p>explored areas such as fintech, b2b, b2c, and iaas. worked in various company sizes from 3 to 100k employees: </p>
        <div>
          {workExperiences.map((experience, index) => (
            <ResumeItem key={index} {...experience} />
          ))}
        </div>
      </main>
      </div>
      </div>
      <footer>
        <p>last updated on 12.21.2023</p>
        <p>made from scratch with Next.js, Tailwind, and Cloudflare Pages</p>
      </footer>
    </main>
  )
}
