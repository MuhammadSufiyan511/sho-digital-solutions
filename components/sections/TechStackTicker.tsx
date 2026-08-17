'use client'

import { motion } from 'framer-motion'

// Official SVG Logo Icons
const ReactLogo = () => (
  <svg className="h-4 w-4 text-[#61DAFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
  </svg>
)

const NextLogo = () => (
  <svg className="h-4 w-4 text-slate-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.72 17.51l-4.57-6.52v6.52h-2.14V7.5h2.14l4.57 6.52V7.5h2.14v10.01h-2.14zm-8.88-5.3l-1.9-2.71V17.5H4.8V7.5h2.14l4.08 5.82-2.18-1.11z" />
  </svg>
)

const TSLogo = () => (
  <svg className="h-4 w-4 text-[#3178C6]" viewBox="0 0 24 24" fill="currentColor">
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <path d="M11.5 16.5h-2v-7h-2.5v-1.5h7v1.5h-2.5v7zm7.8-1.8c-.4.4-1 .6-1.8.6-.6 0-1.1-.1-1.5-.4-.4-.3-.6-.7-.6-1.2 0-.4.1-.7.4-.9.3-.2.7-.4 1.2-.5l1.3-.3c.4-.1.7-.2.9-.4.2-.2.3-.4.3-.6 0-.3-.1-.5-.4-.7-.3-.2-.7-.3-1.2-.3-.5 0-.9.1-1.3.4-.4.3-.6.6-.7 1.1h-1.8c.1-.8.5-1.5 1.2-2s1.6-.7 2.6-.7c1.1 0 2 .2 2.6.7.6.5.9 1.1.9 1.9 0 .5-.1.9-.4 1.3-.3.4-.7.6-1.2.8l-1.3.3c-.4.1-.7.2-.9.4-.2.2-.3.4-.3.6 0 .3.1.6.4.8.3.2.8.3 1.3.3.6 0 1.1-.1 1.5-.4.4-.3.7-.7.8-1.2h1.8c-.1.9-.5 1.7-1.3 2.2z" fill="#FFF" />
  </svg>
)

const NodeLogo = () => (
  <svg className="h-4 w-4 text-[#5FA04E]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1.8L2.2 7.5v11.5L12 24.7l9.8-5.7V7.5L12 1.8zm-1 18.2v-7.2l-6-3.5v7.2l6 3.5zm2 0l6-3.5v-7.2l-6 3.5v7.2zm7.8-11.7l-9.8-5.7-9.8 5.7 9.8 5.7 9.8-5.7z" />
  </svg>
)

const TailwindLogo = () => (
  <svg className="h-4 w-4 text-[#06B6D4]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
  </svg>
)

const VueLogo = () => (
  <svg className="h-4 w-4 text-[#4FC08D]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M2 3h3.2L12 15 18.8 3H22L12 21 2 3zm4.5 0h3L12 7.5 14.5 3h3L12 12.8 6.5 3z" />
  </svg>
)

const PythonLogo = () => (
  <svg className="h-4 w-4 text-[#3776AB]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.87 0c-5.44 0-5.1 2.36-5.1 2.36v2.44h5.21v.74H4.75S2 5.23 2 10.74c0 5.5 2.42 5.3 2.42 5.3h1.44v-2.03c0-2.31 2-2.31 2-2.31h5.13s1.95.03 1.95-1.9V4.76s.34-4.76-4.77-4.76zM9.37 1.52a.92.92 0 1 1 0 1.84.92.92 0 0 1 0-1.84zm2.76 22.48c5.44 0 5.1-2.36 5.1-2.36v-2.44h-5.21v-.74h7.23s2.75.31 2.75-5.2c0-5.5-2.42-5.3-2.42-5.3h-1.44v2.03c0 2.31-2 2.31-2 2.31h-5.13s-1.95-.03-1.95 1.9v5.13s-.34 4.76 4.77 4.76zm2.5-1.52a.92.92 0 1 1 0-1.84.92.92 0 0 1 0 1.84z" />
  </svg>
)

