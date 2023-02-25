import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import HomeSection from '@/components/HomeSection'
import NavBar from '@/components/NavBar'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'
import Skills from '@/components/Skills'
import { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

type Language = "en" | "jp";

const Home: NextPage = () => {

  const getInitialLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      return navigator.language.startsWith('ja') ? 'jp' : 'en';
    }
    return 'en'; // default language on server 
  };

  useEffect(() => {
    handleLanguageChange(getInitialLanguage()); // set client language on load
  }, []);

  const [language, setLanguage] = useState<Language>('en'); // default language on server side

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };


  return (
    <>
      <Head>
        <title>jiro jasmin | React & NextJS Front-End Web Developer</title>
        <meta name="description" content="I am a French React & NextJS Front-End Web Developer available to work. I am fluent in English, Japanese and French." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed w-full bg-transparent bg-white/50 hover:bg-white hover:shadow-md transition-all duration-500 ease-in-out z-40">
        <NavBar defaultLanguage={language} onLanguageChange={handleLanguageChange} />
      </header>

      {/* <main className="absolute top-16 -z-10"> */}
      <main>
        <HomeSection language={language} />
        <Skills language={language} />
        <About language={language} />
        <Resume language={language} />
        <Projects language={language} />
        <Contact language={language} />
      </main>

      <footer className="py-1 px-4 bg-slate-50">
        <Footer language={language} />
      </footer>
    </>
  )
}

export default Home;
