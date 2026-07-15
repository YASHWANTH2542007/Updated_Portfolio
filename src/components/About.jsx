import SkillBar from './SkillBar.jsx'

const SKILLS = [
  { name: 'HTML5', percent: 90 },
  { name: 'CSS3', percent: 80 },
  { name: 'JavaScript', percent: 70 },
  { name: 'React', percent: 65 },
  { name: 'Bootstrap', percent: 75 },
]

export default function About() {
  return (
    <section id="about" className="section-padding about-area bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              <h2>About Me</h2>
              <p>A little bit about who I am and what drives me.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="about-dev-card">
              <div className="dev-card-inner">
                <div className="dev-card-avatar">
                  <i className="fa fa-user-circle"></i>
                </div>
                <h3 className="dev-card-name">Yashwanth</h3>
                <p className="dev-card-role">Frontend Developer</p>
                <div className="dev-card-tags">
                  {['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap', 'Git', 'AI'].map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="dev-card-location">
                  <i className="fa fa-map-marker-alt"></i> Chennai, India
                </div>
                <div className="dev-card-status">
                  <span className="status-dot"></span> Open to Opportunities
                </div>
                <div className="social-aria">
                  <a target="_blank" rel="noreferrer" href="https://github.com/YASHWANTH2542007"><i className="fab fa-github"></i></a>
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yash-b27668318/"><i className="fab fa-linkedin"></i></a>
                  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/yaashh7__/"><i className="fab fa-instagram"></i></a>
                  <a target="_blank" rel="noreferrer" href="https://leetcode.com/u/__yash25__/" className="leetcode-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" style={{ verticalAlign: 'middle' }}>
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content">
              <h2>Hello, I am <span>Yashwanth</span></h2>
              <h4>Frontend Developer & CS(AI)Student</h4>
              <p>I'm a final-year student at TJS College of Arts and Science, passionate about creating beautiful and functional web experiences. I love turning ideas into reality through code — from pixel-perfect layouts to interactive user interfaces.</p>
              <p>Beyond the classroom, I've worked on real-world projects like a student budget tracker (MoneyMate) and an AI-powered mental health support concept (MindCare AI) as part of the 1M1B AI for Sustainability Virtual Internship with IBM SkillsBuild and AICTE — aligned with UN SDGs 3, 4, and 10.</p>
              <p>I'm actively looking for frontend developer opportunities where I can grow, contribute, and build things that matter.</p>

              <a href="/assets/Yashwanth-Resume.pdf" className="button" download style={{ color: 'black' }}>
                Download Resume
              </a>

              <h5 style={{ marginTop: 30 }}>My Skills</h5>

              <div id="skills" className="skill-area">
                {SKILLS.map((s) => (
                  <SkillBar key={s.name} name={s.name} percent={s.percent} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
