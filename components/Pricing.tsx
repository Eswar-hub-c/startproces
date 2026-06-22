const features = [
  'Transparent Custom Scoping',
  'Fast ROI Focus',
  'Premium Engineering',
  'Long-term Scale Support',
]

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="section-container">
        <div className="pricing-inner">
          <div className="pricing-text">
            <span className="section-eyebrow">Investment</span>
            <h2 className="pricing-heading">
              Project
              <br />
              Investment
            </h2>
            <p className="pricing-desc">
              Every project is custom-priced based on scope, features, and growth requirements. We
              offer limited slots to ensure your brand receives elite attention.
            </p>
            <ul className="pricing-features">
              {features.map((f) => (
                <li key={f}>
                  <div className="pricing-feature-icon">
                    <i className="fas fa-check" />
                  </div>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pricing-card">
            <p className="pricing-card-label">Starting from</p>
            <div className="pricing-amount">₹4999</div>
            <a href="#contact" className="btn-primary btn-primary--full">
              Start Your Project
            </a>
            <p className="pricing-card-note">Custom quote provided after discovery call</p>
          </div>
        </div>
      </div>
    </section>
  )
}
