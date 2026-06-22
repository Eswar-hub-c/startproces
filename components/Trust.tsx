const features = [
  {
    icon: 'fa-lightbulb',
    title: 'Product-first mindset',
    desc: "We don't just build features; we build solutions that solve business problems and delight users.",
  },
  {
    icon: 'fa-paint-brush',
    title: 'Product-level UI/UX design',
    desc: 'Modern, clean, and conversion-focused designs that speak to your audience.',
  },
  {
    icon: 'fa-code',
    title: 'Scalable development',
    desc: 'Robust architecture that grows seamlessly with your business traffic.',
  },
  {
    icon: 'fa-chart-line',
    title: 'Strategic digital marketing',
    desc: 'Data-driven growth strategies to put your product in front of the right eyes.',
  },
  {
    icon: 'fa-star',
    title: 'Professional branding',
    desc: 'A cohesive identity that builds immediate trust and industry authority.',
  },
]

import Image from "public/images/poster.png";

export default function Trust() {
  return (
    <section id="trust" className="trust-section">
      <div className="trust-container">
        <div className="trust-text-col">
          <h2 className="trust-heading">
            Why Businesses Choose
            <br />
            <span className="text-cyan">Start Process</span>
          </h2>
          <p className="trust-description">
            Start Process is a premium digital product studio delivering modern websites, software
            systems, and growth solutions for startups and businesses. We combine high-end UI/UX with
            scalable engineering so our clients don&apos;t just launch — they grow.
          </p>
          <div className="feature-list">
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon-wrap">
                  <i className={`fas ${f.icon} feature-icon`} />
                </div>
                <div>
                  <h4 className="feature-title">{f.title}</h4>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="trust-image-col">
          <div className="trust-image-bg" />
          <div className="trust-image-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="images/poster.png"
              alt="Start Process Features"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
