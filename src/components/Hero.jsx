import { useEffect, useState } from 'react'

const STRINGS = ['Frontend Developer.', 'Python.', 'DSA.', 'Open to Opportunities.']

function useTypedEffect(strings, typeSpeed = 100) {
  const [text, setText] = useState('')

  useEffect(() => {
    let stringIndex = 0
    let charIndex = 0
    let deleting = false
    let timeoutId

    const tick = () => {
      const current = strings[stringIndex]

      if (!deleting) {
        charIndex++
        setText(current.slice(0, charIndex))
        if (charIndex === current.length) {
          deleting = true
          timeoutId = setTimeout(tick, 1500)
          return
        }
      } else {
        charIndex--
        setText(current.slice(0, charIndex))
        if (charIndex === 0) {
          deleting = false
          stringIndex = (stringIndex + 1) % strings.length
        }
      }
      timeoutId = setTimeout(tick, deleting ? typeSpeed / 2 : typeSpeed)
    }

    timeoutId = setTimeout(tick, typeSpeed)
    return () => clearTimeout(timeoutId)
  }, [strings, typeSpeed])

  return text
}

export default function Hero() {
  const typed = useTypedEffect(STRINGS)

  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="hero-aria" id="home">
      <div className="container">
        <div className="hero-content h-100">
          <div className="d-table">
            <div className="d-table-cell">
              <h2 className="text-uppercase">Hi, I'm Yashwanth</h2>
              <h3 className="text-uppercase">
                <span className="typed">{typed}</span>
                <span className="typed-cursor">|</span>
              </h3>
              <p>Passionate about building clean, responsive, and user-friendly web experiences.</p>
              <a href="#portfolio" className="button smooth-scroll" onClick={(e) => scrollTo(e, '#portfolio')}>
                View My Work
              </a>
              <a
                href="#contact"
                className="button smooth-scroll"
                style={{ marginLeft: 15, background: 'transparent', border: '2px solid #fff' }}
                onClick={(e) => scrollTo(e, '#contact')}
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-no-img-bg"></div>
    </div>
  )
}
