import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Athlete Performance Training | Upper Valley, NH | Wayne's World EFT",
  description:
    'Science-backed athlete performance training in Lebanon, NH. Strength, speed, and movement coaching for high school, college, and advanced athletes in the Upper Valley.',
}

const focusAreas = [
  { label: 'Strength', description: 'Build the foundation that every other athletic quality depends on.' },
  { label: 'Speed', description: 'Train the neuromuscular system to move faster and react quicker.' },
  { label: 'Movement', description: 'Improve mechanics, agility, and body control under load and at speed.' },
  { label: 'Flexibility', description: 'Increase range of motion and reduce injury risk across all planes of movement.' },
  { label: 'Technique', description: 'Refine sport-specific skills and training patterns for long-term development.' },
]

const levels = [
  'Middle school & high school athletes',
  'Collegiate athletes',
  'Club & travel sports athletes',
  'Advanced adult athletes',
  'Competitive powerlifters and runners',
]

export default function AthletePerformancePage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-content max-w-4xl">
          <p className="section-label">Upper Valley, NH</p>
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Athlete Performance Training
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            Strength, speed, and performance coaching for athletes at every
            level — backed by science, built on experience.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container-content max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="section-label">The Program</p>
              <h2 className="section-title">Performance Is Built, Not Found</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Wayne&apos;s World EFT athlete training uses science-backed programs to
                enhance athletic performance at every level. Group-based sessions
                create accountability and competitive energy while still allowing
                individual attention to technique and progression.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Wayne has spent 25+ years working with professional athletes,
                Olympians, and youth athletes — the same principles apply at every
                level.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you&apos;re preparing for a season, coming off an injury, or
                chasing a new personal best — the program meets you where you are.
              </p>
            </div>
            <div>
              <p className="section-label">Who This Is For</p>
              <h2 className="section-title">Every Level</h2>
              <ul className="space-y-3">
                {levels.map((l) => (
                  <li key={l} className="flex items-center gap-3 py-3 border-b border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-brand-green shrink-0" />
                    <span className="text-gray-700">{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-gray">
        <div className="container-content">
          <p className="section-label text-center">What We Train</p>
          <h2 className="section-title text-center mb-12">Five Pillars of Athletic Performance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((f) => (
              <div key={f.label} className="bg-white p-8 rounded-sm shadow-sm">
                <div className="w-10 h-1 bg-brand-green mb-4" />
                <h3 className="text-xl font-bold mb-2">{f.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coach Cred */}
      <section className="section-dark">
        <div className="container-content max-w-3xl text-center">
          <p className="text-brand-green text-sm font-semibold uppercase tracking-widest mb-4">
            Coaching Pedigree
          </p>
          <h2 className="section-title-white mb-6">
            Trained by Someone Who Has Done It at the Highest Level
          </h2>
          <p className="text-gray-300 leading-relaxed mb-2">
            Wayne Burwell (USAW · CSCS · NASM) has been coaching since 1999 and has
            worked with professional athletes, Olympians, and elite coaches across
            sports. He is a Dartmouth College graduate (Class of 1997).
          </p>
          <p className="text-gray-400 text-sm mt-4 leading-relaxed">
            The Wayne&apos;s World training staff also includes coaches with backgrounds
            in competitive powerlifting, professional triathlon and ultrarunning, and
            sport-specific athletic development.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-content text-center">
          <h2 className="section-title">Start Your Off-Season the Right Way</h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Reach out to discuss your sport, your season, and what you&apos;re
            training toward.
          </p>
          <Link href="/contact" className="btn-primary">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  )
}
