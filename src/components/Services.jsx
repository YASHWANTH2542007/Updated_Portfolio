const SERVICES = [
  {
    icon: 'fa fa-code',
    title: 'Web Development',
    text: 'Building websites with semantic HTML5, modern CSS3 (Flexbox, Grid), and vanilla JavaScript. I care about clean, readable, and maintainable code.',
  },
  {
    icon: 'fab fa-react',
    title: 'React Development',
    text: 'Building component-based UIs with React, managing state with hooks, and creating single-page applications with a focus on performance and reusability.',
  },
  {
    icon: 'fa fa-mobile-alt',
    title: 'Responsive Design',
    text: 'Every project I build is fully responsive — designed mobile-first and tested across screen sizes using Bootstrap, CSS Grid, and media queries.',
  },
  {
    icon: 'fab fa-git-alt',
    title: 'Version Control',
    text: 'Using Git and GitHub for source control, managing branches, writing meaningful commit messages, and keeping projects organised and collaborative.',
  },
  {
    icon: 'fa fa-paint-brush',
    title: 'UI / Figma',
    text: 'Designing wireframes and mockups in Figma before writing code. Understanding design systems, spacing, and visual hierarchy to bridge design and development.',
  },
  {
    icon: 'fa fa-robot',
    title: 'AI Integration',
    text: 'Exploring how to integrate AI APIs and tools into web interfaces. Interned on an AI-driven student wellness platform aligned with UN Sustainable Development Goals.',
  },
]

export default function Services() {
  return (
    <section id="service" className="section-padding pb-70 service-area bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              <h2>What I Do</h2>
              <p>Technologies and tools I work with to build web experiences.</p>
            </div>
          </div>
        </div>

        <div className="row">
          {SERVICES.map((s) => (
            <div className="col-lg-4 col-md-6" key={s.title}>
              <div className="single-service">
                <div className="service-icon">
                  <i className={s.icon}></i>
                </div>
                <h2>{s.title}</h2>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
