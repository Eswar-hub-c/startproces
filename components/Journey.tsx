const steps = [
  {
    num: '01.',
    title: 'Discovery &\nAgreement',
    desc: 'We dive deep into your vision, target audience, and business goals. We define clear milestones and sign a transparent agreement to ensure absolute clarity before we start.',
    accentColor: '#2B7FFF',
    iconBg: 'linear-gradient(135deg,#155DFC 0%,#00B8DB 100%)',
    icon: 'fa-search',
    side: 'left' as const,
  },
  {
    num: '02.',
    title: 'Strategic\nDesign',
    desc: 'Our design team creates wireframes and high-fidelity prototypes in Figma. We focus on conversion-led psychology and modern aesthetics to make your product truly stand out.',
    accentColor: '#615FFF',
    iconBg: 'linear-gradient(135deg,#155DFC 0%,#615FFF 100%)',
    icon: 'fa-drafting-compass',
    side: 'right' as const,
  },
  {
    num: '03.',
    title: 'Precision\nEngineering',
    desc: 'Our developers bring the designs to life using clean, scalable code. We build robust architectures that are future-proof and ready for global traffic.',
    accentColor: '#00B8DB',
    iconBg: 'linear-gradient(135deg,#0092B8 0%,#615FFF 100%)',
    icon: 'fa-code',
    side: 'left' as const,
  },
  {
    num: '04.',
    title: 'Rigorous QA\nTesting',
    desc: 'From device responsiveness to security audits, we ensure your application is bug-free and delivers a flawless user experience.',
    accentColor: '#00BC7D',
    iconBg: 'linear-gradient(135deg,#00BC7D 0%,#00B8DB 100%)',
    icon: 'fa-vial',
    side: 'right' as const,
  },
  {
    num: '05.',
    title: 'Elite Deployment\n& Support',
    desc: 'We handle the full launch sequence and provide ongoing maintenance. Our team monitors performance 24/7 to ensure your digital product evolves with your business.',
    accentColor: '#314158',
    iconBg: 'linear-gradient(135deg,#0F172B 0%,#1D293D 100%)',
    icon: 'fa-rocket',
    side: 'left' as const,
  },
]

export default function Journey() {
  return (
    <section id="journey" className="journey-section">
      <div className="journey-blob journey-blob--left" />
      <div className="journey-blob journey-blob--right" />

      <div className="section-container">
        <div className="journey-header">
          <span className="journey-eyebrow">Our Journey</span>
          <div className="journey-eyebrow-line" />
          <h2 className="journey-heading">
            The Blueprint to
            <br />
            <span className="text-gradient">Digital Excellence</span>
          </h2>
          <p className="journey-subtext">
            A battle-tested methodology designed to transform complex ideas into high-performing
            digital products for startups and industry leaders.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-line">
            <div className="timeline-line-fill" />
          </div>

          {steps.map((step) => (
            <div
              key={step.num}
              className={`timeline-step${step.side === 'right' ? ' timeline-step--right' : ''}`}
            >
              {step.side === 'left' ? (
                <>
                  <div className="timeline-content">
                    <div className="step-number-label">{step.num}</div>
                    <h3 className="step-title" style={{ whiteSpace: 'pre-line' }}>{step.title}</h3>
                    <p className="step-desc">{step.desc}</p>
                    <div className="step-accent" style={{ background: step.accentColor }} />
                  </div>
                  <div className="timeline-icon-wrap">
                    <div className="timeline-icon" style={{ background: step.iconBg }}>
                      <i className={`fas ${step.icon}`} />
                    </div>
                  </div>
                  <div className="timeline-spacer" />
                </>
              ) : (
                <>
                  <div className="timeline-spacer" />
                  <div className="timeline-icon-wrap">
                    <div className="timeline-icon" style={{ background: step.iconBg }}>
                      <i className={`fas ${step.icon}`} />
                    </div>
                  </div>
                  <div className="timeline-content timeline-content--right">
                    <div className="step-number-label">{step.num}</div>
                    <h3 className="step-title" style={{ whiteSpace: 'pre-line' }}>{step.title}</h3>
                    <p className="step-desc">{step.desc}</p>
                    <div className="step-accent" style={{ background: step.accentColor }} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
