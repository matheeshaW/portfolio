import { useRef, useState } from 'react'

import { siteData } from '../data'

function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const handleSubmit = (event) => {
    event.preventDefault()
    if (status.state === 'sending') {
      return
    }

    const formData = new FormData(event.target)
    formData.append('_subject', 'Portfolio contact form')
    formData.append('_captcha', 'false')

    setStatus({ state: 'sending', message: 'Sending your message...' })

    fetch('https://formsubmit.co/ajax/matheeshaweerakoon22@gmail.com', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Submission failed')
        }
        return response.json()
      })
      .then(() => {
        setStatus({ state: 'success', message: 'Thanks! I will reply soon.' })
        formRef.current?.reset()
      })
      .catch(() => {
        setStatus({
          state: 'error',
          message: 'Sorry, something went wrong. Please try again.',
        })
      })
  }

  return (
    <section id="contact" className="section contact reveal">
      <div className="container contact-grid">
        <div className="contact-info">
          <p className="eyebrow">Get in touch</p>
          <h2>Let&apos;s build something impactful</h2>
          <p>
            Ready to collaborate on full-stack applications, mobile experiences,
            or embedded solutions. Drop a message anytime.
          </p>
          <div className="contact-details">
            <a href={`mailto:${siteData.contact.email}`}>
              {siteData.contact.email}
            </a>
            <a href={`tel:${siteData.contact.phone}`}>
              {siteData.contact.phone}
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
          <input
            className="form-hidden"
            type="text"
            name="_honey"
            tabIndex="-1"
            autoComplete="off"
          />
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" required />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@email.com"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
              required
            />
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            disabled={status.state === 'sending'}
          >
            {status.state === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status.message ? (
            <p className={`form-status ${status.state}`} role="status" aria-live="polite">
              {status.message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}

export default Contact
