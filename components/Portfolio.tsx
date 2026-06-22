const projects = [
  { title: 'TaxNest LLC', category: 'Business Platform', url: 'taxnestllc.com/', href: 'https://taxnestllc.com/', gradient: 'linear-gradient(135deg,#155DFC 0%,#4F39F6 100%)' },
  { title: 'Hrudai Store Kart', category: 'E-Commerce', url: 'hrudaistorekart.com/', href: '#', gradient: 'linear-gradient(135deg,#00B8DB 0%,#0092B8 100%)' },
  { title: 'Bheej Naturals', category: 'E-Commerce', url: 'bheeijnaturals.com/', href: '#', gradient: 'linear-gradient(135deg,#00BC7D 0%,#096 100%)' },
  { title: 'Neti Tharam Advocate', category: 'Legal Platform', url: 'netitharam.com/', href: '#', gradient: 'linear-gradient(135deg,#615FFF 0%,#4F39F6 100%)' },
  { title: 'Local Delivery App', category: 'Mobile App', url: 'Mobile Application', href: '#', gradient: 'linear-gradient(135deg,#FF6900 0%,#FDC700 100%)' },
  { title: 'Ohlir', category: 'Web Platform', url: 'ohlir.com/', href: '#', gradient: 'linear-gradient(135deg,#FB2C36 0%,#C800DE 100%)' },
  { title: 'Custom CRM Portal', category: 'Business Automation', url: 'SaaS Platform', href: '#', gradient: 'linear-gradient(135deg,#0092B8 0%,#00BBA7 100%)' },
  { title: 'SaaS Dashboard', category: 'SaaS Platform', url: 'Web Application', href: '#', gradient: 'linear-gradient(135deg,#1D293D 0%,#314158 100%)' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="section-container">
        <div className="portfolio-header">
          <div>
            <h2 className="portfolio-heading">Live Projects</h2>
            <p className="portfolio-subtext">Real solutions shipped for real clients across industries.</p>
          </div>
          <button className="btn-outline">View All Case Studies</button>
        </div>

        <div className="portfolio-grid">
          {projects.map((p) => (
            <div key={p.title} className="portfolio-card">
              <div className="portfolio-card-cover" style={{ background: p.gradient }}>
                <h3>{p.title}</h3>
              </div>
              <div className="portfolio-card-body">
                <span className="portfolio-category">{p.category}</span>
                <h4 className="portfolio-title">{p.title}</h4>
                <p className="portfolio-url">{p.url}</p>
                <a
                  href={p.href}
                  target={p.href !== '#' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="portfolio-link"
                >
                  View Live <i className="fas fa-external-link-alt" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
