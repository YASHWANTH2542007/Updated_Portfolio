const ITEMS = [
  {
    icon: 'fa fa-code',
    title: 'Frontend Development',
    text: 'I build responsive, accessible websites using HTML5, CSS3, and JavaScript. I focus on clean code, fast load times, and smooth user experiences across all devices.',
  },
  {
    icon: 'fa fa-paint-brush',
    title: 'UI Design',
    text: 'I design clean, intuitive interfaces with a strong eye for layout, typography, and color. I use tools like Figma to translate ideas into polished, user-centred designs.',
  },
  {
    icon: 'fa fa-brain',
    title: 'AI-Driven Projects',
    text: 'Exploring the intersection of AI and web. Completed the 1M1B AI for Sustainability internship in collaboration with IBM SkillsBuild and AICTE, building socially impactful concepts.',
  },
]

export default function Featured() {
  return (
    <section id="featured" className="section-padding pb-70">
      <div className="container">
        <div className="row">
          {ITEMS.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.title}>
              <div className="single-featured-item-wrap">
                <h3><a href="#">{item.title}</a></h3>
                <div className="single-featured-item">
                  <div className="featured-icon">
                    <i className={item.icon}></i>
                  </div>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
