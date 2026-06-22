'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'How long does it take to build a website or app?',
    a: 'Timelines vary by scope. A standard business website takes 2–3 weeks, while a full web or mobile app can take 6–12 weeks. We define clear milestones in the agreement phase.',
  },
  {
    q: 'What is included in the ₹4999 starting package?',
    a: 'The starting price covers a single-page or simple multi-page website. All projects are custom scoped — we provide a detailed quote after an initial discovery call.',
  },
  {
    q: 'Do you offer post-launch maintenance and support?',
    a: 'Yes. We offer ongoing maintenance, performance monitoring, and growth support plans to ensure your product evolves with your business needs.',
  },
  {
    q: 'Can you work with clients outside India?',
    a: 'Absolutely. We serve clients globally and operate across multiple time zones. Communication is primarily handled via WhatsApp, email, and video calls.',
  },
  {
    q: 'Do you provide branding and design-only services?',
    a: 'Yes. Our Design & Creative team can independently handle logo design, brand identity, UI/UX design, and video editing without a development engagement.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="faq-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-heading">Common Queries</h2>
          <p className="section-subheading">Answers to the questions we get asked most often.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className="faq-item">
                <button
                  className="faq-question-btn"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {faq.q}
                  <span className={`faq-chevron${isOpen ? ' faq-chevron--open' : ''}`}>+</span>
                </button>
                {isOpen && (
                  <div className="faq-answer-wrap">
                    <p className="faq-answer">{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
