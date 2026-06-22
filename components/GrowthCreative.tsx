const cards = [
  {
    icon: 'fa-bullhorn',
    color: '#0092B8',
    title: 'Digital Marketing & Growth',
    desc: 'SEO, Ads, and Data-driven marketing strategies to drastically increase your brand visibility, leads, and conversions.',
    items: ['Website SEO & Google Profile', 'Meta & Google Ads Campaigns', 'Performance Marketing Strategy'],
  },
  {
    icon: 'fa-palette',
    color: '#4F39F6',
    title: 'Design & Creative Services',
    desc: 'Premium visual creatives, logo/brand identity, UI/UX, and motion graphics that strengthen your brand.',
    items: ['UI/UX Design', 'Logo Design & Brand Identity', 'Video Editing & Animation'],
  },
]

export default function GrowthCreative() {
  return (
    <section className="growth-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow section-eyebrow--light">More Services</span>
          <h2 className="section-heading section-heading--light">Growth &amp; Creative</h2>
          <p className="section-subheading section-subheading--light">
            Full-spectrum marketing and creative services to build authority and scale results.
          </p>
        </div>

        <div className="growth-grid">
          {cards.map((card) => (
            <div key={card.title} className="service-card service-card--dark-border">
              <div className="service-card-icon" style={{ background: card.color }}>
                <i className={`fas ${card.icon}`} />
              </div>
              <h3 className="service-card-title">{card.title}</h3>
              <p className="service-card-desc">{card.desc}</p>
              <ul className="service-card-list">
                {card.items.map((item) => (
                  <li key={item}>
                    <span className="dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
