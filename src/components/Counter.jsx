import { useEffect, useRef, useState } from 'react'

function CountUp({ to, duration = 1600 }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1)
            setValue(Math.floor(progress * to))
            if (progress < 1) requestAnimationFrame(tick)
            else setValue(to)
          }
          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [to, duration])

  return <span className="counter-value" ref={ref}>{value}</span>
}

const FACTS = [
  { count: 10, label: 'Projects Built' },
  { count: 5, label: 'Certifications' },
  { count: 8, label: 'Technologies Learned' },
  { count: 500, label: 'Hours of Coding' },
]

export default function Counter() {
  return (
    <section
      className="section-padding pb-70 bg-img fact-counter"
      id="counter"
      style={{ backgroundImage: 'url(/assets/images/fan-fact-bg.jpg)' }}
    >
      <div className="container">
        <div className="row">
          {FACTS.map((f) => (
            <div className="col-lg-3 col-md-6 text-center" key={f.label}>
              <div className="single-fun-fact">
                <h2><CountUp to={f.count} />+</h2>
                <p>{f.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
