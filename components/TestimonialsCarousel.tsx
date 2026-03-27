'use client'

import { useState, useEffect } from 'react'

const testimonials = [
  {
    quote:
      "I owe a great deal of my success to Wayne, and would definitely recommend his gym to every young hockey player and athlete in the Upper Valley.",
    name: 'Ben Lovejoy',
    title: 'Former NHL Defenseman & Dartmouth Hockey / Lacrosse Player',
  },
  {
    quote:
      "The results from working with Wayne were absolutely amazing! I could very quickly notice that my health was returning. I lost body fat and felt stronger and more energetic within a few weeks. It wasn't easy but it was definitely worth it.",
    name: 'Joe S.',
    title: null,
  },
  {
    quote:
      'The naturally occurring mentorship that develops between the regulars holds you psychologically accountable and motivated to stay focused.',
    name: 'Kylie M.',
    title: null,
  },
  {
    quote:
      "Wayne's World provides a high caliber fitness experience. Wayne and his team are outstanding trainers.",
    name: 'Laura D.',
    title: null,
  },
]

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () =>
    setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <div className="max-w-3xl mx-auto">
      {/* Card */}
      <div className="bg-brand-gray p-10 rounded-sm border border-gray-700 min-h-[180px] flex flex-col justify-center">
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6 italic text-center">
          &ldquo;{testimonials[current].quote}&rdquo;
        </p>
        <p className="text-gray-300 font-semibold text-sm text-center uppercase tracking-widest">
          — {testimonials[current].name}
        </p>
        {testimonials[current].title && (
          <p className="text-gray-400 text-xs text-center mt-1 normal-case tracking-normal">
            {testimonials[current].title}
          </p>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          onClick={prev}
          aria-label="Previous"
          className="text-gray-400 hover:text-white transition-colors p-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? 'bg-brand-red' : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="text-gray-400 hover:text-white transition-colors p-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
