import Head from 'next/head'
import galleryStyles from '../styles/galleryStyles.module.css';
import { useState, useEffect } from 'react';
import {fetchCatMedia} from '../lib/fetchCatMedia';

export default function Cat() {
    const [catMedia, setCatMedia] = useState([]);

    useEffect(() => {
        const loadMedia = async () => {
        const media = await fetchCatMedia();
        setCatMedia(media);
        console.log('Media URLs set in state:', media);
        };

        loadMedia();
    }, []);

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
        <h1 className="text-4xl font-bold mb-6">🐱 Cat Gallery</h1>
        <div className={galleryStyles.masonryGrid}>
            {catMedia.map((media, index) => (
                <div key={index} className={galleryStyles.masonryGridItem}>
                  {media.type === 'image' && (
                      <img src={media.url} alt={`Cat image ${index}`} className="w-full h-auto rounded-lg shadow-lg" />
                  )}
                  {media.type === 'video' && (
                      <video autoPlay loop muted className="w-full h-auto rounded-lg shadow-lg">
                        <source src={media.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                  )}
                </div>
            ))}
        </div>
      </main>
      <footer className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-sm">
        <p>📅 last updated on 12.25.2023</p>
        <p>🔨 made from scratch with Next.js, Tailwind, and Cloudflare</p>
      </footer>
    </div>
  )
}
