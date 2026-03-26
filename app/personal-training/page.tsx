import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Personal Training in Lebanon, NH | Wayne's World EFT",
  description:
    'Customized one-on-one personal training in Lebanon, NH. Work with experienced coaches including Wayne Burwell, CSCS — Dartmouth graduate with 25+ years of experience.',
}

const trainers = [
  {
    name: 'Wayne Burwell',
    certs: 'USAW · CSCS · NASM',
    bio: 'Coaching since 1999. Wayne has trained professional athletes, Olympians, high school and college athletes, marathoners, triathletes, and everyday clients across the Upper Valley. Dartmouth College graduate, Class of 1997.',
  },
  {
    name: 'Dan Randall',
    certs: 'USAW',
    bio: 'Specializes in injury prevention and athletic performance. A competitive powerlifter with multiple competition wins, Dan works with athletes from elementary through college level.',
  },
  {
    name: 'Devin Mulac',
    certs: 'CSCS · PES · Pn1 · BS Exercise Science',
    bio: 'Experienced with youth athletes, adults, and individuals with Parkinson\'s. Devin brings a science-backed approach to programming with credentials spanning strength, performance, and nutrition.',
  },
  {
    name: 'Alyssa Godesky',
    certs: 'NASM CPT',
    bio: 'A retired professional triathlete and ultrarunner, Alyssa specializes in female athletes and works with clients ranging from high school athletes to seniors.',
  },
]

const goals = [
  'Calorie burning & fat loss',
  'Body sculpting & muscle development',
  'Fitness balancing & corrective work',
  'Event & race training',
  'Athletic performance optimization',
]

export default function PersonalTrainingPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-content max-w-4xl">
          <p className="section-label">Lebanon, NH</p>
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Personal Training
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            Customized coaching built around your goals, your schedule, and your
            starting point.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="section">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="section-label">The Program</p>
              <h2 className="section-title">Built Around You</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every personal training program at Wayne&apos;s World EFT starts with
                understanding you — your fitness level, your history, your goals, and
                what motivates you to show up.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From there, your coach builds a customized program and adjusts it
                as you progress. You&apos;ll have accountability, structure, and a
                coach who genuinely invests in your results.
              </p>
              <ul className="space-y-2">
                {['Custom programming', 'One-on-one coaching', 'Progress tracking', 'Flexible scheduling'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-brand-green shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="section-label">What We Train For</p>
              <h2 className="section-title">Your Goals</h2>
              <div className="space-y-3">
                {goals.map((g) => (
                  <div key={g} className="flex items-center gap-3 py-3 border-b border-gray-100">
                    <span className="text-brand-green font-bold text-lg">→</span>
                    <span className="text-gray-700">{g}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="section-gray">
        <div className="container-content">
          <p className="section-label text-center">Our Team</p>
          <h2 className="section-title text-center mb-12">Meet the Coaches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainers.map((t) => (
              <div key={t.name} className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-brand-green">
                <h3 className="text-xl font-bold mb-1">{t.name}</h3>
                <p className="text-brand-green text-sm font-medium mb-4">{t.certs}</p>
                <p className="text-gray-600 leading-relaxed text-sm">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="container-content max-w-2xl text-center">
          <p className="section-label">Pricing</p>
          <h2 className="section-title">Flexible Rates</h2>
          <p className="text-gray-600 mb-8">
            Pricing and availability varies based on trainer and program. Reach
            out to discuss your goals and find the right fit.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us for Pricing
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark">
        <div className="container-content text-center">
          <h2 className="section-title-white">Ready to Start?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Tell us about your goals and we&apos;ll match you with the right coach
            and program.
          </p>
          <Link href="/contact" className="btn-outline">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  )
}
