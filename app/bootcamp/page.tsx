import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Bootcamp Classes in Lebanon, NH | Wayne's World EFT",
  description:
    'High-energy, full-body bootcamp classes in Lebanon, NH. Open to all fitness levels. First session free. Mon/Wed/Fri mornings, Tue/Thu evenings, and Saturday mornings.',
}

const schedule = [
  { days: 'Mon / Wed / Fri', time: '6:00am – 7:00am' },
  { days: 'Tue / Thu', time: '5:30pm – 6:30pm' },
  { days: 'Saturday', time: '7:00am – 8:00am' },
]

const pricing = [
  { label: 'First Session', price: 'FREE' },
  { label: 'Single Session', price: '$30' },
  { label: '10-Session Pass', price: '$205' },
  { label: '20-Session Pass', price: '$365' },
  { label: '36-Session Pass', price: '$550' },
]

export default function BootcampPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-content max-w-4xl">
          <p className="section-label">Lebanon, NH</p>
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Bootcamp Classes
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            High-energy, full-body workouts designed to build strength, improve
            conditioning, and keep you accountable.
          </p>
        </div>
      </section>

      {/* What Is It */}
      <section className="section">
        <div className="container-content max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="section-label">The Workout</p>
              <h2 className="section-title">60 Minutes. Full Body. Every Time.</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bootcamp is a one-hour metabolic circuit class featuring full-body
                exercises designed to burn calories and challenge your muscles. The
                class pairs hard work with high energy — and yes, there&apos;s dancing.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The format keeps your heart rate elevated while varying the movements
                to help you retain muscle and burn fat effectively. You&apos;ll work hard,
                but you&apos;ll always be in control of your intensity.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Classes welcome participants of all ages, fitness levels, and
                abilities. You progress at your own pace.
              </p>
            </div>
            <div>
              <p className="section-label">Schedule</p>
              <h2 className="section-title">Class Times</h2>
              <div className="space-y-3">
                {schedule.map((s) => (
                  <div
                    key={s.days}
                    className="flex justify-between items-center py-3 border-b border-gray-200"
                  >
                    <span className="font-semibold text-gray-800">{s.days}</span>
                    <span className="text-gray-600">{s.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-gray">
        <div className="container-content max-w-2xl">
          <p className="section-label text-center">Pricing</p>
          <h2 className="section-title text-center mb-8">Session Packages</h2>
          <div className="bg-white rounded-sm shadow-sm overflow-hidden">
            {pricing.map((p, i) => (
              <div
                key={p.label}
                className={`flex justify-between items-center px-8 py-5 ${
                  i !== pricing.length - 1 ? 'border-b border-gray-100' : ''
                } ${p.price === 'FREE' ? 'bg-brand-green text-white' : ''}`}
              >
                <span className={`font-semibold ${p.price === 'FREE' ? 'text-white' : 'text-gray-800'}`}>
                  {p.label}
                </span>
                <span
                  className={`text-xl font-bold ${
                    p.price === 'FREE' ? 'text-white' : 'text-brand-green'
                  }`}
                >
                  {p.price}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            No commitment required. Show up and work.
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-dark">
        <div className="container-content max-w-2xl text-center">
          <p className="text-gray-300 text-xl italic leading-relaxed mb-4">
            &ldquo;The naturally occurring mentorship that develops between the regulars
            holds you psychologically accountable and motivated to stay focused.&rdquo;
          </p>
          <p className="text-brand-green font-semibold text-sm">— Kylie M.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-content text-center">
          <h2 className="section-title">Your First Class Is Free</h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            No experience needed. No long-term commitment. Just show up, work
            hard, and see what Wayne&apos;s World is about.
          </p>
          <Link href="/contact" className="btn-primary">
            Sign Up Today
          </Link>
        </div>
      </section>
    </>
  )
}
