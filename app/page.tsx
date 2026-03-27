import Link from 'next/link'
import Image from 'next/image'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'

const services = [
  {
    title: 'Bootcamp',
    href: '/bootcamp',
    description:
      '60-minute metabolic circuit training. Full-body, high-energy, open to all fitness levels.',
    icon: (
      <svg className="w-8 h-8 text-brand-red shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Personal Training',
    href: '/personal-training',
    description:
      'One-on-one coaching built around your goals, your schedule, and your starting point.',
    icon: (
      <svg className="w-8 h-8 text-brand-red shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: 'Athlete Training',
    href: '/athlete-performance',
    description:
      'Strength, speed, and movement coaching for athletes at every level.',
    icon: (
      <svg className="w-8 h-8 text-brand-red shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
      </svg>
    ),
  },
  {
    title: 'Wellness Program',
    href: '/wellness',
    description:
      'Strength training, goal-setting, accountability, and optional nutrition guidance.',
    icon: (
      <svg className="w-8 h-8 text-brand-red shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
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
    cta: 'See Athlete Training',
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
      {/* Welcome heading */}
      <section className="bg-white pt-16 pb-4 px-6">
        <div className="container-content text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Welcome to Your New Fitness Family
          </h1>
        </div>
      </section>

      {/* Wayne's photo — full width with mission text overlay on right */}
      <section className="bg-white pb-0">
        <div className="relative w-full h-[420px] md:h-[560px]">
          <Image
            src="/images/hero-wayne-official.jpg"
            alt="Wayne Burwell — Wayne's World Elite Fitness Training"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient fade from transparent (left) to dark (right) */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/80" />

          {/* Text overlay — right side */}
          <div className="absolute inset-0 flex items-center justify-end px-8 md:px-16">
            <div className="max-w-sm md:max-w-md text-right">
              <p className="text-white text-lg md:text-xl leading-relaxed italic mb-4 drop-shadow">
                &ldquo;My mission at Wayne&apos;s World EFT is to help you understand the value
                of a healthy lifestyle and the power of personal fitness.&rdquo;
              </p>
              <p className="text-brand-red font-semibold text-sm uppercase tracking-widest drop-shadow">
                — Wayne Burwell<br />
                <span className="text-white normal-case tracking-normal font-normal text-xs">
                  Founder / Owner and Personal Trainer
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Fitness Training — below Wayne's photo */}
      <section className="bg-white pt-8 pb-16 px-6 border-b border-gray-100">
        <div className="container-content max-w-4xl">
          <p className="section-label">Lebanon, NH · Upper Valley</p>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
            Elite Fitness Training<br />in the Upper Valley
          </h2>
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
      </section>

      {/* Who We Train */}
      <section className="section">
        <div className="container-content">
          <p className="section-label text-center">Who We Train</p>
          <h2 className="section-title text-center mb-12">Find Your Program</h2>
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
                <Link href={a.href} className="text-brand-red text-sm font-semibold hover:underline">
                  {a.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs — SVG icons */}
      <section className="section-gray">
        <div className="container-content">
          <p className="section-label text-center">What We Offer</p>
          <h2 className="section-title text-center mb-12">Training Programs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md hover:border-l-4 hover:border-brand-red transition-all group flex gap-5 items-start"
              >
                {s.icon}
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

      {/* Community + Testimonials Carousel */}
      <section className="section-dark">
        <div className="container-content">
          <p className="text-brand-red text-sm font-semibold uppercase tracking-widest text-center mb-3">
            Our Community
          </p>
          <h2 className="section-title-white text-center mb-10">
            Real People. Real Results.
          </h2>

          {/* Group photo — no overlay so it's clear */}
          <div className="relative w-full h-72 md:h-96 mb-12 rounded-sm overflow-hidden">
            <Image
              src="/images/community-new.jpg"
              alt="Wayne's World EFT community — Lebanon, NH"
              fill
              className="object-cover object-center"
            />
            <div className="absolute bottom-4 left-6">
              <p className="text-white text-sm font-semibold uppercase tracking-widest drop-shadow">
                Lebanon, NH · Est. 1999
              </p>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <TestimonialsCarousel />
        </div>
      </section>

      {/* CTA */}
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
