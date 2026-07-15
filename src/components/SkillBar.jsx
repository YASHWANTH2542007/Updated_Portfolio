import { useEffect, useRef, useState } from 'react'

export default function SkillBar({ name, percent }) {
  const ref = useRef(null)
  const [filled, setFilled] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="single-skill" ref={ref}>
      <div className="skillbar" data-percent={`${percent}%`}>
        <div className="skillbar-title"><span>{name}</span></div>
        <div
          className="skillbar-bar"
          style={{ width: filled ? `${percent}%` : '0%', transition: 'width 1s ease' }}
        ></div>
        <div className="skill-bar-percent">{percent}%</div>
      </div>
    </div>
  )
}
