'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
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
        <a href="#home" className="nav-logo">
          <span className="logo-quick">Start</span>
          <span className="logo-developers">Process</span>
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
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
          <a href="#contact" className="btn-primary mobile-cta" onClick={handleLinkClick}>
            Start Project
          </a>
        </div>
      )}
    </nav>
  )
}
