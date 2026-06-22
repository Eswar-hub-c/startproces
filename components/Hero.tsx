/**
 * Full-viewport hero section with animated gradient blobs,
 * a badge, headline, sub-text and two CTA buttons.
 */
export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="hero-bg-photo"
        src="https://api.builder.io/api/v1/image/assets/TEMP/ca5f59aff8ac73e081fc8126717ff5398fde585f?width=3840"
        alt=""
      />
      <div className="hero-blob hero-blob--right" />
      <div className="hero-blob hero-blob--left" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-badge">
          <i className="fas fa-bolt hero-badge-icon" />
          <span>AI-Powered Digital Studio</span>
        </div>

        <h1 className="hero-headline">
          We Build <span className="hero-highlight">AI-Integrated</span> Apps
          <br />
          &amp; SaaS Platforms That Scale
        </h1>

        <p className="hero-subtext">
          From websites and software to marketing and branding — we help businesses build, launch,
          and scale digitally.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Start Your Project <i className="fas fa-arrow-right" />
          </a>
          <a href="#contact" className="btn-glass">
            Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
