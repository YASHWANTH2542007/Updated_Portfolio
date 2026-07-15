import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#home', label: 'HOME' },
  { href: '#about', label: 'ABOUT' },
  { href: '#service', label: 'SKILLS' },
  { href: '#portfolio', label: 'PROJECTS' },
  { href: '#education', label: 'EDUCATION' },
  { href: '#contact', label: 'CONTACT', extraClass: 'pr0' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 1)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    setActive(href)
    setMenuOpen(false)
  }

  return (
    <header id="header" className="header">
      <nav className={`navbar navbar-expand-lg fixed-top${scrolled ? ' bg-primari' : ''}`}>
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span><i className="fa fa-bars"></i></span>
          </button>

          <div className={`collapse navbar-collapse main-menu${menuOpen ? ' show' : ''}`}>
            <ul className="navbar-nav ml-auto">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.href}
                  className={`nav-item${active === link.href ? ' active' : ''}`}
                >
                  <a
                    className={`nav-link${link.extraClass ? ' ' + link.extraClass : ''}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
