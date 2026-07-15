export default function CTA() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section-padding call-to-action-aria bg-secondary">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <h2>Open to Internships & Junior Frontend Roles</h2>
            <p>I'm actively looking for opportunities to grow as a frontend developer. If you're looking for someone eager, hardworking, and passionate about building great web experiences — let's talk!</p>
          </div>
          <div className="col-lg-3">
            <div className="cta-button">
              <div className="d-table">
                <div className="d-table-cell">
                  <a href="#contact" className="button" onClick={(e) => scrollTo(e, '#contact')}>
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
