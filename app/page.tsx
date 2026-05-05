import ContactForm from '@/components/ContactForm'

const projects = [
  {
    tag: 'AI · COACHING',
    name: 'Coach AI',
    description: 'PWA that turns session transcripts into summaries and client action plans.',
    url: 'https://coach.waynewallace.io',
  },
  {
    tag: 'AGENCY',
    name: 'Ace Digital Productions',
    description: 'Full-service digital agency for brands ready to grow.',
    url: 'https://acedigitalproductions.com',
  },
  {
    tag: 'SOFTWARE',
    name: 'DocuFlow',
    description: 'Document workflow SaaS that keeps teams moving.',
    url: 'https://docuflowsoftware.com',
  },
  {
    tag: 'AI · COACHING',
    name: 'AI Coach',
    description: 'AI-powered coaching platform for modern coaches.',
    url: '#',
  },
  {
    tag: 'VIDEO',
    name: 'Marketing Your Business with Video',
    description: 'A practical course on growing your business through video.',
    url: 'https://marketingyourbusinesswithvideo.com',
  },
  {
    tag: 'AI · COMMUNITY',
    name: 'AI Content Creators Club',
    description: 'Community for creators building with AI tools.',
    url: 'https://aicontentcreatorsclub.com',
  },
  {
    tag: 'GHL AGENCY',
    name: 'Apache Business Solutions',
    description: 'Go HighLevel marketing automation and CRM for growing businesses.',
    url: 'https://apachebusinesssolutions.com',
  },
  {
    tag: 'PHOTOGRAPHY',
    name: 'Wallace Photo',
    description: 'Photography portfolio — portraits, events, and commercial work.',
    url: 'https://wallacephoto.com',
  },
]

const services = [
  { icon: '⚡', name: 'Web Apps & SaaS', desc: 'Custom software built to scale with your business.' },
  { icon: '🤖', name: 'AI & Automation', desc: 'Smart tools that eliminate repetitive work.' },
  { icon: '🎬', name: 'Photo & Video', desc: 'Professional production and post-production.' },
  { icon: '🎯', name: 'Coaching & Strategy', desc: 'Clarity and momentum for business owners.' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold text-white">Wayne Wallace</span>
          <div className="flex gap-6 text-sm">
            <a href="#services" className="text-gray-400 transition hover:text-white">Services</a>
            <a href="#projects" className="text-gray-400 transition hover:text-white">Projects</a>
            <a href="#contact" className="font-semibold text-indigo-400 transition hover:text-indigo-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="mb-4 text-xs font-semibold tracking-widest text-indigo-400">
          SOLOPRENEUR · DEVELOPER · CREATOR
        </p>
        <h1 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          I build things that<br />work for your business.
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-gray-400">
          Web apps, AI tools, photography, video, and coaching — helping businesses grow
          with the right combination of technology and strategy.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-indigo-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 active:scale-95"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-gray-700 px-8 py-3 text-sm font-semibold text-gray-300 transition hover:border-gray-500 hover:text-white active:scale-95"
          >
            Let&apos;s Talk
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-10 text-center text-2xl font-bold text-white">What I Do</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.name} className="rounded-2xl bg-gray-900 p-6">
              <div className="mb-3 text-2xl">{s.icon}</div>
              <h3 className="mb-1 text-sm font-semibold text-white">{s.name}</h3>
              <p className="text-xs leading-relaxed text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-900/50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-white">Projects</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-gray-800 bg-gray-900 p-5 transition hover:border-indigo-600"
              >
                <p className="mb-2 text-xs font-semibold tracking-wider text-indigo-400">{p.tag}</p>
                <h3 className="mb-1 text-sm font-semibold text-white transition group-hover:text-indigo-300">
                  {p.name}
                </h3>
                <p className="text-xs leading-relaxed text-gray-500">{p.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-lg px-6 py-20">
        <h2 className="mb-3 text-center text-2xl font-bold text-white">Get in Touch</h2>
        <p className="mb-8 text-center text-gray-400">
          Have a project in mind? I&apos;d love to hear about it.
        </p>
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <p className="text-sm text-gray-600">© 2026 Wayne Wallace</p>
          <p className="text-sm text-gray-600">waynewallace.io</p>
        </div>
      </footer>

    </div>
  )
}
