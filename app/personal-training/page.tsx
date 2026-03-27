import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Personal Training in Lebanon, NH",
  description:
    "Customized one-on-one personal training in Lebanon, NH. Work with experienced coaches including Wayne Burwell, CSCS — Dartmouth graduate with 25+ years of experience training Olympians, professional athletes, and everyday adults.",
}

const trainers = [
  {
    name: 'Wayne Burwell',
    certs: 'USAW · CSCS · NASM · Apex',
    quote: "Wayne's World EFT encompasses a place for everyone to train and succeed.",
    bio: 'Personal trainer since 1999. Wayne has trained professional athletes, Olympians, high school and middle school athletes, athletic teams, marathoners, triathletes, families, and seniors across the Upper Valley. Dartmouth College, Class of 1997.',
  },
  {
    name: 'Dan Randall',
    certs: 'USAW',
    quote: null,
    bio: 'Two years of training experience with a background in basketball coaching. Works with athletes from elementary through college level and everyday adults. Specializes in injury prevention and athletic performance. Competitive powerlifter with two competition wins in his weight class.',
  },
  {
    name: 'Devin Mulac',
    certs: 'CSCS · PES · Pn1 · BS Exercise Science',
    quote: null,
    bio: "Experienced with elementary through college athletes, everyday fitness clients, individuals with Parkinson's, and retirees. Brings a science-backed approach to programming spanning strength, performance, and nutrition coaching. Interests include lacrosse, hockey, and skiing.",
  },
  {
    name: 'Alyssa Godesky',
    certs: 'NASM CPT',
    quote: null,
    bio: 'Specializes in female athletes. Works with clients ranging from high school athletes to 80-year-old clients. A retired professional triathlete and ultrarunner, Alyssa brings elite endurance and performance experience to every session.',
  },
]

const goals = [
  'Calorie burning & fat loss',
  'Body sculpting & muscle development',
  'Fitness balancing & corrective work',
  'Event & race training',
  'Athletic performance optimization',
]

const included = [
  'Custom programming tailored to your goals',
  'One-on-one coaching every session',
  'Progress tracking & regular check-ins',
  'Flexible scheduling to fit your life',
  'Motivation, education & accountability',
]

export default function PersonalTrainingPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-content">
          <p className="section-label">Lebanon, NH · Upper Valley</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-900">
            Personal Training
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed">
            Our personal trainers meet you at any level and help you along your fitness journey.
          </p>
        </div>
      </section>

      {/* Program overview */}
      <section className="section">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="section-label">The Program</p>
              <h2 className="section-title">More Than Just a Workout</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Wayne&apos;s World EFT, your personal training program is more than just a series of workouts.
                We design a program to support your unique goals, passions, and personality.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Whether you are looking to burn more calories, define and sculpt your body, balance out your
                fitness routine, train for a special event, or optimize your athletic performance — we&apos;re
                here to provide motivation and education while holding you accountable in a high-energy atmosphere.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With decades of combined experience, our team is committed to helping you achieve your goals.
                Pricing and availability vary based on the trainer — reach out to get started.
              </p>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-brand-red shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="section-label">What We Train For</p>
              <h2 className="section-title">Your Goals</h2>
              <div className="space-y-1 mb-8">
                {goals.map((g) => (
                  <div key={g} className="flex items-center gap-3 py-3 border-b border-gray-100">
                    <span className="text-brand-red font-bold text-lg shrink-0">→</span>
                    <span className="text-gray-700">{g}</span>
                  </div>
                ))}
              </div>

              {/* Trust line */}
              <div className="bg-gray-50 border-l-4 border-brand-red p-6">
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-semibold text-gray-900">Trusted by:</span> Professional athletes,
                  Olympians, high school &amp; college athletes, marathoners, triathletes, families, and seniors
                  across the Upper Valley.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="section-gray">
        <div className="container-content">
          <p className="section-label text-center">Our Team</p>
          <h2 className="section-title text-center mb-4">Meet the Coaches</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            With decades of combined experience across every fitness level, our coaches bring credentials,
            passion, and real results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainers.map((t) => (
              <div key={t.name} className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-brand-red">
                <h3 className="text-xl font-bold mb-1">{t.name}</h3>
                <p className="text-brand-red text-sm font-semibold uppercase tracking-wider mb-4">{t.certs}</p>
                {t.quote && (
                  <p className="text-gray-800 italic mb-4 text-sm leading-relaxed border-b border-gray-100 pb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                )}
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
          <p className="text-gray-600 mb-8 leading-relaxed">
            Pricing and availability vary based on trainer and program. Reach out to discuss your goals
            and we&apos;ll find the right fit for you.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us for Pricing
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-accent">
        <div className="container-content text-center max-w-2xl">
          <h2 className="section-title">Ready to Start?</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Tell us about your goals and we&apos;ll match you with the right coach and program.
            First session is free.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
