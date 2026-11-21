import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <p className="mx-auto max-w-6xl px-6 text-center text-sm text-subtle">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  )
}
