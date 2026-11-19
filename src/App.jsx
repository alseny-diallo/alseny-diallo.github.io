import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { useSettings } from './settings'

export default function App() {
  const { data, t } = useSettings()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-line py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 text-sm text-subtle sm:flex-row">
          <p>© {new Date().getFullYear()} {data.name}</p>
          <p>{t.madeWith}</p>
        </div>
      </footer>
    </>
  )
}
