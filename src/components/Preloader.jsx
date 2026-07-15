import { useEffect, useState } from 'react'

export default function Preloader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const hide = () => setVisible(false)
    if (document.readyState === 'complete') {
      const t = setTimeout(hide, 300)
      return () => clearTimeout(t)
    }
    window.addEventListener('load', hide)
    return () => window.removeEventListener('load', hide)
  }, [])

  if (!visible) return null

  return (
    <div className="preloader" style={{ transition: 'opacity 0.4s ease' }}>
      <div className="spinner">
        <div className="cube1"></div>
        <div className="cube2"></div>
      </div>
    </div>
  )
}
