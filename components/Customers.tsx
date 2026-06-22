const logos = [
  { src: 'https://api.builder.io/api/v1/image/assets/TEMP/0e494afb6aabaa95107a1f5a2a4c8aa0a9af79ba?width=113', alt: 'Local Delivery App' },
  { src: 'https://api.builder.io/api/v1/image/assets/TEMP/3841b3949eb21efd5d3ade67c8e3a1ccff738041?width=194', alt: 'Neti Tharam Advocate' },
  { src: 'https://api.builder.io/api/v1/image/assets/TEMP/06757cfa9ceb5767484c628e950eaa16796ffa6d?width=189', alt: 'Hrudai Store Kart' },
  { src: 'https://api.builder.io/api/v1/image/assets/TEMP/6c1d8004156f79a40bfaf6c850d2228870582307?width=393', alt: 'Bheej Naturals' },
  { src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a9e8b1ac21c3dd6035a49eb6580d969e18f806a?width=258', alt: 'TaxNest LLC' },
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
