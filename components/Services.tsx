import { FaShieldAlt } from 'react-icons/fa';

const services = [
  {
    icon: 'fa-globe',
    color: '#2B7FFF',
    title: 'Web\nDevelopment',
    desc: 'Static, Dynamic, Custom Business, and Motion Graphics websites tailored for performance and conversions.',
    items: ['Custom Business Websites', 'Landing Pages for Ads', 'SaaS Web Platforms'],
  },
  {
    icon: 'fa-mobile-alt',
    color: '#00B8DB',
    title: 'Application\nDevelopment',
    desc: 'Cross-platform, high-performance mobile and web apps, complete with Admin Dashboards and APIs.',
    items: ['Android & iOS Apps', 'Web Applications', 'API Integration'],
  },
  {
    icon: 'fa-shopping-cart',
    color: '#00BBA7',
    title: 'E-Commerce\nSolutions',
    desc: 'Scalable platforms from single vendor shops to massive Multi-Vendor Marketplaces and subscription portals.',
    items: ['Custom E-Commerce Platforms', 'Multi-Vendor Marketplaces', 'Inventory & Order Management'],
  },
  {
    icon: 'fa-cogs',
    color: '#615FFF',
    title: 'Business\nAutomation',
    desc: 'Custom CRM and ERP portals engineered to streamline HR, Billing, Inventory, and specialized sector management.',
    items: ['Custom CRM Portals', 'Custom ERP Portals', 'Billing & Invoicing Software'],
  },
  {
  icon: 'fa-shield-alt',
  color: '#b88dfd',
  title: 'CYBER\nSECURITY',
  desc: 'PROTECT YOUR BUSINESS WITH ADVANCED CYBERSECURITY SOLUTIONS INCLUDING VAPT, WEB APPLICATION TESTING, NETWORK SECURITY, CLOUD SECURITY, AND APPLICATION SECURITY.',
  items: [
    'VAPT & PENETRATION TESTING',
    'WEB APPLICATION SECURITY',
    'NETWORK SECURITY',
    'CLOUD SECURITY',
    'APPLICATION SECURITY'
  ],
}
  
]

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">What We Build</span>
          <h2 className="section-heading">Product Development</h2>
          <p className="section-subheading">
            End-to-end digital solutions engineered for performance, conversion, and scalability.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <div className="service-card-icon" style={{ background: s.color }}>
                <i className={`fas ${s.icon}`} />
              </div>
              <h3 className="service-card-title" style={{ whiteSpace: 'pre-line' }}>
                {s.title}
              </h3>
              <p className="service-card-desc">{s.desc}</p>
              <ul className="service-card-list">
                {s.items.map((item) => (
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
