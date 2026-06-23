'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]
const socials = [
  { icon: 'fab fa-instagram', href: 'https://www.instagram.com/startprocess?igsh=MTE1NG5xdjh6OGwxdg==', label: 'Instagram' },
  { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/company/startprocess', label: 'LinkedIn' },
  { icon: 'fab fa-youtube', href: 'https://www.youtube.com/@StartProcess', label: 'YouTube' },
]


/**
 * Sticky top navigation bar.
 * On mobile (≤768 px) the nav links collapse into a slide-down drawer
 * toggled by a hamburger button.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close drawer when viewport widens past the mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close drawer when a nav link is clicked
  function handleLinkClick() {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo-image"> 
          <img src="images/startprocess.png" alt="Start Process Logo" width={100} height={50} />
          </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          {socials.map((s) => (
          <a key={s.label} href={s.href} aria-label={s.label}>
            <i className={s.icon} />
          </a>
        ))}
        </ul>


        <a href="#contact" className="nav-cta nav-cta--desktop">
          Start Project
        </a>

        {/* Hamburger toggle (mobile only) */}
        <button
          className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={handleLinkClick}>{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="mobile-social-links">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} onClick={handleLinkClick}>
                <i className={s.icon} />
              </a>
            ))}
          </div>
          <a href="#contact" className="btn-primary mobile-cta" onClick={handleLinkClick}>
            Start Project
          </a>
        </div>
      )}
    </nav>
  )
}
