import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    title: 'Bootcamp',
    href: '/bootcamp',
    description:
      '60-minute metabolic circuit training. Full-body, high-energy, open to all fitness levels.',
    icon: '⚡',
  },
  {
    title: 'Personal Training',
    href: '/personal-training',
    description:
      'One-on-one coaching built around your goals, your schedule, and your starting point.',
    icon: '🎯',
  },
  {
    title: 'Athlete Performance',
    href: '/athlete-performance',
    description:
      'Strength, speed, and movement coaching for athletes at every level.',
    icon: '🏅',
  },
  {
    title: 'Wellness Program',
    href: '/wellness',
    description:
      'Strength training, goal-setting, accountability, and optional nutrition guidance.',
    icon: '💪',
  },
]

const testimonials = [
  {
    quote:
      "Wayne's World provides a high caliber fitness experience. Wayne and his team are outstanding trainers.",
    name: 'Laura D.',
  },
  {
    quote:
      'The naturally occurring mentorship that develops between the regulars holds you psychologically accountable and motivated to stay focused.',
    name: 'Kylie M.',
  },
]

const audiences = [
  {
    title: 'Train for Life',
    description:
      'Structured, high-energy training for adults and professionals who want strength, consistency, and accountability.',
    href: '/bootcamp',
    cta: 'See Bootcamp',
  },
  {
    title: 'Train Like an Athlete',
    description:
      'Performance-focused coaching for high school, college, and advanced athletes.',
    href: '/athlete-performance',
    cta: 'See Athlete Performance',
  },
  {
    title: 'Train for Results',
    description:
      'Body transformation and wellness programs designed for real, sustainable progress.',
    href: '/wellness',
    cta: 'See Wellness Program',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero — split layout with Wayne's photo */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
            {/* Text */}
            <div className="flex flex-col justify-center py-20 px-6 lg:pr-16">
              <p className="section-label">Lebanon, NH · Upper Valley</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
                Elite Fitness Training<br />in the Upper Valley
              </h1>
              <p className="text-gray-600 text-xl mb-8 max-w-xl leading-relaxed">
                Personal training, bootcamps, and athlete performance coaching —
                built around results, accountability, and real community.
              </p>
              <p className="text-sm text-gray-400 mb-10 italic">
                Trusted by professional athletes, Olympians, high school and college athletes,
                and adults across the Upper Valley.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Started
                </Link>
                <Link href="/bootcamp" className="btn-outline">
                  See Bootcamp
                </Link>
              </div>
            </div>

            {/* Photo */}
            <div className="relative min-h-[400px] lg:min-h-0">
              <Image
                src="/images/hero-wayne.jpeg"
                alt="Wayne Burwell — Wayne's World Elite Fitness Training"
                fill
                className="object-cover"
                priority
              />
              {/* Red accent bar on left edge */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-red" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission quote */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="container-content max-w-3xl">
          <div className="border-l-4 border-brand-red pl-8">
            <p className="text-2xl font-medium text-gray-900 leading-relaxed">
              &ldquo;My mission at Wayne&apos;s World EFT is to educate you on the advantages
              of a lifestyle of good health and individual fitness.&rdquo;
            </p>
            <p className="text-brand-red font-semibold text-sm mt-4 uppercase tracking-widest">
              — Wayne Burwell, Founder
            </p>
          </div>
        </div>
      </section>

      {/* Who We Train */}
      <section className="section">
        <div className="container-content">
          <p className="section-label text-center">Who We Train</p>
          <h2 className="section-title text-center mb-12">
            Find Your Program
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="border border-gray-200 p-8 rounded-sm hover:border-brand-red transition-colors group"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-red transition-colors">
                  {a.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">{a.description}</p>
                <Link
                  href={a.href}
                  className="text-brand-red text-sm font-semibold hover:underline"
                >
                  {a.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-gray">
        <div className="container-content">
          <p className="section-label text-center">What We Offer</p>
          <h2 className="section-title text-center mb-12">Training Programs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md hover:border-l-4 hover:border-brand-red transition-all group flex gap-5"
              >
                <span className="text-3xl">{s.icon}</span>
                <div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-brand-red transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community photo + testimonials */}
      <section className="section-dark">
        <div className="container-content">
          <p className="text-brand-red text-sm font-semibold uppercase tracking-widest text-center mb-3">
            Our Community
          </p>
          <h2 className="section-title-white text-center mb-10">
            Real People. Real Results.
          </h2>

          {/* Group photo */}
          <div className="relative w-full h-72 md:h-96 mb-12 rounded-sm overflow-hidden">
            <Image
              src="/images/community.jpeg"
              alt="Wayne's World EFT community — Lebanon, NH"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-brand-dark/40" />
            <div className="absolute bottom-4 left-6">
              <p className="text-white text-sm font-semibold uppercase tracking-widest">Lebanon, NH · Est. 1999</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-brand-gray p-8 rounded-sm border border-gray-700">
                <p className="text-gray-300 text-lg leading-relaxed mb-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-brand-red font-semibold text-sm">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO / CTA */}
      <section className="section-accent">
        <div className="container-content text-center max-w-3xl">
          <p className="section-label">Lebanon, NH</p>
          <h2 className="section-title">
            Upper Valley&apos;s Premier Training Facility
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Located at 85 Mechanic St in Lebanon, NH, Wayne&apos;s World EFT has been
            serving the Upper Valley community since 1999. Whether you&apos;re a beginner
            looking for accountability or an athlete chasing performance gains —
            there&apos;s a program for you.
          </p>
          <Link href="/contact" className="btn-primary">
            Start Today — First Session Free
          </Link>
        </div>
      </section>
    </>
  )
}
