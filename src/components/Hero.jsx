import React from 'react';
import { CONFIG } from '../config';

export function Hero() {
  const bookingHref = CONFIG.bookingUrl || "#contact";
  const bookingTarget = CONFIG.bookingUrl ? "_blank" : undefined;
  const bookingRel = CONFIG.bookingUrl ? "noopener noreferrer" : undefined;

  return (
    <section className="hero" id="home">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">AI AUTOMATION FOR GROWING BUSINESSES</p>
          <h1>AI Solutions <em>That Work.</em></h1>
          <p className="sub">Put AI to work in your business.</p>
          <p className="lead">
            SpicaLabs helps growing businesses automate repetitive work, improve customer interactions, and simplify operations with practical AI solutions built around their needs.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#contact">Automate Your Business</a>
            <a
              className="btn btn-ghost"
              href={bookingHref}
              target={bookingTarget}
              rel={bookingRel}
            >
              Book a Discovery Call
            </a>
          </div>
          <ul className="points">
            <li>Connects to your existing tools</li>
            <li>Built around your workflows</li>
            <li>Human oversight by design</li>
          </ul>
        </div>

        <svg
          className="viz"
          viewBox="0 0 520 460"
          role="img"
          aria-label="Diagram: business tools such as email, CRM and calendar connect through an AI workflow layer to outcomes like replies, records and reports."
        >
          <defs>
            <linearGradient id="heroGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#3B82F6" />
              <stop offset="1" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="#34437A" strokeWidth="1.2" className="flow">
            <path d="M130 90 C200 90 200 230 260 230" />
            <path d="M130 230 L260 230" />
            <path d="M130 370 C200 370 200 230 260 230" />
            <path d="M260 230 C320 230 320 90 390 90" />
            <path d="M260 230 L390 230" />
            <path d="M260 230 C320 230 320 370 390 370" />
          </g>
          <g fontFamily="Manrope, sans-serif" fontSize="13" fontWeight="600" fill="#C9D2EA">
            <g>
              <rect x="30" y="68" width="100" height="44" rx="10" fill="#0E1530" stroke="#2A3560" />
              <text x="80" y="95" textAnchor="middle">Email</text>
            </g>
            <g>
              <rect x="30" y="208" width="100" height="44" rx="10" fill="#0E1530" stroke="#2A3560" />
              <text x="80" y="235" textAnchor="middle">CRM</text>
            </g>
            <g>
              <rect x="30" y="348" width="100" height="44" rx="10" fill="#0E1530" stroke="#2A3560" />
              <text x="80" y="375" textAnchor="middle">Calendar</text>
            </g>
            <g>
              <rect x="390" y="68" width="100" height="44" rx="10" fill="#0E1530" stroke="#2A3560" />
              <text x="440" y="95" textAnchor="middle">Replies</text>
            </g>
            <g>
              <rect x="390" y="208" width="100" height="44" rx="10" fill="#0E1530" stroke="#2A3560" />
              <text x="440" y="235" textAnchor="middle">Records</text>
            </g>
            <g>
              <rect x="390" y="348" width="100" height="44" rx="10" fill="#0E1530" stroke="#2A3560" />
              <text x="440" y="375" textAnchor="middle">Reports</text>
            </g>
          </g>
          <rect x="215" y="185" width="90" height="90" rx="22" fill="#0B1124" stroke="url(#heroGradient)" strokeWidth="1.6" />
          <circle cx="260" cy="230" r="58" fill="none" stroke="#3B82F6" className="pulse" strokeWidth="1" />
          <path d="M248 206l3.4 9.6 9.6 3.4-9.6 3.4L248 232l-3.4-9.6-9.6-3.4 9.6-3.4z" fill="#3B82F6" />
          <path d="M272 232l2.4 6.6 6.6 2.4-6.6 2.4-2.4 6.6-2.4-6.6-6.6-2.4 6.6-2.4z" fill="#8B5CF6" />
          <text x="260" y="300" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fill="#9AA4BF">Workflow layer</text>
        </svg>
      </div>
    </section>
  );
}
