import type { Metadata } from 'next'
import { Award, CheckCircle2, HeartHandshake, ShieldCheck, Target } from 'lucide-react'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import TeamMembersSection from '@/components/sections/TeamMembersSection'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn how SixByte Technologies works, what we value, and who helps shape the team behind each project.',
}

const values = [
  {
    icon: Target,
    title: 'Business-first thinking',
    description: 'Every decision should help the website do a real job for the business, not just look impressive.',
  },
  {
    icon: HeartHandshake,
    title: 'Genuine partnership',
    description: 'We keep communication honest, clear, and respectful so the process stays easy to trust.',
  },
  {
    icon: ShieldCheck,
    title: 'Dependable delivery',
    description: 'We care about the details, the timelines, and the long-term stability of the work we ship.',
  },
  {
    icon: Award,
    title: 'Craft and consistency',
    description: 'Strong design, tidy code, and polished messaging all matter when your brand is on display.',
  },
]

const milestones = [
  {
    year: '2019',
    title: 'Started with a simple idea',
    description: 'Build websites that feel more credible, more strategic, and more useful to growing businesses.',
  },
  {
    year: '2021',
    title: 'Expanded our process',
    description: 'We refined our discovery, design, and delivery flow so clients could move forward with more confidence.',
  },
  {
    year: '2023',
    title: 'Broader industry focus',
    description: 'We shaped solutions for restaurants, healthcare, retail, professional services, and property brands.',
  },
  {
    year: '2026',
    title: 'A stronger, more complete team',
    description: 'We continue to grow with a sharper design system, better process, and a stronger focus on business outcomes.',
  },
]

const team = [
  {
    initials: 'MS',
    name: 'Muhammad Sufiyan',
    role: 'Full Stack Developer',
    bio: 'Specializes in MERN, MySQL, and AI-enabled web applications with a focus on scalable business products.',
    image: '/assets/MuhammadSufiyan.webp',
  },
  {
    initials: 'ZY',
    name: 'Zohaib Younas',
    role: 'Full Stack Developer',
    bio: 'Builds polished websites and products with a strong eye for structure, speed, and user experience.',
    image: '/assets/ZohaibYounis.webp',
  },
  {
    initials: 'AW',
    name: 'Abdul Wahab',
    role: 'Mobile Application Developer',
    bio: 'Creates smooth mobile experiences and handles app flows with a focus on usability and reliability.',
    image: '/assets/AbdulWahab.webp',
  },
  {
    initials: 'AH',
    name: 'Abid Hussain',
    role: 'DevOps Engineer',
    bio: 'Keeps deployment pipelines, infrastructure, and release processes stable and efficient.',
    image: '/assets/AbidHussain.webp',
  },
  {
    initials: 'MU',
    name: 'Muhammad Umar',
    role: 'AI Engineer',
    bio: 'Focuses on AI, machine learning, computer vision, and practical backend integration for products.',
    image: '/assets/MuhammadUmer.webp',
  },
  {
    initials: 'HA',
    name: 'Abdul Haq',
    role: 'Business Developer',
    bio: 'Connects client goals with the right solution and helps shape clear, practical next steps.',
  },
]

const stats = [
  { value: '150+', label: 'Projects delivered' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '24/7', label: 'Digital presence' },
  { value: '4', label: 'Core disciplines' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="About our team"
        title="A small team with a clear goal: help businesses show up online with more clarity and confidence."
        subtitle="SixByte Technologies was built around one idea: your website should feel like a trustworthy extension of your business. We care about the tone, the structure, the details, and the way everything comes together to support real growth."
        chips={['Strategy', 'Design', 'Build']}
        panelTitle="How we work"
        panelBody="We keep the process collaborative and the result practical so the final site feels useful, not inflated."
        panelStats={['Human', 'Clear', 'Polished']}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="surface-card rounded-[1.5rem] p-6 sm:rounded-[2rem] sm:p-8">
            <SectionHeader
              tag="Our mission"
              title="Make business websites feel more human, more useful, and more trusted."
              subtitle="We want visitors to feel clear on who you are, what you offer, and why you are the right team to contact."
            />

            <div className="space-y-4 text-sm leading-7 text-slate-600">
              <p>
                We work best with businesses that want to present themselves well and communicate with more intention.
                That could mean a new brand direction, a stronger website, or a more useful lead-generation flow.
              </p>
              <p>
                The process is collaborative by design. We ask better questions up front, shape the structure with care,
                and keep the final result focused on the people who will actually use it.
              </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                'Clear discovery and planning',
                'Messaging that sounds human',
                'Mobile-first, responsive design',
                'Support after launch',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-electric" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="surface-card rounded-[1.75rem] p-6">
                <div className="text-4xl font-bold text-navy">{stat.value}</div>
                <div className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="What we value"
            title="The principles that keep our work sharp and our process easy to trust."
            subtitle="We try to make the experience steady, thoughtful, and respectful from the first email to the final launch."
            center
          />

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <article key={title} className="surface-card rounded-[1.75rem] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-electric/10 text-electric">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Our story"
            title="How the business has grown over time."
            subtitle="The focus has stayed the same: build work that feels professional, useful, and honest."
            center
          />

          <div className="space-y-6">
            {milestones.map((item) => (
              <div key={item.year} className="surface-card grid gap-4 rounded-[1.75rem] p-6 md:grid-cols-[120px_1fr]">
                <div className="text-2xl font-bold text-electric">{item.year}</div>
                <div>
                  <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Our team"
            title="The people building the work, together."
            subtitle="A focused team keeps the process direct, collaborative, and easier to trust."
            center
          />

          <TeamMembersSection team={team} />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="surface-card grid gap-8 rounded-[2rem] p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-electric">Why clients stay</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-navy text-balance">
                A better process makes the outcome feel better too.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                We do not aim to overwhelm with jargon. We aim to make the path forward easier to see and easier to
                approve.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Simple communication',
                'Intentional layout choices',
                'Careful handoff and support',
                'A brand presence you can stand behind',
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm font-medium text-slate-600">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want a team that makes the process feel easier?"
        subtitle="Let&apos;s talk about where your business is now, where you want it to go, and what a clearer digital presence could look like."
      />
    </>
  )
}
