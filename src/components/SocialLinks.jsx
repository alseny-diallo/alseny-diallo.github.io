import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './icons'

// Network => icon and label. Networks without a URL in profile.socials are skipped.
const networks = {
  github: { label: 'GitHub', Icon: GithubIcon },
  linkedin: { label: 'LinkedIn', Icon: LinkedinIcon },
}

export default function SocialLinks({ linkClassName = '', iconClassName = 'h-5 w-5' }) {
  return Object.entries(networks)
    .filter(([key]) => profile.socials[key])
    .map(([key, { label, Icon }]) => (
      <a key={key} href={profile.socials[key]} target="_blank" rel="noreferrer" aria-label={label} className={linkClassName}>
        <Icon className={iconClassName} />
      </a>
    ))
}
