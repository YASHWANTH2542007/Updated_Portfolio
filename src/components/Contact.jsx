import { useState } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_PUBLIC_KEY = 'Pj74tfMnLF4FnaN6d'
const EMAILJS_SERVICE_ID = 'service_mj0871j'
const EMAILJS_TEMPLATE_ID = 'template_9xfoihc'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState({ sending: false, message: '', type: '' })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ sending: true, message: '', type: '' })

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus({ sending: false, message: 'Thank you! Your message has been sent.', type: 'success' })
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus({ sending: false, message: 'Oops! Something went wrong. Please try again.', type: 'error' })
    }
  }

  return (
    <section id="contact" className="section-padding contact-section bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              <h2>Get In Touch</h2>
              <p>Have a project in mind, want to collaborate, or just want to say hi? I'd love to hear from you.</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <form id="contact-form" className="contact-form bg-white" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6 form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-6 form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    required
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  required
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  required
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-btn text-center">
                <button className="button" type="submit" disabled={status.sending}>
                  {status.sending ? 'Sending...' : 'Send Message'}
                </button>
                <p className={`form-message${status.type ? ' ' + status.type : ''}`}>{status.message}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