const PostgresLogo = () => (
  <svg className="h-4 w-4 text-[#4169E1]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1.2 18.5c-3.1 0-5.2-1.9-5.2-4.5 0-2.1 1.4-3.7 3.5-4.1-.3-.6-.5-1.3-.5-2.1 0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5c0 .8-.2 1.5-.5 2.1 2.1.4 3.5 2 3.5 4.1 0 2.6-2.1 4.5-5.2 4.5h-.9z" />
  </svg>
)

const FirebaseLogo = () => (
  <svg className="h-4 w-4 text-[#FFCA28]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.89 15.67L6.8 2.3a.62.62 0 0 1 1.18-.13l2.67 5.12M1.5 17.5l2.05-12.7a.62.62 0 0 1 1.15-.17l2.25 4.25m4.73 1.25L10.3 3.8a.62.62 0 0 1 1.16-.27l11.04 13.97a.62.62 0 0 1-.36.98L12.5 22.8a1.2 1.2 0 0 1-1 0L1.86 18.48a.62.62 0 0 1-.36-.98z" />
  </svg>
)

const DockerLogo = () => (
  <svg className="h-4 w-4 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185zm-2.954-5.43h2.118a.185.185 0 0 0 .186-.186V3.574a.185.185 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185zm0 2.716h2.118a.186.186 0 0 0 .186-.186V6.29a.185.185 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186zm-2.954 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.145a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186zm-2.93 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H2.216a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186zm5.884 2.714h2.119a.186.186 0 0 0 .185-.185V9.006a.186.186 0 0 0-.185-.186H8.1a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185zm-2.954 0h2.119a.186.186 0 0 0 .185-.185V9.006a.186.186 0 0 0-.185-.186H5.145a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185zm-2.93 0h2.119a.186.186 0 0 0 .185-.185V9.006a.186.186 0 0 0-.185-.186H2.216a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185z" />
  </svg>
)

const FigmaLogo = () => (
  <svg className="h-4 w-4 text-[#F24E1E]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm-6 6c0-1.657 1.343-3 3-3h3v3c0 1.657-1.343 3-3 3s-3-1.343-3-3zm0-6c0-1.657 1.343-3 3-3h3v6H9c-1.657 0-3-1.343-3-3zm0-6c0-1.657 1.343-3 3-3h3v6H9c-1.657 0-3-1.343-3-3zm6-3h3c1.657 0 3 1.343 3 3s-1.343 3-3 3h-3V3z" />
  </svg>
)

const MySQLLogo = () => (
  <svg className="h-4 w-4 text-[#00758F]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-5h2v5zm0-7h-2V7.5h2v2z" />
  </svg>
)

const techStack = [
  { name: 'React', Icon: ReactLogo },
  { name: 'Next.js', Icon: NextLogo },
  { name: 'TypeScript', Icon: TSLogo },
  { name: 'Node.js', Icon: NodeLogo },
  { name: 'Tailwind CSS', Icon: TailwindLogo },
  { name: 'Vue.js', Icon: VueLogo },
  { name: 'Python & AI', Icon: PythonLogo },
  { name: 'PostgreSQL', Icon: PostgresLogo },
  { name: 'Firebase', Icon: FirebaseLogo },
  { name: 'Docker', Icon: DockerLogo },
  { name: 'Figma', Icon: FigmaLogo },
  { name: 'MySQL', Icon: MySQLLogo },
]

// Duplicate array for seamless infinite scroll
const doubleTech = [...techStack, ...techStack, ...techStack]

export default function TechStackTicker() {
  return (
    <div className="relative overflow-hidden border-y border-slate-200/80 bg-white/70 py-4 backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-950/70">
      {/* Gradient Mask for fading left and right edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white dark:from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white dark:from-slate-950 to-transparent" />

      <div className="flex w-max items-center">
        <motion.div
          className="flex items-center gap-8 sm:gap-12"
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25,
            ease: 'linear',
          }}
        >
          {doubleTech.map((item, index) => {
            const Icon = item.Icon
            return (
              <div
                key={`${item.name}-${index}`}
                className="flex items-center gap-2.5 shrink-0 rounded-full border border-slate-200/80 bg-slate-50/80 px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-xs transition-colors hover:border-teal hover:text-teal dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-teal-light dark:hover:text-teal-light"
              >
                <Icon />
                <span>{item.name}</span>
              </div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
