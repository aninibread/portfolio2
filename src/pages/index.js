import { Inter } from 'next/font/google'
import Head from 'next/head'
import ProjectCard from '../components/project_cards';
import ResumeItem from '../components/resumeItem'
import {Projects} from '../data/card_preview';
import {workExperiences} from '../data/work_experience';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-10">
      <Head>
        <title>Anni Wang</title>
        <link rel="icon" href="/profile_favcon.jpeg" />
      </Head>
      <header className="flex w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 justify-between items-center py-6">
        <div className="logo text-5xl">🧸</div>
        <nav className="nav space-x-4">
          <a className="nav-item" href="/" title="Info">Info</a>
          <a className="nav-item" href="/resume" title="Writing">Writing</a>
        </nav>
      </header>
      <main className="flex-grow w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl mb-5 my-4">👋 hiyo, it's anni (w/o the e)</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <p className="bio-text text-lg mb-2">
              <span className="sparkly-text">uWaterloo biomed eng</span> student trying to figure things out. what's on my mind: neuroscience, law, philosophy, and crafting.
            </p>
          </div>
          <div className="md:col-span-1">
            <h3 className="mb-2">contacts</h3>
            <p className="mb-2">📧 anniwang44@gmail.com</p>
            <p className="mb-2">👔 linkedin.com/in/a248wang</p>
            <p className="mb-2">👾 github.com/aninibread</p>
          </div>
        </div>
        <h2 className="intro-header text-2xl my-6">some projects</h2>
        <div className="cardsGrid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {Projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <h2 className="intro-header text-2xl my-6">my experiences</h2>
        <p className="mb-4">explored areas such as fintech, b2b, b2c, and iaas. worked in various company sizes from 3 to 100k employees: </p>
        <div>
          {workExperiences.map((experience, index) => (
            <ResumeItem key={index} {...experience} />
          ))}
        </div>
        <h2 className="intro-header text-2xl my-6">my research exp</h2>
      </main>
      <footer className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-sm">
        <p>last updated on 12.25.2023</p>
        <p>made from scratch with Next.js, Tailwind, and Cloudflare Pages</p>
      </footer>
    </div>
  )
}
