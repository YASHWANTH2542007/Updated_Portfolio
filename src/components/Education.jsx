import { useState } from 'react'

const ITEMS = [
  {
    title: '🎓 TJS College of Arts and Science',
    body: (
      <>
        <strong>B.Sc. Computer Science</strong> — Currently pursuing my degree with a focus on web technologies, software development, and AI. Active participant in college tech events and coding competitions.
      </>
    ),
  },
  {
    title: '💼 1M1B AI for Sustainability Internship',
    body: (
      <>
        <strong>Virtual Internship — IBM SkillsBuild × AICTE</strong><br />
        Developed <em>MindCare AI</em>, an AI-powered student mental health support system concept aligned with UN SDGs 3 (Good Health), 4 (Quality Education), and 10 (Reduced Inequalities). Delivered as a full 15-slide presentation with system architecture, roadmap, and responsible AI framing.
      </>
    ),
  },
  {
    title: '📜 IBM SkillsBuild — AI Fundamentals',
    body: 'Completed the IBM SkillsBuild AI Fundamentals course covering machine learning concepts, responsible AI, and practical applications of AI in real-world problem-solving contexts.',
  },
  {
    title: '📜 freeCodeCamp — Responsive Web Design',
    body: 'Earned the freeCodeCamp Responsive Web Design certification, covering HTML5, CSS3, accessibility, flexbox, CSS grid, and building responsive projects from scratch.',
  },
]

export default function Education() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="education" className="section-padding faq-area bg-secondary">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center faq-title">
              <h2>Education & Certifications</h2>
              <p>My academic background and credentials earned along the way.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5">
            <div className="faq-bg bg-img" style={{ backgroundImage: 'url(/assets/images/faq.jpeg)' }}></div>
          </div>
          <div className="col-lg-7">
            <div className="faq-content" id="accordion">
              {ITEMS.map((item, i) => (
                <div className="single-faq" key={item.title}>
                  <h4
                    className={openIndex === i ? '' : 'collapsed'}
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    style={{ cursor: 'pointer' }}
                  >
                    {item.title}
                  </h4>
                  <div className={`collapse${openIndex === i ? ' show' : ''}`}>
                    <div className="faq-body">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
