'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/bootcamp', label: 'Bootcamp' },
  { href: '/personal-training', label: 'Personal Training' },
  { href: '/wellness', label: 'Wellness Program' },
  { href: '/athlete-performance', label: 'Athlete Training' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-200">
      <div className="container-content flex items-center justify-between h-28 px-6">

        {/* Logo — no badge needed on white bg */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/logo-full.png"
            alt="Wayne's World Elite Fitness Training"
            width={300}
            height={72}
            className="object-contain hidden md:block"
            priority
          />
          <Image
            src="/images/logo.png"
            alt="Wayne's World Elite Fitness Training"
            width={88}
            height={88}
            className="object-contain md:hidden"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors duration-150 ${
                pathname === href
                  ? 'text-brand-red'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary py-2 px-5">
            Get Started
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-gray-800 p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  pathname === href
                    ? 'text-brand-red'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary text-center mt-2"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
