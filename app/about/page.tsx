import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "About Wayne's World EFT | Lebanon, NH",
  description:
    "Learn about Wayne Burwell and the Wayne's World EFT coaching team. Serving the Upper Valley since 1999 with personal training, bootcamps, and athlete performance programs.",
}

const trainers = [
  {
    name: 'Wayne Burwell',
    certs: 'USAW · CSCS · NASM · Dartmouth College \'97',
    bio: 'Wayne has been coaching since 1999 and has worked with professional athletes, Olympians, high school and college athletes, marathoners, triathletes, and everyday adults across the Upper Valley. He founded Wayne\'s World EFT on the belief that education, accountability, and community are the foundation of lasting fitness.',
  },
  {
    name: 'Dan Randall',
    certs: 'USAW',
    bio: 'Specializes in injury prevention and athletic performance. A competitive powerlifter with multiple competition wins, Dan works with athletes from elementary school through college.',
  },
  {
    name: 'Devin Mulac',
    certs: 'CSCS · PES · Pn1 · BS Exercise Science',
    bio: 'Experienced with youth athletes, adults, and individuals with Parkinson\'s. Devin\'s programming is rooted in exercise science and tailored to each client\'s specific needs.',
  },
  {
    name: 'Alyssa Godesky',
    certs: 'NASM CPT',
    bio: 'A retired professional triathlete and ultrarunner, Alyssa specializes in female athletes and works with clients ranging from competitive high school athletes to seniors looking to stay active.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-content max-w-4xl">
          <p className="section-label">Since 1999</p>
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            About Wayne&apos;s World EFT
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            Built on accountability, community, and the belief that every person
            can achieve a healthier, stronger life.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container-content max-w-3xl">
          <p className="section-label">Our Mission</p>
          <h2 className="section-title">Education. Accountability. Community.</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-lg">
            &ldquo;My mission at Wayne&apos;s World EFT is to educate you on the advantages
            of a lifestyle of good health and individual fitness.&rdquo;
          </p>
          <p className="text-brand-red font-semibold mb-6">— Wayne Burwell</p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Wayne&apos;s World Elite Fitness Training has been serving the Lebanon, NH
            and Upper Valley community since 1999. What started as a personal
            training practice has grown into a full-service fitness community with
            programs for adults, athletes, and everyone in between.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you&apos;re stepping into a gym for the first time or you&apos;re a
            competitive athlete chasing performance gains, the goal is the same:
            help you build a sustainable, high-functioning lifestyle through
            structured training and real accountability.
          </p>
        </div>
      </section>

      {/* The Team */}
      <section className="section-gray">
        <div className="container-content">
          <p className="section-label text-center">The Team</p>
          <h2 className="section-title text-center mb-12">Our Coaches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainers.map((t) => (
              <div key={t.name} className="bg-white p-8 rounded-sm shadow-sm">
                <h3 className="text-xl font-bold mb-1">{t.name}</h3>
                <p className="text-brand-red text-sm font-medium mb-4">{t.certs}</p>
                <p className="text-gray-600 leading-relaxed text-sm">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section">
        <div className="container-content max-w-3xl">
          <p className="section-label">Find Us</p>
          <h2 className="section-title">Located in Lebanon, NH</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We&apos;re based in the heart of the Upper Valley, easily accessible from
            Lebanon, Hanover, West Lebanon, and surrounding communities.
          </p>
          <div className="bg-gray-50 rounded-sm p-8 border border-gray-200">
            <p className="font-bold text-gray-900 text-lg">Wayne&apos;s World Elite Fitness Training</p>
            <p className="text-gray-600 mt-2">Building F</p>
            <p className="text-gray-600">85 Mechanic St, Suite H1-3</p>
            <p className="text-gray-600">Lebanon, NH 03766</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark">
        <div className="container-content text-center">
          <h2 className="section-title-white">Come See What We&apos;re About</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            The best way to understand Wayne&apos;s World is to show up and experience
            it. Your first bootcamp class is free.
          </p>
          <Link href="/contact" className="btn-outline">
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  )
}
