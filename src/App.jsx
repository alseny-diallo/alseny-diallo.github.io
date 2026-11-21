import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { sections } from './sections'
import { padIndex } from './lib/format'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {sections.map(({ id, Component }, i) => (
          <Component key={id} id={id} index={padIndex(i)} />
        ))}
      </main>
      <Footer />
    </>
  )
}
