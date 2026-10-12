import React, { useState } from 'react';
import { CONFIG } from '../config';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    goal: '',
    tools: '',
    website: '' // honeypot
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ show: false, type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Enter your name.";
    }
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Enter a valid business email.";
    }
    if (!formData.company.trim()) {
      newErrors.company = "Enter your company name.";
    }
    if (formData.goal.trim().length < 10) {
      newErrors.goal = "Describe what you'd like to improve (at least 10 characters).";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ show: false, type: '', message: '' });

    if (!validate()) return;
    if (formData.website) return; // bot detected

    if (!CONFIG.formEndpoint) {
      setStatus({
        show: true,
        type: 'bad',
        message: `This form isn't connected to a live backend endpoint yet, so your message wasn't dispatched.${
          CONFIG.email ? ` Please email directly to ${CONFIG.email}.` : ''
        }`
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        goal: formData.goal,
        tools: formData.tools
      };

      const response = await fetch(CONFIG.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      setFormData({
        name: '',
        email: '',
        company: '',
        goal: '',
        tools: '',
        website: ''
      });
      setStatus({
        show: true,
        type: 'ok',
        message: "Thanks! Your inquiry has been sent and our team will be in touch shortly."
      });
    } catch (err) {
      setStatus({
        show: true,
        type: 'bad',
        message: `Something went wrong and your message couldn't be sent. Please try again${
          CONFIG.email ? ` or email ${CONFIG.email}` : ''
        }.`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{ paddingTop: 0 }}>
      <div className="wrap contact-grid">
        <div>
          <h2>Tell us what to improve.</h2>
          <p className="lead" style={{ marginTop: '16px' }}>
            Share a few details and we'll follow up with a practical next step.
          </p>
          <div className="cinfo">
            <p>
              Email:{' '}
              {CONFIG.email ? (
                <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
              ) : (
                <span style={{ color: 'var(--muted)' }}>Email address coming soon</span>
              )}
            </p>
            <p>
              {CONFIG.bookingUrl ? (
                <a href={CONFIG.bookingUrl} target="_blank" rel="noopener noreferrer">
                  Schedule direct discovery call →
                </a>
              ) : (
                "Booking link coming soon. Use the form to reach us."
              )}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate aria-describedby="status">
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              value={formData.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
            />
            {errors.name && <div className="err" id="e-name">{errors.name}</div>}
          </div>

          <div>
            <label htmlFor="email">Business email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
            />
            {errors.email && <div className="err" id="e-email">{errors.email}</div>}
          </div>

          <div>
            <label htmlFor="company">Company name</label>
            <input
              id="company"
              name="company"
              autoComplete="organization"
              required
              value={formData.company}
              onChange={handleChange}
              aria-invalid={!!errors.company}
            />
            {errors.company && <div className="err" id="e-company">{errors.company}</div>}
          </div>

          <div>
            <label htmlFor="goal">What would you like to improve or automate?</label>
            <textarea
              id="goal"
              name="goal"
              required
              minLength={10}
              value={formData.goal}
              onChange={handleChange}
              aria-invalid={!!errors.goal}
            />
            {errors.goal && <div className="err" id="e-goal">{errors.goal}</div>}
          </div>

          <div>
            <label htmlFor="tools">
              Current tools or systems <small>(optional)</small>
            </label>
            <input
              id="tools"
              name="tools"
              placeholder="e.g. HubSpot, Google Workspace, WhatsApp"
              value={formData.tools}
              onChange={handleChange}
            />
          </div>

          {/* Honeypot field for bot protection */}
          <input
            className="hp"
            name="website"
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
            value={formData.website}
            onChange={handleChange}
          />

          {status.show && (
            <div
              className={`status show ${status.type}`}
              id="status"
              role="status"
              aria-live="polite"
            >
              {status.message}
            </div>
          )}

          <button
            className="btn btn-primary"
            type="submit"
            id="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending…" : "Send inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}
