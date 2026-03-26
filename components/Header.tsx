'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/bootcamp', label: 'Bootcamp' },
  { href: '/personal-training', label: 'Personal Training' },
  { href: '/athlete-performance', label: 'Athlete Performance' },
  { href: '/wellness', label: 'Wellness' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-brand-dark sticky top-0 z-50 shadow-md">
      <div className="container-content flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Wayne's World Elite Fitness Training"
            width={48}
            height={48}
            className="object-contain"
          />
          <span className="text-white font-bold text-lg leading-tight hidden sm:block">
            Wayne&apos;s World <span className="text-brand-green">EFT</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors duration-150 ${
                pathname === href
                  ? 'text-brand-green'
                  : 'text-gray-300 hover:text-white'
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
          className="lg:hidden text-white p-2"
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
        <div className="lg:hidden bg-brand-gray border-t border-gray-700 px-6 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  pathname === href
                    ? 'text-brand-green'
                    : 'text-gray-300 hover:text-white'
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
