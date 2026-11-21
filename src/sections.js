import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

// Page sections, in display order. The menu and the 01, 02… numbering are
// derived from this list. Each section's label is the translation key nav.<id>.
export const sections = [
  { id: 'about', Component: About },
  { id: 'skills', Component: Skills },
  { id: 'projects', Component: Projects },
  { id: 'experience', Component: Experience },
  { id: 'contact', Component: Contact },
]
