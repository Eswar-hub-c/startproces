const logos = [
  { src: '', alt: 'rapido driver' },
  { src: '', alt: 'swiggy ' },
  { src: '', alt: 'd mart Store' },
  { src: '', alt: 'morana' },
  { src: '', alt: 'Taxe LLC' },
]

const allLogos = [...logos, ...logos]

export default function Customers() {
  return (
    <section className="customers-section">
      <p className="customers-label">Our Premium Customers</p>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {allLogos.map((logo, i) => (
            <div key={i} className="marquee-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
