const serviceLinks = ['Web Development', 'App Development', 'E-Commerce', 'Business Automation', 'Digital Marketing']
const companyLinks = [
  { label: 'About Us', href: '#trust' },
  { label: 'Our Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]
const socials = [
  { icon: 'fab fa-facebook-f', href: '#', label: 'Facebook' },
  { icon: 'fab fa-instagram', href: '#', label: 'Instagram' },
  { icon: 'fab fa-linkedin-in', href: '#', label: 'LinkedIn' },
  { icon: 'fab fa-youtube', href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span className="logo-quick">Start</span>
            <span className="logo-developers">Process</span>
          </a>
          <p className="footer-tagline">
            Premium digital studio crafting scalable web, mobile, and AI solutions for businesses
            that don&apos;t settle for average.
          </p>
          <div className="footer-social">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}>
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-links-col">
          <h5>Services</h5>
          <ul>
            {serviceLinks.map((link) => (
              <li key={link}><a href="#services">{link}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-links-col">
          <h5>Company</h5>
          <ul>
            {companyLinks.map((link) => (
              <li key={link.label}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-links-col">
          <h5>Contact</h5>
          <ul>
            <li><a href="mailto:startproces@gmail.com">startproces@gmail.com</a></li>
            <li><a href="https://wa.me/913333333333">+91 33333 333 33</a></li>
            <li><span>India | Global Operations</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Start Process. All rights reserved.</p>
      </div>
    </footer>
  )
}
