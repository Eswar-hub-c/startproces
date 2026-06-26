'use client'

import { useState } from 'react'

const tabs = ['Web Platform & Mobile Apps', 'Databases', 'Cloud & DevOps', 'UI/UX', 'Cybersecurity']

const techByTab: Record<string, { icon: string; label: string; color?: string; text?: string }[]> = {
  'Web Platform & Mobile Apps': [
    { icon: 'fab fa-react', label: 'React', color: '#61DAFB' },
    { icon: 'fab fa-node-js', label: 'Node.js', color: '#339933' },
    { icon: 'fab fa-vuejs', label: 'Vue.js', color: '#00BC7D' },
    { icon: 'fab fa-laravel', label: 'Laravel', color: '#FB2C36' },
    { icon: '', label: 'Ionic', text: 'ionic', color: '#2B7FFF' },
    { icon: 'fab fa-python', label: 'Python', color: '#3776AB' },
    { icon: 'fab fa-android', label: 'Android', color: '#3DDC84' },
    { icon: 'fab fa-apple', label: 'iOS', color: '#555' },
    { icon: 'fab fa-wordpress', label: 'WordPress', color: '#21759B' },
    { icon: 'fas fa-fire', label: 'Firebase', color: '#FFA611' },
  ],
  'Databases': [
    { icon: 'fas fa-database', label: 'MySQL', color: '#4479A1' },
    { icon: 'fas fa-leaf', label: 'MongoDB', color: '#47A248' },
    { icon: 'fas fa-server', label: 'PostgreSQL', color: '#336791' },
    { icon: 'fas fa-bolt', label: 'Redis', color: '#DC382D' },
    { icon: 'fas fa-fire', label: 'Firebase', color: '#FFA611' },
  ],
  'Cloud & DevOps': [
    { icon: 'fab fa-aws', label: 'AWS', color: '#FF9900' },
    { icon: 'fab fa-digital-ocean', label: 'DigitalOcean', color: '#0080FF' },
    { icon: 'fab fa-docker', label: 'Docker', color: '#2496ED' },
    { icon: 'fab fa-git-alt', label: 'Git', color: '#F05032' },
    { icon: 'fas fa-cloud', label: 'Nginx', color: '#009639' },
  ],
  'UI/UX': [
    { icon: 'fab fa-figma', label: 'Figma', color: '#F24E1E' },
    { icon: 'fas fa-paint-brush', label: 'Adobe XD', color: '#FF61F6' },
    { icon: 'fab fa-css3-alt', label: 'Tailwind CSS', color: '#06B6D4' },
    { icon: 'fas fa-drafting-compass', label: 'Framer', color: '#0055FF' },
    { icon: 'fas fa-magic', label: 'GSAP', color: '#88CE02' },
  ],
  'Cybersecurity': [
  { icon: 'fab fa-linux', label: 'Kali Linux', color: '#557C94' },
  { icon: 'fas fa-bug', label: 'Burp Suite', color: '#F26C21' },
  { icon: 'fas fa-network-wired', label: 'Nmap', color: '#7B1FA2' },
  { icon: 'fas fa-search', label: 'Subfinder', color: '#00C853' },
  { icon: 'fas fa-database', label: 'SQLMap', color: '#1976D2' },
  { icon: 'fas fa-project-diagram', label: 'Maltego', color: '#00ACC1' },
  { icon: 'fas fa-globe', label: 'Amass', color: '#FF7043' },
  { icon: 'fas fa-terminal', label: 'Metasploit', color: '#1565C0' },
  { icon: 'fas fa-shield-alt', label: 'OWASP ZAP', color: '#4CAF50' },
  { icon: 'fas fa-user-secret', label: 'Wireshark', color: '#00599C' },
],
}

export default function TechStack() {
  const [activeTab, setActiveTab] = useState(tabs[0])
  const techs = techByTab[activeTab]

  return (
    <section id="process" className="tech-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="tech-heading">
            Our <span className="text-gradient">Winning</span> Process
          </h2>
          <p className="section-subheading">Powering your digital success with the latest tech stack.</p>
        </div>

        <div className="tech-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tech-tab${activeTab === tab ? ' tech-tab--active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="tech-grid">
          {techs.map((tech) => (
            <div key={tech.label} className="tech-card">
              <div className="tech-logo-circle">
                {tech.text ? (
                  <span style={{ fontWeight: 700, fontSize: 14, color: tech.color }}>{tech.text}</span>
                ) : (
                  <i className={tech.icon} style={{ color: tech.color }} />
                )}
              </div>
              <span>{tech.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
