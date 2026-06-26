'use client'

import { useState } from 'react'
import type { FormEvent, ChangeEvent } from 'react'

const channels = [
  { bg: '#E0E7FF', iconClass: 'fas fa-envelope', iconColor: '#4F39F6', label: 'Email Studio', value: 'contact@startproces.com', href: 'mailto:contact@startproces.com' },
  { bg: '#D0FAE5', iconClass: 'fab fa-whatsapp', iconColor: '#096', label: 'WhatsApp Express', value: '+916281289228', href: 'https://wa.me/916281289228' },
  { bg: '#CEFAFE', iconClass: 'fas fa-map-marker-alt', iconColor: '#0092B8', label: 'Studio Location', value: 'India | Global Operations', href: null },
]

const socials = [
  { label: 'Instagram', icon: 'fab fa-instagram', href: 'https://www.instagram.com/startprocess?igsh=MTE1NG5xdjh6OGwxdg==' },
  { label: 'LinkedIn', icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/start-process-1a2081418/?skipRedirect=true'},
  { label: 'YouTube', icon: 'fab fa-youtube', href: 'https://www.youtube.com/@startprocess-tech' },
]

const serviceOptions = [
  'cybersecurity [WEB VAPT]',
  'Web Development',
  'Mobile App',
  'E-Commerce',
  'Business Automation',
  'Digital Marketing',
  'Design & Branding',
]

type FormFields = { name: string; email: string; service: string; message: string }
type FormErrors = Partial<Record<keyof FormFields, string>>

/** Returns a validation error string or undefined for each field. */
function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {}

  if (!fields.name.trim()) {
    errors.name = 'Full name is required.'
  } else if (fields.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  }

  if (!fields.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!fields.service) {
    errors.service = 'Please select a service.'
  }

  if (!fields.message.trim()) {
    errors.message = 'Project brief is required.'
  } else if (fields.message.trim().length < 20) {
    errors.message = 'Please provide at least 20 characters so we can understand your project.'
  }

  return errors
}

/**
 * Contact section with channel cards, social links, and a validated
 * enquiry form. Errors are shown inline beneath each field on submit;
 * fields that have been touched also validate on blur.
 */
export default function Contact() {
  const [form, setForm] = useState<FormFields>({ name: '', email: '', service: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { id, value } = e.target
    const updated = { ...form, [id]: value }
    setForm(updated)
    // Re-validate live once a field has been touched
    if (touched[id as keyof FormFields]) {
      setErrors(validate(updated))
    }
  }

  function handleBlur(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const field = e.target.id as keyof FormFields
    setTouched((t) => ({ ...t, [field]: true }))
    setErrors(validate({ ...form, [field]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const allTouched = { name: true, email: true, service: true, message: true }
    setTouched(allTouched)
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return
    setSubmitted(true)
    setForm({ name: '', email: '', service: '', message: '' })
    setTouched({})
    setErrors({})
  }

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="contact-inner">

          {/* Left column — contact info */}
          <div className="contact-text">
            <h2 className="contact-heading">
              Let&apos;s Build
              <br />
              <span className="text-gradient">
                Something
                <br />
                Great
              </span>
            </h2>
            <p className="contact-desc">
              Whether you need a website, software product, or full digital growth support —
              we&apos;re ready to help you dominate your market.
            </p>

            <div className="contact-channels">
              {channels.map((ch) => (
                <div key={ch.label} className="contact-channel-card">
                  <div className="contact-channel-icon" style={{ background: ch.bg }}>
                    <i className={ch.iconClass} style={{ color: ch.iconColor }} />
                  </div>
                  <div>
                    <p className="contact-channel-label">{ch.label}</p>
                    {ch.href ? (
                      <a href={ch.href} className="contact-channel-value">{ch.value}</a>
                    ) : (
                      <span className="contact-channel-value">{ch.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="social-btn" aria-label={s.label}>
                  <i className={s.icon} />
                  <span className="social-tooltip">{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right column — enquiry form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">
                  <i className="fas fa-check-circle" />
                </div>
                <h3 className="form-success-title">Message Sent!</h3>
                <p className="form-success-desc">
                  Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  className="btn-primary btn-primary--full"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <h3 className="contact-form-title">Start Your Project</h3>

                <div className={`form-group${errors.name ? ' form-group--error' : ''}`}>
                  <label htmlFor="name">
                    Full Name <span className="form-required">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <span className="form-error-msg" id="name-error" role="alert">
                      <i className="fas fa-exclamation-circle" /> {errors.name}
                    </span>
                  )}
                </div>

                <div className={`form-group${errors.email ? ' form-group--error' : ''}`}>
                  <label htmlFor="email">
                    Email Address <span className="form-required">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <span className="form-error-msg" id="email-error" role="alert">
                      <i className="fas fa-exclamation-circle" /> {errors.email}
                    </span>
                  )}
                </div>

                <div className={`form-group${errors.service ? ' form-group--error' : ''}`}>
                  <label htmlFor="service">
                    Service Needed <span className="form-required">*</span>
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-describedby={errors.service ? 'service-error' : undefined}
                    aria-invalid={!!errors.service}
                  >
                    <option value="">Select a service…</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <span className="form-error-msg" id="service-error" role="alert">
                      <i className="fas fa-exclamation-circle" /> {errors.service}
                    </span>
                  )}
                </div>

                <div className={`form-group${errors.message ? ' form-group--error' : ''}`}>
                  <label htmlFor="message">
                    Project Brief <span className="form-required">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your project… (min 20 characters)"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <span className="form-error-msg" id="message-error" role="alert">
                      <i className="fas fa-exclamation-circle" /> {errors.message}
                    </span>
                  )}
                  <span className="form-char-count">
                    {form.message.trim().length} / 20 min
                  </span>
                </div>

                <button type="submit" className="btn-primary btn-primary--full">
                  Send Message <i className="fas fa-paper-plane" />
                </button>

                <p className="form-privacy-note">
                  <i className="fas fa-lock" /> Your information is private and never shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
