import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Wellness & Body Transformation Program | Lebanon, NH | Wayne's World EFT",
  description:
    'Body transformation and wellness coaching in Lebanon, NH. Combines strength training, goal-setting, accountability, and optional nutrition guidance for lasting results.',
}

const includes = [
  {
    title: 'Strength Training',
    description: 'Cyclical strength programming designed to build real, lasting muscle and metabolic health.',
  },
  {
    title: 'Goal Setting',
    description: 'Clear, measurable objectives set with your coach from day one.',
  },
  {
    title: 'Accountability',
    description: 'Regular check-ins and structure to keep you consistent when motivation fades.',
  },
  {
    title: 'Nutrition Guidance',
    description: 'Optional nutrition coaching to support your body transformation goals.',
  },
]

const pricing = [
  { label: 'Single Session', price: '$35' },
  { label: '10-Session Pack', price: '$255' },
  { label: '20-Session Pack', price: '$410' },
  { label: '3-Month Unlimited', price: '$765' },
]

export default function WellnessPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-content max-w-4xl">
          <p className="section-label">Lebanon, NH</p>
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Wellness & Body Transformation
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            A comprehensive program combining strength, accountability, and
            lifestyle coaching — designed for real, sustainable results.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container-content max-w-3xl">
          <p className="section-label">The Approach</p>
          <h2 className="section-title">More Than a Workout</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Wayne&apos;s World Wellness Program goes beyond the gym floor. It
            combines cyclical strength training with intentional goal-setting and
            consistent accountability to help you build lasting habits — not just
            short-term results.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For members who want it, optional nutrition guidance is available to
            round out the program and accelerate your body transformation.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-gray">
        <div className="container-content">
          <p className="section-label text-center">What&apos;s Included</p>
          <h2 className="section-title text-center mb-12">The Full Program</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {includes.map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-sm shadow-sm">
                <div className="w-10 h-1 bg-brand-green mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="container-content max-w-2xl">
          <p className="section-label text-center">Pricing</p>
          <h2 className="section-title text-center mb-8">Session Packages</h2>
          <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden">
            {pricing.map((p, i) => (
              <div
                key={p.label}
                className={`flex justify-between items-center px-8 py-5 ${
                  i !== pricing.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <span className="font-semibold text-gray-800">{p.label}</span>
                <span className="text-xl font-bold text-brand-green">{p.price}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Best value: 3-Month Unlimited — fully commit and fully transform.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark">
        <div className="container-content text-center">
          <h2 className="section-title-white">Ready to Make a Change?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            The Wellness Program is built for people who are serious about
            lasting results. Let&apos;s talk about what that looks like for you.
          </p>
          <Link href="/contact" className="btn-outline">
            Get Started
          </Link>
        </div>
      </section>
    </>
  )
}
