const PROJECTS = [
  {
    key: 'railease',
    href: 'https://trainbooking-sandy.vercel.app/',
    gradient: 'linear-gradient(135deg,#1a237e,#283593)',
    icon: 'fa fa-train',
    title: 'RailEase',
    sub: 'Smart Train Booking Assistant',
    tech: 'HTML · CSS · JavaScript',
  },
  {
    key: 'redbox',
    href: 'https://red-box-website.vercel.app/',
    gradient: 'linear-gradient(135deg,#7f0000,#b71c1c)',
    icon: 'fa fa-utensils',
    title: 'The Red Box',
    sub: 'Indo-Chinese Restaurant Website',
    tech: 'HTML · CSS · JavaScript',
  },
  {
    key: 'moneymate',
    href: 'https://money-mate-dun.vercel.app/',
    gradient: 'linear-gradient(135deg,#1b1b00,#3e3000)',
    icon: 'fa fa-money-bill-alt',
    title: 'MoneyMate',
    sub: 'Student Budget Tracker',
    tech: 'HTML · CSS · JavaScript',
  },
  {
    key: 'bookbee',
    href: 'https://book-shop-website.vercel.app/',
    gradient: 'linear-gradient(135deg,#1a0030,#4a0072)',
    icon: 'fa fa-book',
    title: 'BookBee',
    sub: 'Online Book Store',
    tech: 'HTML · CSS · JavaScript',
  },
  {
    key: 'gemini',
    href: 'https://gemini-chatbot-six-coral.vercel.app/',
    gradient: 'linear-gradient(135deg,#003300,#1b5e20)',
    icon: 'fa fa-comments',
    title: 'Gemini Chatbot',
    sub: 'AI Chat Interface',
    tech: 'JavaScript · Gemini API',
  },
  {
    key: 'mindcare',
    href: 'https://mindcare-ai-navy.vercel.app/login',
    gradient: 'linear-gradient(135deg,#1a002a,#4a006a)',
    icon: 'fa fa-heartbeat',
    title: 'MindCare AI',
    sub: 'AI-Powered Student Mental Health Support',
    tech: 'React · AI Integration',
  },
  {
    key: 'neuronote',
    href: 'https://neuronote-ai-xi.vercel.app/',
    gradient: 'linear-gradient(135deg,#001a2a,#004a6a)',
    icon: 'fa fa-sticky-note',
    title: 'NeuroNote AI',
    sub: 'AI-Powered Productivity Assistant',
    tech: 'AI Integration · Productivity',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding pb-85 portfolio-area bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              <h2>My Projects</h2>
              <p>A selection of things I've built — from class assignments to personal projects.</p>
            </div>
          </div>
        </div>

        <div className="row portfolio">
          {PROJECTS.map((p) => (
            <div className="col-lg-4 col-md-6" key={p.key}>
              <a href={p.href} target="_blank" rel="noreferrer" className="portfolio-link">
                <div className="single-portfolio proj-card" style={{ background: p.gradient }}>
                  <div className="proj-card-body">
                    <div className="proj-icon"><i className={p.icon}></i></div>
                    <h3 className="proj-title">{p.title}</h3>
                    <p className="proj-sub">{p.sub}</p>
                    <p className="proj-tech">{p.tech}</p>
                  </div>
                  <div className="portfolio-hover">
                    <h4>{p.title} <span>{p.sub}</span></h4>
                  </div>
                  <div className="proj-visit"><i className="fa fa-external-link-alt"></i> Visit Project</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
