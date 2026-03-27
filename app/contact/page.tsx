import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact Wayne's World EFT | Lebanon, NH",
  description:
    "Get in touch with Wayne's World Elite Fitness Training in Lebanon, NH. Sign up for a free first class, ask about personal training, or learn more about our programs.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-content max-w-4xl">
          <p className="section-label">Lebanon, NH</p>
          <h1 className="text-5xl font-bold mb-4 leading-tight text-gray-900">
            Get In Touch
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl leading-relaxed">
            Ready to start? Have questions? We&apos;d love to hear from you.
            Your first bootcamp class is free.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="section">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <p className="section-label">Send a Message</p>
              <h2 className="section-title">Let&apos;s Talk</h2>
              <form action="#" method="POST" className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-gray-300 rounded-sm px-4 py-3 text-gray-900 focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-gray-300 rounded-sm px-4 py-3 text-gray-900 focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-1">
                    I&apos;m interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full border border-gray-300 rounded-sm px-4 py-3 text-gray-900 focus:outline-none focus:border-brand-red transition-colors"
                  >
                    <option value="">Select a program...</option>
                    <option value="bootcamp">Bootcamp</option>
                    <option value="personal-training">Personal Training</option>
                    <option value="athlete-performance">Athlete Performance</option>
                    <option value="wellness">Wellness Program</option>
                    <option value="other">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full border border-gray-300 rounded-sm px-4 py-3 text-gray-900 focus:outline-none focus:border-brand-red transition-colors resize-none"
                    placeholder="Tell us about your goals or ask any questions..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full text-center">
                  Send Message
                </button>
                <p className="text-xs text-gray-400 text-center">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </form>
            </div>

            {/* Info */}
            <div>
              <p className="section-label">Find Us</p>
              <h2 className="section-title">Location & Info</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                  <address className="not-italic text-gray-600 leading-relaxed">
                    <p>Building F</p>
                    <p>85 Mechanic St, Suite H1-3</p>
                    <p>Lebanon, NH 03766</p>
                  </address>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Bootcamp Schedule</h3>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p>Mon / Wed / Fri — 6:00am</p>
                    <p>Tue / Thu — 5:30pm</p>
                    <p>Saturday — 7:00am</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/waynesworldeft"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-brand-red transition-colors font-medium text-sm"
                    >
                      Instagram @waynesworldeft
                    </a>
                  </div>
                  <div className="mt-2">
                    <a
                      href="https://www.facebook.com/WaynesWorldEFT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-brand-red transition-colors font-medium text-sm"
                    >
                      Facebook WaynesWorldEFT
                    </a>
                  </div>
                </div>

                <div className="border-l-4 border-brand-red pl-6 py-2">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">First Class Is Free</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Try a bootcamp class with zero commitment. Show up, work
                    hard, and see what Wayne&apos;s World is about.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
