import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-400">
      <div className="container-content px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="text-white font-bold text-lg mb-1">
              Wayne&apos;s World <span className="text-brand-red">EFT</span>
            </p>
            <p className="text-sm leading-relaxed mt-3">
              Elite fitness training in Lebanon, NH. Built around results,
              accountability, and real community since 1999.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="https://www.instagram.com/waynesworldeft"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/WaynesWorldEFT"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Training
            </p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/bootcamp" className="hover:text-white transition-colors">Bootcamp</Link></li>
              <li><Link href="/personal-training" className="hover:text-white transition-colors">Personal Training</Link></li>
              <li><Link href="/athlete-performance" className="hover:text-white transition-colors">Athlete Performance</Link></li>
              <li><Link href="/wellness" className="hover:text-white transition-colors">Wellness Program</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Location
            </p>
            <address className="not-italic text-sm space-y-1 leading-relaxed">
              <p>Building F</p>
              <p>85 Mechanic St, Suite H1-3</p>
              <p>Lebanon, NH 03766</p>
            </address>
            <div className="mt-4 text-sm space-y-1">
              <p>
                <a
                  href="https://www.instagram.com/waynesworldeft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @waynesworldeft
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-xs text-center">
          <p>
            &copy; {new Date().getFullYear()} Wayne&apos;s World Elite Fitness Training. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
