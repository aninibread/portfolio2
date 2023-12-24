import { Inter } from 'next/font/google'
import Head from 'next/head'
import ProjectCard from '../components/project_cards';
import Timeline from '../components/timeline'
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
        <h2 className="intro-header">my experience</h2>
        <div>
          {workExperiences.map((experiences, index) => (
            <Timeline key={index} {...experiences} />
            ))
          }
        </div>
      </main>
      </div>
      </div>
    </main>
  )
}
